"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, GraduationCap, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".timeline-item",
        {
          x: -40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Full Stack Project Development",
      icon: <Rocket className="w-5 h-5 text-accent" />,
      duration: "2024 – Present",
      description:
        "Designed and developed multiple production-grade full-stack applications focusing on scalable architecture, authentication systems, and performance optimization.",
      highlights: [
        "Built real-time systems with WebSockets",
        "Designed modular REST APIs with validation",
        "Optimized backend queries improving performance up to 30%",
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "Prisma", "WebSockets"],
    },
    {
      id: 2,
      title: "Applied System Design & Engineering",
      icon: <Code2 className="w-5 h-5 text-accent" />,
      duration: "2024 – 2025",
      description:
        "Focused on backend architecture, API design, and authentication strategies across multiple projects including social platforms and B2B systems.",
      highlights: [
        "Implemented JWT and OAuth authentication flows",
        "Engineered reusable backend modules",
        "Reduced API redundancy and improved efficiency",
      ],
      tech: ["Express.js", "JWT", "Redis", "REST APIs"],
    },
    {
      id: 3,
      title: "Academic Engineering Experience",
      icon: <GraduationCap className="w-5 h-5 text-accent" />,
      duration: "2023",
      description:
        "Worked on multiple academic full-stack projects in collaborative environments following Agile methodologies.",
      highlights: [
        "Collaborated in team-based backend projects",
        "Resolved 20+ bugs improving stability",
        "Presented features across multiple sprint cycles",
      ],
      tech: ["JavaScript", "React", "Node.js"],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">
            Experience & Learning Journey
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto">
            A progression of building, experimenting, and engineering real-world
            systems during my academic journey.
          </p>
        </div>

        <div className="relative ml-2 md:ml-6">
          <div className="absolute left-[11px] top-6 bottom-4 w-[2px] bg-border/40" />
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item mb-12 pl-12 relative flex flex-col items-start">
              <div className="absolute left-0 top-[40px] w-6 h-6 bg-card border-none rounded-full flex items-center justify-center shadow-extruded-small ring-2 ring-accent ring-offset-2 ring-offset-background z-10">
                <div className="w-2 h-2 bg-accent rounded-full" />
              </div>

              <div className="bg-card w-full border-none shadow-extruded rounded-[32px] p-6 md:p-8 hover:-translate-y-1 hover:shadow-extruded-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center gap-2">
                    {exp.icon}
                    <h3 className="text-lg md:text-xl font-bold">
                      {exp.title}
                    </h3>
                  </div>

                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-semibold">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-muted mb-4 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-sm md:text-base text-muted-foreground flex gap-2"
                    >
                      <span className="text-accent">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs md:text-sm px-3 py-1.5 bg-card shadow-extruded-small border-none rounded-lg text-muted-foreground"
                    >
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
