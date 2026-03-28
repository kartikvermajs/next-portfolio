"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

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
      className="relative min-h-dvh flex flex-col justify-center items-center py-20 overflow-hidden"
    >

      <div className="absolute top-3 right-3 z-50 md:hidden">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div
            ref={textRef}
            className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="hero-element inline-block mx-auto lg:mx-0 bg-card shadow-inset-small px-4 py-2 rounded-full w-fit">
              <span className="text-sm font-medium text-accent">
                Available for new opportunities
              </span>
            </div>

            <h1 className="hero-element text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Hi, I'm <span className="text-accent">Kartik Verma</span>.
              <br />
              Full Stack Developer
            </h1>

            <p className="hero-element text-lg sm:text-xl text-muted max-w-2xl mx-auto lg:mx-0">
              I build high-performance, scalable web applications with a focus
              on seamless user experiences and modern engineering practices.
            </p>

            <div className="hero-element flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-xl group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-xl">
                <a href="#contact">Contact Me</a>
              </Button>

              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-xl">
                <a
                  href="https://gvdo4wevo6.ufs.sh/f/fpiND8XZTh5fvcNqnJDD5StcrGxunI0Ka1sQZy8A4dWwkfjF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl border-[var(--accent)]/30 bg-[var(--accent)]/5 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all group"
              >
                <a
                  href="https://www.linkedin.com/in/kartik-verma-4b99012b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  Follow me on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-68 h-68 sm:w-80 sm:h-80 lg:w-125 lg:h-125">
              <div className="rounded-full w-full h-full bg-card shadow-extruded flex items-center justify-center p-1 sm:p-2">
                <div className="rounded-full w-full h-full shadow-inset-deep overflow-hidden relative">
                  <img
                    src="/final.png"
                    alt="Kartik Verma"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}