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
    id: "ct095",
    name: "CT095",
    tagline: "Gestão esportiva e escolar",
    description:
      "Plataforma completa para escolas de futevôlei e centros de treinamento — alunos, turmas, créditos, pagamentos e operação do dia a dia.",
    href: "https://www.ct095.com",
    path: "/ct095",
    tags: ["Web", "SaaS", "Esportes"],
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
];
