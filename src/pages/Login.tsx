import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import TextField from "../components/TextField";
import { apiFetch, setToken } from "../api/client";

type LoginResponse = { accessToken: string }; // egyeztesd az API-s csapattarssal a mezo nevet

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    function validate() {
        const next: { email?: string; password?: string } = {};
        if (!email.trim()) next.email = "Add meg az e-mail címed.";
        else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Ez nem tűnik érvényes e-mail címnek.";
        if (!password) next.password = "Add meg a jelszavad.";
        setErrors(next);
        return Object.keys(next).length === 0;
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setServerError("");
        if (!validate()) return;

        setLoading(true);
        try {
            const data = await apiFetch<LoginResponse>("/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            setToken(data.accessToken);
            navigate("/");
        } catch {
            setServerError("Sikertelen bejelentkezés. Ellenőrizd az adataidat.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthCard
            title="Bejelentkezés"
            subtitle="Lépj be, hogy mentsd a buildjeidet és részt vehess a fórumon."
            footer={
                <>
                    Nincs még fiókod?{" "}
                    <Link to="/register" className="text-brand-accent hover:underline">
                        Regisztrálj
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <TextField
                    label="E-mail"
                    type="email"
                    autoComplete="email"
                    placeholder="te@példa.hu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                />
                <TextField
                    label="Jelszó"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
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
                    {loading ? "Belépés..." : "Belépés"}
                </button>
            </form>
        </AuthCard>
    );
}