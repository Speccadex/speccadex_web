import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Állítsd össze a gépedet, <span className="text-brand-accent">okosan</span>.
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        PC-konfigurátor és közösségi platform: válogass alkatrészeket, nézd meg a
        kompatibilitást és a szűk keresztmetszeteket, majd oszd meg a buildedet a
        fórumon.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/builder"
          className="rounded-md bg-brand-accent px-5 py-3 font-semibold text-brand-bg hover:opacity-90"
        >
          Konfigurátor megnyitása
        </Link>
        <Link
          to="/parts"
          className="rounded-md border border-white/20 px-5 py-3 font-semibold hover:bg-brand-panel"
        >
          Alkatrészek böngészése
        </Link>
      </div>
    </section>
  );
}
