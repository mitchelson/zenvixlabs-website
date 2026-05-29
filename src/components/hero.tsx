import Link from "next/link";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 glow-orb" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-4 py-1.5 text-sm text-muted backdrop-blur">
          <Sparkles className="h-4 w-4 text-accent-bright" aria-hidden />
          Desenvolvimento de software sob medida
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
          Tecnologia que transforma{" "}
          <span className="text-gradient">ideias em produtos</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          A Zenvix Labs projeta e constrói plataformas digitais — do mobile ao
          cloud — com foco em experiência, performance e escala.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-glow/30 transition hover:bg-accent-bright"
          >
            Conheça nossos produtos
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-accent/50 hover:bg-card"
          >
            <Code2 className="h-4 w-4 text-accent-bright" aria-hidden />
            Solicitar projeto
          </Link>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-card-border pt-10 sm:grid-cols-3">
          {[
            { value: "3+", label: "Produtos ativos" },
            { value: "Full-stack", label: "Web & Mobile" },
            { value: "Cloud", label: "Deploy & escala" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-accent-bright md:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
