import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background pb-20 md:pb-0">
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-lg text-muted text-center md:text-left">
                        © {new Date().getFullYear()} Kartik Verma. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://github.com/kartikvermajs" target="_blank" rel="noopener noreferrer" className="p-3 bg-card shadow-extruded-small text-muted rounded-2xl hover:text-accent hover:-translate-y-1 hover:shadow-extruded active:translate-y-px active:shadow-inset-small transition-all duration-300">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/kartik-verma-4b99012b8" target="_blank" rel="noopener noreferrer" className="p-3 bg-card shadow-extruded-small text-muted rounded-2xl hover:text-accent hover:-translate-y-1 hover:shadow-extruded active:translate-y-px active:shadow-inset-small transition-all duration-300">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                        <a href="mailto:kartikverma88273@outlook.com" className="p-3 bg-card shadow-extruded-small text-muted rounded-2xl hover:text-accent hover:-translate-y-1 hover:shadow-extruded active:translate-y-px active:shadow-inset-small transition-all duration-300">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5 md:h-6 md:w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
