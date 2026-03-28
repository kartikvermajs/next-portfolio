"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(true);

    const lastScrollY = useRef(0);

    const navItems = [
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Projects", href: "#projects", icon: Briefcase },
        { name: "Skills", href: "#skills", icon: Code },
        { name: "Contact", href: "#contact", icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;

                setIsScrolled(scrollY > 20);

                // 🔥 Scroll direction logic
                if (scrollY > lastScrollY.current) {
                    // scrolling down → show
                    setShowMobileNav(true);
                } else {
                    // scrolling up → hide
                    setShowMobileNav(false);
                }

                lastScrollY.current = scrollY;

                // Scroll spy
                const sections = navItems.map((item) => item.href.slice(1));

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

    return (
        <header
            className={cn(
                "fixed z-50 w-full transition-all duration-300",

                // Desktop
                "md:top-0 md:bottom-auto",

                // Mobile
                "bottom-0 md:translate-y-0",
                showMobileNav ? "translate-y-0" : "translate-y-full",

                isScrolled
                    ? "bg-background/80 backdrop-blur-lg"
                    : "bg-transparent md:bg-transparent"
            )}
        >
            <nav className="max-w-7xl mx-auto px-4">

                {/* DESKTOP */}
                <div className="hidden md:flex h-16 items-center w-full">
                    <div className="flex items-center gap-4">
                        <a
                            href="#home"
                            className="text-lg lg:text-xl font-extrabold tracking-tight"
                        >
                            Kartik<span className="text-accent"> . </span>dev
                        </a>

                        <ThemeToggle />
                    </div>

                    <div className="ml-auto flex gap-4">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive =
                                activeSection === item.href.slice(1);

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() =>
                                        setActiveSection(item.href.slice(1))
                                    }
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-xl transition-all",
                                        isActive
                                            ? "text-accent bg-card shadow-inset-small"
                                            : "text-muted hover:bg-card"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* MOBILE */}
                {/* MOBILE */}
                <div className="md:hidden px-3 pb-3">
                    <div className="flex h-16 items-center justify-between px-3 rounded-2xl 
    bg-card/70 backdrop-blur-xl 
    shadow-[0_8px_30px_rgba(0,0,0,0.15)] 
    border border-border/30">

                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive =
                                activeSection === item.href.slice(1);

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() =>
                                        setActiveSection(item.href.slice(1))
                                    }
                                    className={cn(
                                        "flex flex-col items-center justify-center text-[10px] px-2 py-1 rounded-xl transition-all",
                                        isActive
                                            ? "text-accent shadow-extruded-small"
                                            : "text-muted"
                                    )}
                                >
                                    <Icon className="h-5 w-5 mb-0.5" />
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}