import Link from "next/link";
import { products } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-background/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-xl text-background">
              Zenvix <em className="text-accent">Labs</em>
            </p>
            <p className="mt-3 max-w-xs text-sm">
              Estúdio de software. Produtos digitais com ofício.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-background/40">
              Trabalho
            </p>
            <ul className="mt-3 space-y-2">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition hover:text-accent"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-background/40">
              Estúdio
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="#estudio" className="transition hover:text-accent">
                  Sobre
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contato@zenvixlabs.app"
                  className="transition hover:text-accent"
                >
                  contato@zenvixlabs.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-background/10 pt-8 font-mono text-[11px] uppercase tracking-widest text-background/35">
          © {year} Zenvix Labs
        </p>
      </div>
    </footer>
  );
}
