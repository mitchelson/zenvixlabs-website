const pillars = [
  {
    index: "01",
    title: "Arquitetura que aguenta o segundo ano",
    text: "APIs, dados e apps pensados para evoluir — sem reescrever o produto quando o uso chega.",
    tone: "bg-[#1c1f3b] text-[#f3eee4]",
  },
  {
    index: "02",
    title: "Stack sóbria, ponta a ponta",
    text: "Next.js, Expo, NestJS, Postgres e cloud. Escolhemos o que opera bem, não o que brilha no tweet.",
    tone: "bg-[#d4552a] text-white",
  },
  {
    index: "03",
    title: "Produção, não protótipo eterno",
    text: "CI, monitoramento e deploy contínuo. O trabalho termina quando está estável no ar.",
    tone: "bg-[#0c1f14] text-[#e8f6ec]",
  },
];

export function About() {
  return (
    <section id="estudio" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          002 — Estúdio
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
          Um laboratório
          <em className="text-accent"> que publica.</em>
        </h2>
      </div>
      <ul className="grid border-t border-line md:grid-cols-3">
        {pillars.map((pillar) => (
          <li
            key={pillar.index}
            className={`min-h-[280px] border-line px-6 py-10 md:border-r md:last:border-r-0 ${pillar.tone}`}
          >
            <p className="font-mono text-[11px] tracking-widest opacity-60">
              {pillar.index}
            </p>
            <h3 className="mt-8 font-display text-2xl leading-tight tracking-tight md:text-3xl">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {pillar.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
