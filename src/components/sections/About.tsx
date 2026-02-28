"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Terminal, MonitorSmartphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const philosophies = [
        {
            icon: Terminal,
            title: "Clean Code",
            description: "Writing maintainable, modular, and type-safe code using modern TypeScript and best practices."
        },
        {
            icon: Layers,
            title: "Full Stack Mastery",
            description: "Seamlessly bridging the gap between scalable backend architectures and intuitive frontend interfaces."
        },
        {
            icon: MonitorSmartphone,
            title: "Pixel Perfect",
            description: "Crafting fully responsive, mobile-first designs with a focus on accessibility and performance."
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16 about-item">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-lg text-muted leading-relaxed">
                        I am a passionate <span className="text-foreground font-medium">Full Stack Developer</span> focused on building robust and scalable web applications.
                        I thrive in solving complex problems and turning abstract ideas into production-ready software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {philosophies.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="about-item p-6 bg-card border border-border rounded-2xl hover:border-accent/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
