import Link from "next/link";
import { products } from "@/lib/products";
import { HeroStage } from "@/components/mocks";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-4">
        <div className="relative z-10 pt-8 pb-4 lg:pb-16">
          <p className="rise font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Estúdio de software · produtos no ar
          </p>
          <h1 className="rise rise-delay-1 mt-5 font-display text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.88] tracking-tight text-ink">
            Produtos
            <br />
            digitais
            <br />
            <em className="text-accent">com pulso.</em>
          </h1>
          <p className="rise rise-delay-2 mt-6 max-w-md text-lg leading-relaxed text-muted">
            Não é slide. São apps e plataformas que as pessoas abrem — mercado,
            fé, conversa, foto, dinheiro.
          </p>
          <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="#trabalho"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition hover:bg-accent"
            >
              Ver o trabalho
            </Link>
            <Link
              href="#contato"
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink"
            >
              Briefing
            </Link>
          </div>
        </div>
        <div className="rise rise-delay-2">
          <HeroStage />
        </div>
      </div>

      <dl className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
        {[
          { value: String(products.length), label: "Produtos no ar" },
          { value: "Web + app", label: "Do clique ao nativo" },
          { value: "Full-stack", label: "API, dados, cloud" },
          { value: "Produção", label: "CI, monitor, deploy" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-background px-6 py-6 sm:px-8 sm:py-7"
          >
            <dt className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              {stat.value}
            </dt>
            <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
