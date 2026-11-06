import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/parts", label: "Alkatrészek" },
  { to: "/builder", label: "Konfigurátor" },
  { to: "/forum", label: "Fórum" },
  { to: "/login", label: "Bejelentkezés" },
  { to: "/register", label: "Regisztráció" },
];

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-brand-panel text-brand-accent"
      : "text-slate-300 hover:text-white"
  }`;

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-slate-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Specca<span className="text-brand-accent">dex</span>
          </NavLink>
          <nav className="flex flex-wrap items-center gap-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        Speccadex, oktatási projekt
      </footer>
    </div>
  );
}
