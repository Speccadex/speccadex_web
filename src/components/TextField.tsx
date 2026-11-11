import { useId, useState } from "react";
import type { ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & {
    label: string;
    error?: string;
};

export default function TextField({ label, error, type, className, ...rest }: TextFieldProps) {
    const id = useId();
    const errorId = `${id}-error`;
    const [visible, setVisible] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && visible ? "text" : type;

    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg">
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    className={`w-full rounded-lg border bg-field px-3 py-2.5 text-fg placeholder:text-muted/70 outline-none transition focus:ring-2 ${
                        error
                            ? "border-red-500/60 focus:ring-red-500/30"
                            : "border-line focus:border-brand-accent focus:ring-brand-accent/30"
                    } ${isPassword ? "pr-11" : ""} ${className ?? ""}`}
                    {...rest}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        aria-label={visible ? "Jelszó elrejtése" : "Jelszó megjelenítése"}
                        aria-pressed={visible}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-muted transition hover:text-fg"
                    >
                        <EyeIcon off={visible} />
                    </button>
                )}
            </div>

            {error && (
                <p id={errorId} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}

function EyeIcon({ off }: { off: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" />
            <circle cx="12" cy="12" r="3" />
            {off && <path d="M3 3l18 18" />}
        </svg>
    );
}