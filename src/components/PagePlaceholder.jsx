// Ideiglenes oldalváz: cím és egy rövid leírás. Cseréld le a valódi oldalra, amikor elkészül.
export default function PagePlaceholder({ title, children }) {
  return (
    <section>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 max-w-2xl text-slate-300">{children}</p>
    </section>
  );
}
