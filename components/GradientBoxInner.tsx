"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

if (typeof window !== "undefined" && !(window as any).__hdrPatched) {
  (window as any).__hdrPatched = true;
  const originalFetch = window.fetch.bind(window);
  window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
    const url =
      typeof input === "string"
        ? input
        : input instanceof URL
        ? input.href
        : input.url;
    if (url.includes("city") && url.includes("hdr")) {
      return originalFetch("/hdr/city.hdr", init);
    }
    return originalFetch(input, init);
  };
}

class RetryBoundary extends Component<
  { children: ReactNode },
  { attempt: number; failed: boolean }
> {
  state = { attempt: 0, failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    if (this.state.attempt < 5) {
      setTimeout(() => {
        this.setState((s) => ({ attempt: s.attempt + 1, failed: false }));
      }, 600);
    }
  }

  render() {
    if (this.state.failed) return null;
    return (
      <div key={this.state.attempt} className="absolute inset-0">
        {this.props.children}
      </div>
    );
  }
}

export default function GradientBoxInner() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async (tries: number) => {
      try {
        const res = await fetch("/hdr/city.hdr", { cache: "force-cache" });
        if (!res.ok) throw new Error("hdr");
        await res.arrayBuffer();
        if (!cancelled) requestAnimationFrame(() => setReady(true));
      } catch {
        if (cancelled) return;
        if (tries < 5) setTimeout(() => load(tries + 1), 500);
        else setReady(true);
      }
    };

    load(0);

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;

  return (
    <RetryBoundary>
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          control="props"
          animate="on"
          brightness={0}
          cAzimuthAngle={270}
          cDistance={0.5}
          cPolarAngle={180}
          cameraZoom={15.1}
          color1="#73bfc4"
          color2="#ff810a"
          color3="#8da0ce"
          envPreset="city"
          grain="on"
          lightType="env"
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          reflection={0}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          shader="defaults"
          type="sphere"
          uAmplitude={3.2}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={0.3}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </RetryBoundary>
  );
}