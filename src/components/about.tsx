const pillars = [
  {
    index: "01",
    title: "Arquitetura que aguenta o segundo ano",
    text: "APIs, dados e apps pensados para evoluir — sem reescrever o produto quando o uso chega.",
  },
  {
    index: "02",
    title: "Stack sóbria, ponta a ponta",
    text: "Next.js, Expo, NestJS, Postgres e cloud. Escolhemos o que opera bem, não o que brilha no tweet.",
  },
  {
    index: "03",
    title: "Produção, não protótipo eterno",
    text: "CI, monitoramento e deploy contínuo. O trabalho termina quando está estável no ar — e segue.",
  },
];

export function About() {
  return (
    <section id="estudio" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            002 — Estúdio
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
            Um laboratório
            <br />
            <em className="text-accent">que publica.</em>
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          A Zenvix Labs é um estúdio de software. Concebemos o produto, desenhamos
          a experiência, escrevemos o código e colocamos no ar — SaaS, apps
          mobile e plataformas com inteligência artificial, com o mesmo critério
          de ofício.
        </p>
      </div>

      <ul className="border-t border-line">
        {pillars.map((pillar) => (
          <li
            key={pillar.index}
            className="border-b border-line last:border-b-0"
          >
            <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10">
              <span className="font-mono text-xs text-muted">{pillar.index}</span>
              <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {pillar.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
