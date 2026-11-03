"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const Inner = dynamic(() => import("./GradientBoxInner"), { ssr: false });

export default function GradientBox({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      <Inner />
      <div className="relative z-10">{children}</div>
    </div>
  );
}