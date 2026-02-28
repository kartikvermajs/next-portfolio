"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".timeline-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                x: -40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const experiences = [
        {
            id: 1,
            role: "Senior Full Stack Developer",
            company: "Tech Innovators Inc.",
            duration: "Jan 2022 - Present",
            description: "Leading the development of a scalable microservices architecture. Improved application performance by 40% using Next.js and Redis caching. Mentored junior developers and established CI/CD best practices.",
            tech: ["Next.js", "Node.js", "Redis", "AWS", "TypeScript"]
        },
        {
            id: 2,
            role: "Frontend Engineer",
            company: "Digital Solutions LLC",
            duration: "Mar 2020 - Dec 2021",
            description: "Spearheaded the migration from a legacy monolithic frontend to a modern React-based SPA. Implemented a comprehensive design system with Tailwind CSS that reduced UI development time by 30%.",
            tech: ["React", "JavaScript", "Tailwind CSS", "Redux"]
        },
        {
            id: 3,
            role: "Web Developer",
            company: "Creative Agency",
            duration: "Jun 2018 - Feb 2020",
            description: "Developed and maintained multiple client websites focusing on high conversion rates and SEO optimization. Integrated various third-party APIs for payment processing and analytics.",
            tech: ["WordPress", "PHP", "JavaScript", "Vue.js"]
        }
    ];

    return (
        <section id="experience" ref={sectionRef} className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Work Experience</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-lg md:text-xl text-muted">
                        My professional journey so far.
                    </p>
                </div>

                <div className="relative border-l-2 border-border ml-3 md:ml-6">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item mb-12 ml-8 relative">
                            {/* Timeline dot */}
                            <div className="absolute -left-[41px] top-1 w-6 h-6 bg-background border-2 border-accent rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(129,140,248,0.3)]">
                                <div className="w-2 h-2 bg-accent rounded-full" />
                            </div>

                            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-colors shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                                            {exp.role}
                                        </h3>
                                        <p className="text-muted text-sm md:text-base mt-1">{exp.company}</p>
                                    </div>
                                    <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                                        {exp.duration}
                                    </span>
                                </div>

                                <p className="text-muted leading-relaxed mb-6 md:text-lg">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {exp.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs md:text-sm font-medium px-2.5 py-1 md:px-3 md:py-1.5 bg-background text-muted-foreground rounded border border-border">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
