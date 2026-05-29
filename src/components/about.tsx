import { Cpu, Layers, Shield } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Arquitetura sólida",
    text: "Monolitos modulares, APIs REST e integrações pensadas para evoluir com o negócio.",
  },
  {
    icon: Cpu,
    title: "Stack moderna",
    text: "Next.js, React Native, NestJS, PostgreSQL e serviços em nuvem — sempre com boas práticas.",
  },
  {
    icon: Shield,
    title: "Produção de verdade",
    text: "Monitoramento, CI/CD e deploy contínuo para manter seus produtos estáveis no ar.",
  },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-card-border bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-bright">
            Sobre
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Zenvix Labs
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Somos um estúdio de desenvolvimento de software focado em criar
            produtos digitais completos — da concepção ao deploy. Atuamos em
            SaaS, aplicativos mobile e plataformas com inteligência artificial,
            sempre com design limpo e código sustentável.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-2xl border border-card-border bg-card p-6 transition hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-glow/20 text-accent-bright">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
