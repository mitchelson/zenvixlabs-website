import Link from "next/link";
import { products } from "@/lib/products";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="rise font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            Estúdio de software · Boa Vista / remoto
          </p>
          <h1 className="rise rise-delay-1 mt-6 font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.88] tracking-tight text-ink">
            Produtos
            <br />
            digitais
            <br />
            <em className="text-accent">com pulso.</em>
          </h1>
        </div>

        <div className="rise rise-delay-2 max-w-md pb-2 lg:justify-self-end">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            Projetamos, construímos e operamos plataformas que as pessoas abrem
            de verdade — do app no bolso à API na nuvem.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
      </div>

      <dl className="rise rise-delay-3 mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px border-y border-line bg-line sm:grid-cols-4">
        {[
          { value: String(products.length), label: "Produtos no ar" },
          { value: "Web + app", label: "Do clique ao nativo" },
          { value: "Full-stack", label: "API, dados, cloud" },
          { value: "Produção", label: "CI, monitor, deploy" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-background px-6 py-6 sm:px-8 sm:py-8"
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
