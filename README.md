# Zenvix Labs — Site institucional

Landing institucional da **Zenvix Labs** — estúdio editorial em Next.js 16 e Tailwind CSS 4.

**Domínio de produção:** [zenvixlabs.app](https://zenvixlabs.app)

## Produtos destacados

| Produto          | Caminho             | Site |
| ---------------- | ------------------- | ---- |
| Tá na Promo      | `/ta-na-promo`      | [tanapromo.app](https://www.tanapromo.app) |
| Selah            | `/selah`            | [selah.zenvixlabs.app](https://selah.zenvixlabs.app) |
| WhatsApp Viewer  | `/whatsapp-viewer`  | [whatsappviewer.zenvixlabs.app](https://whatsappviewer.zenvixlabs.app) |
| Zenvix Store     | `/zenvix-store`     | [zenvixfotos.com](https://zenvixfotos.com) |
| Konta            | `/konta`            | [konta.zenvixlabs.app](https://konta.zenvixlabs.app) |

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Crie um repositório no GitHub e envie este projeto:

   ```bash
   git remote add origin git@github.com:SEU_USUARIO/zenvixlabs-website.git
   git push -u origin main
   ```

2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Framework preset: **Next.js** (detectado automaticamente).
4. Em **Domains**, adicione `zenvixlabs.app` e configure o DNS conforme a Vercel indicar.
5. Deploy — cada push em `main` gera um novo deploy.

## Estrutura

```
src/
  app/          # layout, página principal, estilos globais
  components/   # Header, Hero, About, Products, Contact, Footer
  lib/          # dados dos produtos
```

## Contato

O e-mail exibido no site é `contato@zenvixlabs.app`. Ajuste em `src/components/contact.tsx` se necessário.
