"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, FolderGit2, Info, X } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectList({ repos }: { repos: Project[] }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card-wrapper", {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, listRef);

    return () => ctx.revert();
  }, [repos]);

  const handleCardClick = (id: string, e: React.MouseEvent) => {
    // Prevent flipping when clicking buttons or links
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <>
      <div
        ref={listRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {repos.map((project) => (
          <div
            key={project.id}
            className="project-card-wrapper [perspective:1000px] h-[450px] cursor-pointer"
            onClick={(e) => handleCardClick(project.id, e)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                flippedId === project.id ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Face */}
              <div
                className={`absolute inset-0 w-full h-full bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col group
  [backface-visibility:hidden]
  ${flippedId === project.id ? "pointer-events-none" : "pointer-events-auto"}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 pt-4 flex flex-col flex-grow z-10">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="relative overflow-hidden mt-auto">
                    {/* Fade Edges */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-card to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-card to-transparent z-10" />

                    {/* Infinite Track */}
                    <div className="flex gap-2 w-max animate-marquee">
                      {[...project.techStack, ...project.techStack].map(
                        (tech, i) => (
                          <span
                            key={i}
                            className="whitespace-nowrap text-xs font-medium px-2.5 py-1 bg-border/50 text-muted-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-accent/80 opacity-0 group-hover:opacity-100 transition-opacity text-center flex items-center justify-center gap-2">
                    Click to flip
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div
                className={`absolute inset-0 w-full h-full bg-card border border-accent/40 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-center items-center p-8
  [transform:rotateY(180deg)] [backface-visibility:hidden]
  ${flippedId === project.id ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">
                  {project.name}
                </h3>

                <div className="flex flex-col gap-4 w-full max-w-[200px]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-secondary text-foreground rounded-lg hover:text-accent hover:border-accent hover:bg-secondary/80 transition-colors font-medium border border-border"
                  >
                    <Github className="w-5 h-5" />
                    Visit GitHub
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit Live App
                  </a>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      // Reset flip if desired, or keep it flipped
                    }}
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-transparent border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-medium mt-2"
                  >
                    <Info className="w-5 h-5" />
                    About Project
                  </button>
                </div>

                <button
                  onClick={(e) => handleCardClick(project.id, e)}
                  className="absolute bottom-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Flip back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          {/* Dimmed Background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-3xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 sm:h-64 w-full bg-muted">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background/80 text-foreground rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {selectedProject.name}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
                {selectedProject.fullDescription
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="whitespace-pre-line text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-border">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium text-sm border border-border"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live App
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
