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
                setIsScrolled(window.scrollY > 20);
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
                isScrolled ? "bg-background/80 backdrop-blur-lg shadow-extruded-small border-none" : "bg-transparent md:bg-transparent bg-background border-none"
            )}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex flex-shrink-0 items-center justify-between w-full md:w-auto px-2 md:px-0">
                        <a href="#home" className="text-xl font-extrabold tracking-tighter text-foreground group">
                            Kartik<span className="text-accent"> . </span>dev
                        </a>
                        <div className="ml-4 flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="hidden md:flex md:w-auto justify-end md:gap-4 items-center h-full">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveSection(item.href.slice(1))}
                                    className={cn(
                                        "flex items-center justify-center px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-2xl select-none",
                                        isActive
                                            ? "text-accent bg-card shadow-inset-small"
                                            : "text-muted hover:bg-card hover:text-foreground hover:shadow-extruded-small hover:-translate-y-[0.5px] active:translate-y-0 active:shadow-inset-small"
                                    )}
                                >
                                    <Icon className="h-4 w-4 mr-2" />
                                    <span>{item.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
