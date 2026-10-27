import Link from "next/link";
import { products } from "@/lib/products";

export function Products() {
  return (
    <section id="trabalho" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              001 — Trabalho
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
              No ar, com nome e domínio.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
            Cada produto abaixo está publicado. Não é deck: é o que opera hoje.
          </p>
        </div>
      </div>

      <ol className="border-t border-line">
        {products.map((product, index) => (
          <li key={product.id} className="border-b border-line">
            <Link
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ ["--work-accent" as string]: product.accent }}
            >
              <article className="relative mx-auto grid max-w-6xl gap-6 px-6 py-10 transition-colors md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10 md:py-12">
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-0 bg-[var(--work-accent)] transition-[width] duration-300 group-hover:w-1.5"
                />
                <span className="font-mono text-xs text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                      {product.name}
                    </h3>
                    <p className="text-sm text-accent">{product.tagline}</p>
                  </div>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {product.stack}
                    <span className="mx-2 text-line">/</span>
                    {product.tags.join(" · ")}
                  </p>
                </div>
                <span className="inline-flex items-center self-start text-sm font-medium text-ink transition group-hover:text-accent">
                  Abrir
                  <span className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
