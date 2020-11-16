import { RouteTypes, ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './docs',
  routes: {
    '/blog/:id': {
      type: RouteTypes.json,
      // postRenderers:  ,
      id: {
        url: 'http://localhost:4200/assets/blogs.json',
        // file: './src/assets/blogs.json',
        resultsHandler: (response) => response.map(b => b.slug),
        // property: 'id',
      }
    }
  }
};