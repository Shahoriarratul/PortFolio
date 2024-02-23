"use client";
import React, { useEffect } from "react";
import { clearScreenDown } from "readline";
import { Application } from "@splinetool/runtime";

export default function Canvas() {
  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.getElementById(
      "canvas3d",
    ) as HTMLCanvasElement;
    if (canvas) {
      const app = new Application(canvas);
      app.load("https://prod.spline.design/d-mvfO2CGrqE6Oxw/scene.splinecode");
    } else {
      console.error("Canvas element not found.");
    }
  }, []);
  return (
    <>
      <canvas id="canvas3d"></canvas>
    </>
  );
}
