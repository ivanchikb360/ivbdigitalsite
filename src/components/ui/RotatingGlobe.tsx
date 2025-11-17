"use client";

import { useState, useEffect, useMemo, useRef } from "react";

// Generate 3D sphere paths with perspective projection
// Rotation angle is passed in to recalculate paths dynamically
const generateLatitudePath = (
  latitude: number,
  rotationY: number,
  radius: number = 90,
  center: number = 100
): string => {
  const points: string[] = [];
  const steps = 80; // Reduced for better performance
  const perspective = 300;
  const tiltX = 18;
  const tiltY = 30;

  for (let i = 0; i <= steps; i++) {
    const longitude = (i / steps) * 360 - 180;
    const latRad = (latitude * Math.PI) / 180;
    const lonRad = (longitude * Math.PI) / 180;

    // Spherical to Cartesian coordinates
    let x = radius * Math.cos(latRad) * Math.cos(lonRad);
    let y = radius * Math.sin(latRad);
    let z = radius * Math.cos(latRad) * Math.sin(lonRad);

    // Apply rotation around Y axis (this is what animates)
    const rotYRad = (rotationY * Math.PI) / 180;
    const xRot = x * Math.cos(rotYRad) - z * Math.sin(rotYRad);
    const zRot = x * Math.sin(rotYRad) + z * Math.cos(rotYRad);

    // Apply base tilt (18deg X, -30deg Y)
    const tiltXRad = (tiltX * Math.PI) / 180;
    const tiltYRad = (tiltY * Math.PI) / 180;

    // Rotate around X axis
    const y1 = y * Math.cos(tiltXRad) - zRot * Math.sin(tiltXRad);
    const z1 = y * Math.sin(tiltXRad) + zRot * Math.cos(tiltXRad);

    // Rotate around Y axis (tilt)
    const x2 = xRot * Math.cos(tiltYRad) + z1 * Math.sin(tiltYRad);
    const z2 = -xRot * Math.sin(tiltYRad) + z1 * Math.cos(tiltYRad);

    // Perspective projection
    const scale = perspective / (perspective - z2 * 0.5);
    const px = center + x2 * scale;
    const py = center + y1 * scale;

    // Only include points that are visible (front-facing)
    if (z2 > -radius * 0.3) {
      points.push(`${points.length === 0 ? "M" : "L"} ${px} ${py}`);
    }
  }

  return points.join(" ");
};

const generateLongitudePath = (
  longitude: number,
  rotationY: number,
  radius: number = 90,
  center: number = 100
): string => {
  const points: string[] = [];
  const steps = 80; // Reduced for better performance
  const perspective = 300;
  const tiltX = 18;
  const tiltY = -30;

  for (let i = 0; i <= steps; i++) {
    const latitude = (i / steps) * 180 - 90;
    const latRad = (latitude * Math.PI) / 180;
    const lonRad = (longitude * Math.PI) / 180;

    // Spherical to Cartesian coordinates
    let x = radius * Math.cos(latRad) * Math.cos(lonRad);
    let y = radius * Math.sin(latRad);
    let z = radius * Math.cos(latRad) * Math.sin(lonRad);

    // Apply rotation around Y axis (this is what animates)
    const rotYRad = (rotationY * Math.PI) / 180;
    const xRot = x * Math.cos(rotYRad) - z * Math.sin(rotYRad);
    const zRot = x * Math.sin(rotYRad) + z * Math.cos(rotYRad);

    // Apply base tilt (18deg X, -30deg Y)
    const tiltXRad = (tiltX * Math.PI) / 180;
    const tiltYRad = (tiltY * Math.PI) / 180;

    // Rotate around X axis
    const y1 = y * Math.cos(tiltXRad) - zRot * Math.sin(tiltXRad);
    const z1 = y * Math.sin(tiltXRad) + zRot * Math.cos(tiltXRad);

    // Rotate around Y axis (tilt)
    const x2 = xRot * Math.cos(tiltYRad) + z1 * Math.sin(tiltYRad);
    const z2 = -xRot * Math.sin(tiltYRad) + z1 * Math.cos(tiltYRad);

    // Perspective projection
    const scale = perspective / (perspective - z2 * 0.5);
    const px = center + x2 * scale;
    const py = center + y1 * scale;

    // Only include points that are visible
    if (z2 > -radius * 0.3) {
      points.push(`${points.length === 0 ? "M" : "L"} ${px} ${py}`);
    }
  }

  return points.join(" ");
};

const latitudes = [-60, -30, 0, 30, 60];
const longitudes = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];
const swirlConfigs = [
  { amplitude: 32, turns: 1.15, offset: 0, opacity: 0.55 },
  { amplitude: 22, turns: 1.15, offset: 150, opacity: 0.35 },
];

const generateSwirlPath = (
  rotationY: number,
  {
    amplitude,
    turns,
    offset,
  }: {
    amplitude: number;
    turns: number;
    offset: number;
  },
  radius: number = 95,
  center: number = 100
): string => {
  const points: string[] = [];
  const steps = 120; // Reduced from 200 for better performance
  const perspective = 320;
  const tiltX = 18;
  const tiltY = -30;

  for (let i = 0; i <= steps; i++) {
    const progress = i / steps;
    const longitude = progress * 360 * turns + rotationY + offset;
    const latitude =
      Math.sin(progress * Math.PI * turns + (offset * Math.PI) / 180) *
      amplitude;

    const latRad = (latitude * Math.PI) / 180;
    const lonRad = (longitude * Math.PI) / 180;

    let x = radius * Math.cos(latRad) * Math.cos(lonRad);
    let y = radius * Math.sin(latRad);
    let z = radius * Math.cos(latRad) * Math.sin(lonRad);

    const rotYRad = (rotationY * Math.PI) / 180;
    const xRot = x * Math.cos(rotYRad) - z * Math.sin(rotYRad);
    const zRot = x * Math.sin(rotYRad) + z * Math.cos(rotYRad);

    const tiltXRad = (tiltX * Math.PI) / 180;
    const tiltYRad = (tiltY * Math.PI) / 180;

    const y1 = y * Math.cos(tiltXRad) - zRot * Math.sin(tiltXRad);
    const z1 = y * Math.sin(tiltXRad) + zRot * Math.cos(tiltXRad);

    const x2 = xRot * Math.cos(tiltYRad) + z1 * Math.sin(tiltYRad);
    const z2 = -xRot * Math.sin(tiltYRad) + z1 * Math.cos(tiltYRad);

    const scale = perspective / (perspective - z2 * 0.45);
    const px = center + x2 * scale;
    const py = center + y1 * scale;

    if (z2 > -radius * 0.4) {
      points.push(`${points.length === 0 ? "M" : "L"} ${px} ${py}`);
    }
  }

  return points.join(" ");
};

export default function RotatingGlobe() {
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);
  const rotationRef = useRef(0);
  const frameCountRef = useRef(0);

  // Use static rotation (0) for SSR, animated rotation after mount
  const currentRotation = mounted ? rotation : 0;

  const latitudePaths = useMemo(
    () =>
      latitudes.map((lat) => {
        const path = generateLatitudePath(lat, currentRotation);
        const isBackSide = lat < -15;
        return { path, isBackSide, key: `lat-${lat}` };
      }),
    [currentRotation]
  );

  const longitudePaths = useMemo(
    () =>
      longitudes.map((lon) => {
        const path = generateLongitudePath(lon, currentRotation);
        const adjustedLon = (lon + currentRotation) % 360;
        const isBackSide = adjustedLon > 90 && adjustedLon < 270;
        return { path, isBackSide, key: `lon-${lon}` };
      }),
    [currentRotation]
  );

  const swirlPaths = useMemo(
    () =>
      swirlConfigs.map((config, index) => ({
        d: generateSwirlPath(currentRotation, config),
        opacity: config.opacity,
        key: `swirl-${index}`,
      })),
    [currentRotation]
  );

  useEffect(() => {
    // Mark as mounted to start animation
    setMounted(true);

    let animationFrame: number;
    let lastTime = performance.now();
    const rotationSpeed = 0.25; // degrees per frame (slightly slower for smoother feel)
    const updateInterval = 1; // Update state every N frames (1 = every frame, 2 = every other frame)

    const animate = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastTime, 16.67); // Cap at 60fps
      lastTime = currentTime;

      // Update rotation ref every frame
      rotationRef.current =
        (rotationRef.current + (rotationSpeed * deltaTime) / 16.67) % 360;

      // Only update state periodically to reduce re-renders
      frameCountRef.current++;
      if (frameCountRef.current >= updateInterval) {
        frameCountRef.current = 0;
        setRotation(rotationRef.current);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
      <div
        className="absolute -inset-24 -z-10 rounded-full bg-[#6B46C1]/20 blur-[220px]"
        aria-hidden
      />
      <div
        className="absolute inset-x-16 -bottom-10 -z-10 h-16 rounded-full bg-[#a58bf5]/20 blur-3xl"
        aria-hidden
      />
      <div className="relative aspect-square w-full max-w-[480px]">
        <div className="absolute inset-0 overflow-hidden rounded-full shadow-[0_40px_160px_rgba(107,70,193,0.35)]">
          <div className="absolute inset-0 bg-linear-to-br from-[#fefefe] via-[#f5f0ff] to-[#c9b4ff]" />
          <div className="absolute inset-[12%] rounded-full bg-white/55 blur-[140px]" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_24%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0)_60%)] mix-blend-screen" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_82%_78%,rgba(57,22,117,0.45),rgba(0,0,0,0)_60%)] opacity-90 mix-blend-multiply" />
          <div className="absolute inset-[18%] rounded-full border border-white/35 opacity-70 blur-[1px]" />
          <div className="absolute inset-[8%] rounded-full border border-white/30 opacity-30" />
        </div>
        <div className="absolute inset-[7%] will-change-transform">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full text-[#5f33bd]"
            role="presentation"
            style={{ transform: "translateZ(0)" }}
          >
            {/* Latitude lines (horizontal circles) */}
            {latitudePaths.map(({ path, key }) => (
              <path
                key={key}
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
            ))}
            {/* Longitude lines (vertical meridians) */}
            {longitudePaths.map(({ path, key }) => (
              <path
                key={key}
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
            ))}
            {/* Swirl paths */}
            {swirlPaths.map(({ d, opacity, key }) => (
              <path
                key={key}
                d={d}
                fill="none"
                stroke="url(#swirl-gradient)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeOpacity={opacity}
              />
            ))}
            <defs>
              <linearGradient
                id="swirl-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#6B46C1" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-[10%] will-change-transform">
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full text-[#C084FC]"
            role="presentation"
            style={{ transform: "translateZ(0)" }}
          >
            {/* Secondary grid layer with slower rotation */}
            {[72, 54].map((r, idx) => {
              // Create circular paths that rotate
              const points: string[] = [];
              const steps = 120;
              for (let i = 0; i <= steps; i++) {
                const angle = (i / steps) * Math.PI * 2;
                const x = 100 + r * Math.cos(angle);
                const y = 100 + r * Math.sin(angle);
                points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
              }
              return (
                <path
                  key={`circle-${r}`}
                  d={points.join(" ")}
                  fill="none"
                  stroke="currentColor"
                  strokeOpacity="0.3"
                  strokeDasharray={idx === 0 ? "6 18" : "4 12"}
                  strokeWidth={idx === 0 ? "1.4" : "1.2"}
                  transform={`rotate(${currentRotation * 0.6} 100 100)`}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
