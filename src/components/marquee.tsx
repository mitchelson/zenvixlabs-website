const items = [
  "Next.js",
  "Expo",
  "React Native",
  "NestJS",
  "PostgreSQL",
  "Astro",
  "Cloudflare",
  "Vercel",
  "Firebase",
  "TypeScript",
  "IA aplicada",
];

export function Marquee() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-line py-4">
      <div className="marquee-track flex w-max gap-10 pr-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-2xl italic tracking-tight text-ink/40 md:text-3xl"
          >
            {item}
            <span className="ml-10 text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
