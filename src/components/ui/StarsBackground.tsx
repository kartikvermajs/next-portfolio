"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export function StarsBackground() {
    const { resolvedTheme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || resolvedTheme !== "dark") return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const stars: {
            x: number;
            y: number;
            size: number;
            opacity: number;
            speed: number;
        }[] = [];
        const numStars = 150;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5, // Reduced max opacity for neumorphic subtlety
                speed: (Math.random() * 0.01 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
            });
        }

        const shootingStars: {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            active: boolean;
            angle: number;
        }[] = [];

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Soft Neumorphic Star Color
            ctx.fillStyle = "#818cf8"; // Using accent color for a nice matching hue

            stars.forEach((star) => {
                star.opacity += star.speed;
                if (star.opacity > 0.6 || star.opacity < 0.1) {
                    star.speed *= -1;
                }

                ctx.globalAlpha = Math.max(0, Math.min(1, star.opacity));
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            if (Math.random() < 0.003) { // Slightly less frequent shooting stars
                shootingStars.push({
                    x: Math.random() * canvas.width,
                    y: 0,
                    length: Math.random() * 60 + 20, // slightly shorter
                    speed: Math.random() * 8 + 4,
                    opacity: 0.6, // lower peak opacity
                    active: true,
                    angle: Math.PI / 4,
                });
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const star = shootingStars[i];
                if (!star.active) {
                    shootingStars.splice(i, 1);
                    continue;
                }

                const headX = star.x;
                const headY = star.y;
                const tailX = star.x - Math.cos(star.angle) * star.length;
                const tailY = star.y - Math.sin(star.angle) * star.length;

                const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
                // Subtle cool tail using Accent Light rgb approximation
                gradient.addColorStop(0, `rgba(139, 132, 255, ${Math.max(0, star.opacity)})`);
                gradient.addColorStop(1, `rgba(139, 132, 255, 0)`);

                ctx.globalAlpha = 1;
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.2;

                ctx.beginPath();
                ctx.moveTo(headX, headY);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();

                star.x += Math.cos(star.angle) * star.speed;
                star.y += Math.sin(star.angle) * star.speed;
                star.opacity -= 0.012;

                if (
                    star.opacity <= 0 ||
                    star.x < -star.length ||
                    star.x > canvas.width + star.length ||
                    star.y > canvas.height + star.length
                ) {
                    star.active = false;
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mounted, resolvedTheme]);

    if (!mounted || resolvedTheme !== "dark") return null;

    return (
        <canvas
            ref={canvasRef}
            // Add slight opacity to the whole canvas to blend better with dark theme
            className="fixed inset-0 z-[-1] pointer-events-none opacity-60 mix-blend-screen"
            aria-hidden="true"
        />
    );
}
