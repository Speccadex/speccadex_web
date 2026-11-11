import type { ReactNode } from "react";

type PagePlaceholderProps = {
  title: string;
  children: ReactNode;
};

export default function PagePlaceholder({
  title,
  children,
}: PagePlaceholderProps) {
  return (
    <section>
      <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{children}</p>
    </section>
  );
}
