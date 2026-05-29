import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="border-t border-card-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-gradient-to-br from-card via-card to-gradient-end/20 p-8 md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 glow-orb opacity-80" />

          <div className="relative max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent-bright">
              Contato
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Vamos construir algo juntos?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Precisa de um MVP, uma plataforma SaaS ou evolução de um produto
              existente? Entre em contato e conte sobre o seu projeto.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:contato@zenvixlabs.app"
                className="inline-flex items-center gap-3 rounded-xl border border-card-border bg-background/50 px-5 py-3 text-sm transition hover:border-accent/50"
              >
                <Mail className="h-5 w-5 text-accent-bright" aria-hidden />
                <span>
                  <span className="block text-muted">E-mail</span>
                  <span className="font-medium text-foreground">
                    contato@zenvixlabs.app
                  </span>
                </span>
              </a>
              <div className="inline-flex items-center gap-3 rounded-xl border border-card-border bg-background/50 px-5 py-3 text-sm">
                <MapPin className="h-5 w-5 text-accent-bright" aria-hidden />
                <span>
                  <span className="block text-muted">Domínio</span>
                  <span className="font-medium text-foreground">
                    zenvixlabs.app
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
