"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10 md:w-11 md:h-11" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative inline-flex items-center justify-center rounded-2xl w-10 h-10 md:w-11 md:h-11 text-muted hover:text-accent transition-all duration-300 shadow-extruded-small hover:shadow-extruded hover:-translate-y-px active:translate-y-px active:shadow-inset-small"
            aria-label="Toggle theme"
        >
            {/* Sun */}
            <Sun
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "rotate-90 scale-0"
                    }`}
            />

            {/* Moon */}
            <Moon
                className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100"
                    }`}
            />

            <span className="sr-only">Toggle theme</span>
        </button>
    );
}