import Link from "next/link";

const nav = [
  { label: "Trabalho", href: "#trabalho" },
  { label: "Estúdio", href: "#estudio" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-ink">
            Zenvix
          </span>
          <span className="font-display text-xl italic text-accent">Labs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="mailto:contato@zenvixlabs.app"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition hover:bg-accent"
          >
            Escrever
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-line px-3 py-1.5 text-sm text-muted [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-line bg-background p-2 shadow-lg">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm text-muted hover:bg-card hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="mailto:contato@zenvixlabs.app"
              className="mt-1 block rounded-xl bg-ink px-3 py-2 text-sm text-background"
            >
              Escrever
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
