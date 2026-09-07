# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Shiva Gauri Traders — prototype notes

- Products & categories: `src/data/products.ts` (photos, names, prices, sizes, colours, descriptions, `featured` / `newArrival` flags).
- Business details (address, phone/WhatsApp, opening-hours placeholder): `src/data/site.ts`.
- All English + Nepali interface text: `src/data/translations.ts`.
- Photos live in `src/assets/` — replace the files (keeping the names) to swap in real catalog images.
- Fully static: `bun run build` outputs prerendered HTML to `dist/client`.
- GitHub Pages: `.github/workflows/deploy.yml` builds with `BASE_PATH=/<repo-name>/`, uploads the build as an artifact and deploys to Pages.
