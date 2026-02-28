import ProjectList from "./ProjectList";

export default async function Projects() {
    let repos: any = [];
    try {
        const res = await fetch("https://api.github.com/users/kartikvermajs/repos", {
            next: { revalidate: 3600 },
        });
        if (res.ok) {
            repos = await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch repos", error);
    }

    // Fallback data if rate-limited or empty
    if (!repos || !Array.isArray(repos) || repos.length === 0) {
        repos = [
            {
                id: 1,
                name: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with Next.js, Stripe, and Tailwind CSS. Features comprehensive dashboard and real-time inventory.",
                language: "TypeScript",
                html_url: "https://github.com/kartikvermajs",
                homepage: "#"
            },
            {
                id: 2,
                name: "Task Management App",
                description: "Kanban style task management tool built with React, Node.js, and MongoDB. Includes real-time collaboration.",
                language: "JavaScript",
                html_url: "https://github.com/kartikvermajs",
                homepage: "#"
            },
            {
                id: 3,
                name: "Developer Portfolio",
                description: "Personal brand website built with Next.js App Router, GSAP for animations, and modern Tailwind CSS design system.",
                language: "TypeScript",
                html_url: "https://github.com/kartikvermajs",
                homepage: "#"
            }
        ];
    }

    // Sort by stars and get top 3 or 4
    const topRepos = repos
        .sort((a: any, b: any) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
        .slice(0, 4);

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-lg text-muted">
                        A selection of my recent open-source work and personal projects fetched directly from GitHub.
                    </p>
                </div>

                <ProjectList repos={topRepos} />
            </div>
        </section>
    );
}
