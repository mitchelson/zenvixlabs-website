# Zenvix Labs — Site institucional

Landing page institucional da **Zenvix Labs**, desenvolvida com Next.js 16 e Tailwind CSS 4.

**Domínio de produção:** [zenvixlabs.app](https://zenvixlabs.app)

## Produtos destacados

| Produto       | Caminho        | Site                    |
| ------------- | -------------- | ----------------------- |
| CT095         | `/ct095`       | [ct095.com](https://www.ct095.com) |
| Konta         | `/konta`       | [daylize.com](https://www.daylize.com) |
| Zenvix Store  | `/zenvix-store`| [zenvixfotos.com](https://zenvixfotos.com) |

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
