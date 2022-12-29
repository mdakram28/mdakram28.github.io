import { RouteTypes, ScullyConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
import { DisableAngular } from 'scully-plugin-disable-angular';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './docs',
  routes: {
    '/blog/:id': {
      type: RouteTypes.json,
      postRenderers: [baseHrefRewrite, DisableAngular],
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
      "--no-experiments",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-zygote",
      "--single-process",
      "--disable-extensions"
    ]
  }
};