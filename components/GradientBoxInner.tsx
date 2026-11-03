"use client";

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
    console.log("fetch:", url);
    if (url.includes("city") && url.includes("hdr")) {
      return originalFetch("/hdr/city.hdr", init);
    }
    return originalFetch(input, init);
  };
}

export default function GradientBoxInner() {
  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      pixelDensity={1}
      fov={45}
    >
            <ShaderGradient
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
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
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
  );
}