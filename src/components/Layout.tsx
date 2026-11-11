import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.tsx";

const links = [
    { to: "/parts", label: "Alkatrészek" },
    { to: "/builder", label: "Konfigurátor" },
    { to: "/forum", label: "Fórum" },
    { to: "/login", label: "Bejelentkezés" },
    { to: "/register", label: "Regisztráció" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        isActive
            ? "bg-brand-panel text-brand-accent shadow-sm ring-1 ring-line"
            : "text-muted hover:text-fg"
    }`;

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-brand-bg text-fg">
            <header className="border-b border-line">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
                    <NavLink to="/" className="text-2xl font-bold tracking-tight">
                        Specca<span className="text-brand-accent">dex</span>
                    </NavLink>

                    <div className="flex flex-wrap items-center gap-3">
                        <nav className="flex flex-wrap items-center gap-1">
                            {links.map((link) => (
                                <NavLink key={link.to} to={link.to} className={linkClass}>
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
                <Outlet />
            </main>

            <footer className="border-t border-line py-4 text-center text-sm text-muted">
                Speccadex, oktatási projekt
            </footer>
        </div>
    );
}