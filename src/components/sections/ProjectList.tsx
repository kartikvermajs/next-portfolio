"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectList({ repos }: { repos: any[] }) {
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
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

    return (
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {repos.map((repo) => (
                <div
                    key={repo.id}
                    className="project-card group relative bg-card border border-border p-6 md:p-8 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-accent/5"
                >
                    {/* Subtle gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                                <FolderGit2 className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="flex gap-3 text-muted">
                                {repo.html_url && (
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Repository">
                                        <Github className="w-5 h-5 md:w-6 md:h-6" />
                                    </a>
                                )}
                                {repo.homepage && repo.homepage !== "" && repo.homepage !== "#" && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Live Demo">
                                        <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-accent transition-colors">
                            {repo.name.replace(/-/g, " ")}
                        </h3>

                        <p className="text-muted text-sm md:text-base leading-relaxed mb-6 flex-grow">
                            {repo.description || "No description provided for this repository."}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {repo.language && (
                                <span className="text-xs font-medium px-2.5 py-1 bg-border/50 text-muted-foreground rounded-md">
                                    {repo.language}
                                </span>
                            )}
                            {repo.stargazers_count > 0 && (
                                <span className="text-xs font-medium px-2.5 py-1 bg-border/50 text-muted-foreground rounded-md flex items-center gap-1">
                                    ⭐ {repo.stargazers_count}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
