export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-16 border-t border-line bg-ink text-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-background/50">
          003 — Contato
        </p>
        <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
          Tem um produto
          <br />
          para tirar do papel?
        </h2>
        <p className="mt-6 max-w-xl text-lg text-background/65">
          MVP, plataforma SaaS ou evolução de algo que já existe. Escreva — a
          gente responde.
        </p>

        <a
          href="mailto:contato@zenvixlabs.app"
          className="group mt-12 inline-block font-display text-[clamp(1.6rem,6vw,4.2rem)] leading-[1.05] tracking-tight text-accent transition hover:text-background"
        >
          contato@zenvixlabs.app
          <span className="ml-3 inline-block transition-transform group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
