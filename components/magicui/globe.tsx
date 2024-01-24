"use client";

import { cn } from "../../lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import React from "react";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

const GLOBE_CONFIG: COBEOptions = {
    width: 600,
    height: 600,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [1, 0, 0],
    glowColor: [1, 1, 1],
    markers: [
        { location: [25.276987, 51.520008], size: 0.15 }, // Doha, Qatar
        { location: [33.893791, 35.501777], size: 0.15 }, // Beirut, Lebanon (assuming Beirut for Lebanon)
        { location: [35.185566, 33.382276], size: 0.15 }, // Nicosia, Cyprus
        { location: [40.7128, -74.0060], size: 0.15 }, // New York, USA
        { location: [34.0522, -118.2437], size: 0.15 }, // Los Angeles, USA
        { location: [25.276987, 55.296249], size: 0.15 }, // Dubai, UAE
        { location: [43.7102, 7.2620], size: 0.15 }, // Nice, France
        { location: [43.5528, 7.0174], size: 0.15 }, // Cannes, France
        { location: [43.2677, 6.6407], size: 0.15 }, // Saint-Tropez, France
        { location: [38.9068, 1.4206], size: 0.15 }, // Ibiza, Spain
    ],
};

export default function Globe({
    className,
    config = GLOBE_CONFIG,
}: {
    className?: string;
    config?: COBEOptions;
}) {
    let phi = 0;
    let width = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    const updatePointerInteraction = (value: any) => {
        pointerInteracting.current = value;
        canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
    };

    const updateMovement = (clientX: any) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
        }
    };

    const onRender = useCallback(
        (state: Record<string, any>) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + r.get();
            state.width = width * 2;
            state.height = width * 2;
        },
        [pointerInteracting, phi, r]
    );

    const onResize = () => {
        if (canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        setTimeout(() => (canvasRef.current!.style.opacity = "1"));
        return () => globe.destroy();
    });

    return (
        <div
            className={cn(
                "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[400px]",
                className
            )}
        >
            <canvas
                className={cn(
                    "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
}