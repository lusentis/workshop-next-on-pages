# Next.js (App Router) on Cloudflare Pages

Example of a Next.js app (App Router) running on Cloudflare Pages.
[This commit](https://github.com/lusentis/workshop-next-on-pages/commit/4c6ffbb11cfb2b13b8ac6ba907e350e60604add9?diff=split&w=1) contains all the changes needed to run a Next.js App Router app on Cloudflare Pages.

> This guide has been created on 2024-02-20 with the latest React Canary and next-on-pages packages. Due to the beta nature of these packages, the information in this guide may be outdated. Please refer to the official documentation for the latest information.

## Commands

```bash
pnpm i # install deps
pnpm exec wrangler d1 create pollo-4 # create the database (update the id in wrangler.toml)
pnpm exec wrangler d1 execute pollo-4 --file ./init.sql --local # init local db
pnpm exec wrangler d1 execute pollo-4 --file ./init.sql # init remote db (careful!)
pnpm run dev # run locally
pnpm exec next-on-pages # build
pnpm exec wrangler pages deploy .vercel/output/static # deploy
```

## Caveats

As of today, you need to do the following manually:

1. You must manually add the `nodejs_compat` compatibility flag from yhe Cloudflare Dashboard (Workers & Pages > [your app] > Settings > Functions > Compatibility flags) and deploy your app again.
2. After your first deploy your app, you must manually bind the D1 database from the Cloudflare Dashboard (Workers & Pages > [your app] > Settings > Functions > D1 Database).

## References

Slides: <https://docs.google.com/presentation/d/1UQnAhO4VKu9hst9BBbbsT9LAz_duuJgOVVVvttYHQvI/edit?usp=sharing>

Documentation: <https://b6f0a2e0.cloudflare-docs-7ou.pages.dev/pages/framework-guides/>

Demo: <https://pollo-4.pages.dev/>

Support Channel: <https://discord.com/invite/cloudflaredev>

## License

Public Domain (Unlicense)
