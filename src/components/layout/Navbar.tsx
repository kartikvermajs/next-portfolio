"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                // Navbar blur
                setIsScrolled(scrollY > 20);

                // Scroll spy logic
                const sections = navItems.map(item => item.href.slice(1));

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sections[i]);
                    if (!section) continue;

                    const rect = section.getBoundingClientRect();

                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            });
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Projects", href: "#projects", icon: Briefcase },
        { name: "Skills", href: "#skills", icon: Code },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    return (
        <header
            className={cn(
                "fixed bottom-0 z-50 w-full md:bottom-auto md:top-0 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-lg shadow-extruded-small"
                    : "bg-background/95 md:bg-transparent"
            )}
        >
            <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

                {/* DESKTOP + TABLET */}
                <div className="hidden md:flex h-16 items-center w-full">

                    {/* LEFT */}
                    <div className="flex items-center gap-4 shrink-0">
                        <a
                            href="#home"
                            className="text-lg lg:text-xl font-extrabold tracking-tight text-foreground whitespace-nowrap"
                        >
                            Kartik<span className="text-accent"> . </span>dev
                        </a>

                        <ThemeToggle />
                    </div>

                    {/* RIGHT */}
                    <div className="ml-auto flex items-center gap-5 lg:gap-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.slice(1);

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveSection(item.href.slice(1))}
                                    className={cn(
                                        "flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap",
                                        isActive
                                            ? "text-accent bg-card shadow-inset-small"
                                            : "text-muted hover:bg-card hover:text-foreground hover:shadow-extruded-small"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="hidden sm:inline">{item.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* MOBILE (BOTTOM NAV) */}
                <div className="flex md:hidden h-16 items-center justify-between px-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.slice(1);

                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveSection(item.href.slice(1))}
                                className={cn(
                                    "flex flex-col items-center justify-center text-[10px] font-medium px-2 py-1 rounded-xl transition-all",
                                    isActive
                                        ? "text-accent"
                                        : "text-muted hover:text-foreground"
                                )}
                            >
                                <Icon className="h-5 w-5 mb-0.5" />
                                {item.name}
                            </a>
                        );
                    })}

                    {/* Theme toggle in mobile */}
                    <div className="absolute right-2 top-2">
                        <ThemeToggle />
                    </div>
                </div>

            </nav>
        </header>
    );
}
