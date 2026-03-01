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
            setIsScrolled(window.scrollY > 20);
        };
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
                isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm shadow-black/10" : "bg-transparent md:bg-transparent bg-background border-t border-border md:border-transparent"
            )}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo & Theme Toggle */}
                    <div className="flex flex-shrink-0 items-center justify-between w-full md:w-auto px-4 md:px-0 pt-3 md:pt-0">
                        <a href="#home" className="text-xl font-bold tracking-tighter text-foreground group">
                            Kartik<span className="text-accent"> . </span>dev
                        </a>
                        <div className="ml-4 flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:flex md:w-auto justify-end md:gap-8 items-center h-full">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveSection(item.href.slice(1))}
                                    className={cn(
                                        "flex flex-col md:flex-row items-center justify-center p-2 text-[10px] md:text-sm font-medium transition-all hover:text-accent relative",
                                        isActive ? "text-accent" : "text-muted"
                                    )}
                                >
                                    <Icon className="h-5 w-5 mb-1 md:mb-0 md:mr-2 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                                    <span className="text-[10px] md:text-sm lg:text-base">{item.name}</span>
                                    {isActive && (
                                        <span className="absolute -top-3 md:-bottom-2 w-1 h-1 md:w-full md:h-0.5 bg-accent rounded-full transition-all" />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
