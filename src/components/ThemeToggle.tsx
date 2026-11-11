import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function readTheme(): Theme {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        if (value === "light" || value === "dark" || value === "system") return value;
    } catch {
    }
    return "system";
}

function applyTheme(theme: Theme) {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = theme === "dark" || (theme === "system" && systemDark);
    document.documentElement.classList.toggle("dark", dark);
}

const options: { value: Theme; label: string; icon: ReactNode }[] = [
    { value: "light", label: "Light theme", icon: <SunIcon /> },
    { value: "dark", label: "Dark theme", icon: <MoonIcon /> },
    { value: "system", label: "System", icon: <MonitorIcon /> },
];

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(readTheme);

    useEffect(() => {
        applyTheme(theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
        }

        if (theme !== "system") return;

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => applyTheme("system");
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, [theme]);

    return (
        <div
            role="group"
            aria-label="Téma kiválasztása"
            className="inline-flex rounded-lg border border-line bg-field p-0.5"
        >
            {options.map((o) => (
                <button
                    key={o.value}
                    type="button"
                    onClick={() => setTheme(o.value)}
                    aria-label={o.label}
                    aria-pressed={theme === o.value}
                    title={o.label}
                    className={`rounded-md p-1.5 transition ${
                        theme === o.value
                            ? "bg-brand-panel text-brand-accent shadow-sm"
                            : "text-muted hover:text-fg"
                    }`}
                >
                    {o.icon}
                </button>
            ))}
        </div>
    );
}

function Icon({ children }: { children: ReactNode }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

function SunIcon() {
    return (
        <Icon>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </Icon>
    );
}

function MoonIcon() {
    return (
        <Icon>
            <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
        </Icon>
    );
}

function MonitorIcon() {
    return (
        <Icon>
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M8 20h8M12 16v4" />
        </Icon>
    );
}