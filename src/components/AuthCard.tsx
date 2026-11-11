import type { ReactNode } from "react";

type AuthCardProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    footer?: ReactNode;
};

export default function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
    return (
        <div className="relative flex justify-center py-8">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl dark:bg-brand-accent/20"
            />

            <div className="relative w-full max-w-md rounded-2xl border border-line bg-brand-panel p-8 shadow-xl shadow-slate-900/10 dark:bg-brand-panel/80 dark:shadow-2xl dark:shadow-black/40 dark:backdrop-blur">
                <h1 className="text-2xl font-bold">{title}</h1>
                {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}

                <div className="mt-8">{children}</div>

                {footer && (
                    <p className="mt-6 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                        {footer}
                    </p>
                )}
            </div>
        </div>
    );
}