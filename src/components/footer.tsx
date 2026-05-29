import Link from "next/link";
import { products } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-semibold text-foreground">Zenvix Labs</p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Desenvolvimento de software — produtos digitais com propósito.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Produtos</p>
            <ul className="mt-3 space-y-2">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition hover:text-accent-bright"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Navegação</p>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Produtos", href: "#produtos" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-accent-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-card-border pt-8 text-center text-sm text-muted">
          © {year} Zenvix Labs. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
