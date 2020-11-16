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
        url: 'http://localhost:4200/assets/blogs.json',
        resultsHandler: (response) => response.map(b => b.slug),
      }
    }
  }
};