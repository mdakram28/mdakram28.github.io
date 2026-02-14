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
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  }
};