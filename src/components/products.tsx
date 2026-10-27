import Link from "next/link";
import { products } from "@/lib/products";
import { WorkVisual } from "@/components/mocks";

export function Products() {
  return (
    <section id="trabalho" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          001 — Trabalho
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl tracking-tight text-ink md:text-5xl">
          Cinco produtos. Telas reais, domínio próprio.
        </h2>
      </div>

      <ol>
        {products.map((product, index) => {
          const reverse = index % 2 === 1;
          return (
            <li
              key={product.id}
              className="border-t border-line"
              style={{ ["--work-accent" as string]: product.accent }}
            >
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid lg:grid-cols-2"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <WorkVisual product={product} />
                </div>
                <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-4xl tracking-tight text-ink md:text-5xl">
                    {product.name}
                  </h3>
                  <p
                    className="mt-2 text-sm font-medium"
                    style={{ color: product.accent }}
                  >
                    {product.tagline}
                  </p>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {product.stack}
                    <span className="mx-2 text-line">/</span>
                    {product.tags.join(" · ")}
                  </p>
                  <span className="mt-8 inline-flex items-center text-sm font-medium text-ink transition group-hover:text-accent">
                    Abrir o produto
                    <span className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
