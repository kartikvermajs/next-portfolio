"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-category", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
            });

            gsap.from(".skill-badge", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.4,
                stagger: 0.05,
                ease: "back.out(1.5)",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "Redux", "Zustand"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Prisma", "Redis", "GraphQL"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "Docker", "AWS", "Vercel", "Linux", "CI/CD", "Jest", "Cypress"]
        }
    ];

    return (
        <section id="skills" ref={sectionRef} className="py-24 md:py-32 bg-card/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Technical Arsenal</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-lg md:text-xl text-muted">
                        Technologies and tools I use to build robust and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-category bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="skill-badge px-3 py-1.5 md:px-4 md:py-2 bg-background border border-border text-sm md:text-base font-medium text-muted-foreground rounded-lg hover:border-accent hover:text-accent transition-colors select-none"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
