import ProjectList from "./ProjectList";
import { projectsData } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Featured Projects</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-lg md:text-xl text-muted">
                        A selection of my recent open-source work and personal projects.
                    </p>
                </div>

                <ProjectList repos={projectsData} />
            </div>
        </section>
    );
}
