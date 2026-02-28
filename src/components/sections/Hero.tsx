"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in and move up the texts
            gsap.from(".hero-element", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2,
            });

            // Fade in image
            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.4,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-[100dvh] flex flex-col justify-center items-center py-20 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div ref={textRef} className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="hero-element inline-block mx-auto lg:mx-0 bg-card border border-border px-3 py-1 rounded-full w-fit">
                            <span className="text-sm font-medium text-accent">Available for new opportunities</span>
                        </div>

                        <h1 className="hero-element text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                            Hi, I'm <span className="text-accent">Kartik Verma</span>.
                            <br />
                            Full Stack Developer
                        </h1>

                        <p className="hero-element text-lg sm:text-xl text-muted max-w-2xl mx-auto lg:mx-0">
                            I build high-performance, scalable web applications with a focus on seamless user experiences and modern engineering practices.
                        </p>

                        <div className="hero-element flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <Button asChild size="lg" className="w-full sm:w-auto rounded-xl group rounded-xl">
                                <a href="#projects">
                                    View Projects
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-xl">
                                <a href="#contact">Contact Me</a>
                            </Button>

                            <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto rounded-xl">
                                <a href="/resume.pdf" target="_blank">
                                    <Download className="w-4 h-4 mr-2" />
                                    Resume
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div ref={imageRef} className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
                            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                            <div className="w-full h-full bg-card border border-border rounded-full overflow-hidden relative shadow-2xl flex items-center justify-center">
                                {/* Placeholder Image - User to replace later */}
                                <div className="text-muted text-lg font-medium flex flex-col items-center">
                                    <FileText className="w-12 h-12 mb-2 opacity-50" />
                                    <span>User Image</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
