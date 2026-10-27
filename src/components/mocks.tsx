import type { ReactNode } from "react";
import type { Product } from "@/lib/products";
import Image from "next/image";

function PhoneShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`phone-shadow relative w-[210px] shrink-0 rounded-[2.1rem] bg-[#1a1814] p-[9px] sm:w-[230px] ${className}`}
    >
      <div className="absolute top-3 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/80" />
      <div className="aspect-[9/19] overflow-hidden rounded-[1.65rem] bg-white">
        {children}
      </div>
    </div>
  );
}

function SelahPhone() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col bg-[#f7f7f7] px-3 pt-8 text-[#222]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-[#888]">Célula quarta</p>
            <p className="text-[15px] font-semibold">Olá, Marina</p>
          </div>
          <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#d4552a] ring-1 ring-[#e8e4dc]">
            ✦ 12
          </span>
        </div>
        <div className="mt-3 rounded-xl bg-[#1c1f3b] p-3 text-white">
          <p className="text-[8px] font-semibold tracking-[0.16em] text-[#f0b45b] uppercase">
            Versículo do dia
          </p>
          <p className="font-display mt-1 text-[12px] leading-snug italic">
            “Parem e saibam que eu sou Deus.”
          </p>
          <p className="mt-1 text-[9px] text-white/50">Salmos 46:10</p>
        </div>
        <div className="mt-2 rounded-xl bg-white p-2.5 ring-1 ring-[#e8e4dc]">
          <p className="text-[10px] text-[#666]">
            <strong className="text-[#222]">2</strong> ainda não fizeram
            check-in
          </p>
        </div>
        <div className="mt-2 flex-1 overflow-hidden rounded-xl bg-[#6e4529]">
          <div className="flex items-center gap-1.5 p-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4552a] text-[8px] font-bold text-white">
              M
            </span>
            <span className="text-[10px] font-semibold text-white">Marina</span>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}

function KontaPhone() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col bg-[#111] px-3 pt-8 text-white">
        <p className="text-[9px] tracking-[0.18em] text-[#b4f54a] uppercase">
          Konta
        </p>
        <p className="mt-1 text-[16px] font-semibold">Caixas do mês</p>
        <p className="mt-0.5 text-[10px] text-white/45">Abril · disponível</p>
        {[
          { name: "Mercado", used: "R$ 820", max: "R$ 1.200", w: "68%" },
          { name: "Lazer", used: "R$ 140", max: "R$ 400", w: "35%" },
          { name: "Cofrinho", used: "R$ 2.100", max: "meta", w: "80%" },
        ].map((box) => (
          <div
            key={box.name}
            className="mt-2.5 rounded-xl bg-white/5 p-2.5 ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between text-[11px]">
              <span>{box.name}</span>
              <span className="text-white/50">{box.used}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#b4f54a]"
                style={{ width: box.w }}
              />
            </div>
          </div>
        ))}
      </div>
    </PhoneShell>
  );
}

function WhatsAppChat() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="rounded-3xl bg-[#ece5dd] p-4 shadow-2xl ring-1 ring-black/10">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4537e] text-xs font-bold text-white">
            A
          </span>
          <span className="text-sm font-semibold text-[#111]">Ana</span>
        </div>
        <div className="space-y-2 text-[13px] leading-snug">
          <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[#111] shadow-sm">
            Consegue abrir a conversa que exportei?
          </p>
          <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[#111]">
            Abri aqui no WhatsApp Viewer
          </p>
          <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[#111]">
            Filtro, busca e PDF — sem instalar nada
          </p>
        </div>
      </div>
    </div>
  );
}

export function WorkVisual({ product }: { product: Product }) {
  if (product.visual === "photo") {
    return (
      <div className="relative h-full min-h-[340px] overflow-hidden bg-[#0c1f14] sm:min-h-[420px]">
        <Image
          src={product.image}
          alt={`${product.name} no celular`}
          fill
          className="object-contain object-bottom"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={product.id === "ta-na-promo"}
        />
      </div>
    );
  }

  if (product.visual === "phone") {
    return (
      <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-[#f3ebe3] pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#f0b45b55,transparent_50%)]" />
        <div className="relative mb-0 translate-y-6">
          <SelahPhone />
        </div>
      </div>
    );
  }

  if (product.visual === "chat") {
    return (
      <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#0b3d36] px-6 py-12 sm:min-h-[420px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/work/whatsapp-doodle.svg')",
            backgroundSize: "280px",
          }}
          aria-hidden
        />
        <WhatsAppChat />
      </div>
    );
  }

  if (product.visual === "boxes") {
    return (
      <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-[#111] pt-10">
        <div className="pointer-events-none absolute -top-20 right-0 size-72 rounded-full bg-[#b4f54a]/15 blur-3xl" />
        <div className="relative mb-0 translate-y-6">
          <KontaPhone />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[280px] overflow-hidden bg-[#ece7ff] sm:min-h-[380px]">
      <Image
        src={product.image}
        alt={`Identidade visual de ${product.name}`}
        fill
        className="object-cover object-center"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}

export function HeroStage() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px] lg:h-[560px]">
      <div className="absolute inset-x-6 top-10 bottom-0 overflow-hidden rounded-[2rem] bg-[#0c1f14] sm:inset-x-10">
        <Image
          src="/work/ta-na-promo.webp"
          alt="App Tá na Promo no celular"
          fill
          className="object-contain object-bottom"
          sizes="(min-width: 1024px) 480px, 90vw"
          priority
        />
      </div>

      <div className="float absolute top-4 left-0 hidden w-44 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 sm:block">
        <Image
          src="/work/selah.png"
          alt=""
          width={352}
          height={185}
          className="h-auto w-full"
        />
      </div>
      <div className="float-delay absolute right-0 bottom-16 hidden w-40 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 sm:block lg:-right-6">
        <Image
          src="/work/whatsapp-viewer.png"
          alt=""
          width={320}
          height={168}
          className="h-auto w-full"
        />
      </div>
      <div className="float absolute bottom-8 left-2 hidden w-36 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10 md:block">
        <Image
          src="/work/zenvix-store.png"
          alt=""
          width={288}
          height={151}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
