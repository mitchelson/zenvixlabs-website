import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { products } from "@/lib/products";

export function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-bright">
              Portfólio
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Nossos produtos
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Soluções que desenvolvemos e operamos — cada uma com stack e
              domínio próprios, unidas pela mesma visão de qualidade.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="group flex flex-col rounded-2xl border border-card-border bg-card p-6 transition hover:border-accent/50 hover:shadow-xl hover:shadow-accent-glow/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-accent-bright">
                    {product.path}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent-bright">
                    {product.tagline}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-glow/30 to-gradient-end/30 text-accent-bright transition group-hover:from-accent group-hover:to-gradient-end group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" aria-hidden />
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {product.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-card-border bg-background/60 px-2.5 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-bright transition hover:text-foreground"
              >
                Visitar site
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
