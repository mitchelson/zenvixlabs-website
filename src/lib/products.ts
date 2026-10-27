export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  path: string;
  tags: string[];
};

export const products: Product[] = [
  {
    id: "ta-na-promo",
    name: "Tá na Promo",
    tagline: "Promoções de supermercado no mesmo lugar",
    description:
      "App e site para descobrir e comparar ofertas de mercados locais — encartes, listas de compra e preços atualizados automaticamente.",
    href: "https://www.tanapromo.app",
    path: "/ta-na-promo",
    tags: ["Web", "Mobile", "Consumo"],
  },
  {
    id: "selah",
    name: "Selah",
    tagline: "Pare. Medite. Caminhe em comunidade.",
    description:
      "Check-in devocional em grupo com foto, insight e leitura bíblica, ranking de constância, desafios do calendário cristão e mural de oração.",
    href: "https://selah.zenvixlabs.app",
    path: "/selah",
    tags: ["Mobile", "iOS", "Fé"],
  },
  {
    id: "whatsapp-viewer",
    name: "WhatsApp Viewer",
    tagline: "Suas conversas, só no seu navegador",
    description:
      "Visualizador de exportações do WhatsApp 100% local — abre .txt ou .zip com mídia, busca, filtros e PDF, sem enviar nada para servidor.",
    href: "https://whatsappviewer.zenvixlabs.app",
    path: "/whatsapp-viewer",
    tags: ["Web", "Privacidade", "Ferramenta"],
  },
  {
    id: "zenvix-store",
    name: "Zenvix Store",
    tagline: "Fotos e vendas com IA",
    description:
      "Ecossistema para fotógrafos e eventos — loja online, processamento de imagens com biometria facial e gestão de pedidos em escala.",
    href: "https://zenvixfotos.com",
    path: "/zenvix-store",
    tags: ["Web", "IA", "E-commerce"],
  },
  {
    id: "konta",
    name: "Konta",
    tagline: "Finanças pessoais no seu bolso",
    description:
      "App de controle financeiro com metas, cofrinhos e insights. Disponível na Daylize para organizar gastos com simplicidade.",
    href: "https://www.daylize.com",
    path: "/konta",
    tags: ["Mobile", "iOS", "Finanças"],
  },
];
