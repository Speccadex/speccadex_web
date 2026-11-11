import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import TextField from "../components/TextField";
import { apiFetch } from "../api/client";

type Errors = {
    username?: string;
    email?: string;
    password?: string;
    confirm?: string;
};

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    function validate() {
        const next: Errors = {};
        if (username.trim().length < 3) next.username = "Legalább 3 karakter legyen.";
        if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Adj meg érvényes e-mail címet.";
        if (password.length < 8) next.password = "A jelszó legalább 8 karakter legyen.";
        if (confirm !== password) next.confirm = "A két jelszó nem egyezik.";
        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setServerError("");
        if (!validate()) return;

        setLoading(true);
        try {
            await apiFetch("/auth/register", {
                method: "POST",
                body: JSON.stringify({ username, email, password }),
            });
            navigate("/login");
        } catch {
            setServerError("A regisztráció nem sikerült. Lehet, hogy az e-mail vagy a felhasználónév foglalt.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthCard
            title="Regisztráció"
            subtitle="Hozz létre fiókot, és kezdd el összeállítani a gépedet."
            footer={
                <>
                    Van már fiókod?{" "}
                    <Link to="/login" className="text-brand-accent hover:underline">
                        Jelentkezz be
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <TextField
                    label="Felhasználónév"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={errors.username}
                />
                <TextField
                    label="E-mail"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                />
                <TextField
                    label="Jelszó"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                />
                <TextField
                    label="Jelszó újra"
                    type="password"
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    error={errors.confirm}
                />

                {serverError && (
                    <p role="alert" className="text-sm text-red-400">
                        {serverError}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-brand-accent px-4 py-2.5 font-semibold text-brand-bg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Fiók létrehozása..." : "Regisztráció"}
                </button>
            </form>
        </AuthCard>
    );
}