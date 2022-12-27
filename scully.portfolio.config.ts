import { RouteTypes, ScullyConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './docs',
  routes: {
    '/blog/:id': {
      type: RouteTypes.json,
      postRenderers: [baseHrefRewrite],
      baseHref: '/',
      id: {
        url: 'http://localhost:4200/blogs/blogs.json',
        resultsHandler: (response) => response.map(b => b.slug),
      }
    }
  },
  puppeteerLaunchOptions: {
    args: [
      "--disable-gpu",
      "--renderer",
      "--no-sandbox",
      "--no-service-autorun",
      "--no-experiments",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-extensions"
    ]
  }
};