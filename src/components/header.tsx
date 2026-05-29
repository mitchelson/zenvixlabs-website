import Link from "next/link";
import { Menu } from "lucide-react";

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-glow to-gradient-end text-sm font-bold text-white shadow-lg shadow-accent-glow/30">
            Z
          </span>
          <span className="font-semibold tracking-tight text-foreground group-hover:text-accent-bright transition-colors">
            Zenvix Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent-glow/25 transition hover:bg-accent-bright"
          >
            Fale conosco
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-lg border border-card-border p-2 text-muted [&::-webkit-details-marker]:hidden">
            <Menu className="h-5 w-5" aria-hidden />
            <span className="sr-only">Menu</span>
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-card-border bg-card p-2 shadow-xl">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-card-border/40 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
