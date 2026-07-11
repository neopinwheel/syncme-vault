# SyncME Vault

Pre-launch / crowdfunding-style landing page for **SyncME Vault** — a
pocket-sized, AI-powered personal backup device that automatically syncs,
organizes, and secures your photos and files locally, with no cloud
subscription.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS 4).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — root layout, global styles, page composition
- `src/components` — landing page sections (hero, story, features, specs,
  reward tiers, FAQ, email capture, etc.)
- `public/media` — product render and concept video

## Deploy

The site is a static Next.js app, deployable to Vercel:

```bash
npx vercel --prod
```
