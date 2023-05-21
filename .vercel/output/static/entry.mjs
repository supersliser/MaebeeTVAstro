import { i as server_default } from './chunks/astro.a141932b.mjs';
import 'html-escaper';

const _page0 = () => import('./chunks/pages/index.astro.39e9a82d.mjs');
const _page1 = () => import('./chunks/pages/_...glob_.astro.c09ede59.mjs').then(n => n._);
const _page2 = () => import('./chunks/pages/about.astro.9c92836a.mjs');
const _page3 = () => import('./chunks/pages/sweet_peas_fire.md.7e5f81b4.mjs');
const _page4 = () => import('./chunks/pages/_...url_.astro.b40d644a.mjs');
const _page5 = () => import('./chunks/pages/🐸.astro.10ea5c44.mjs');



const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/projects/[...glob].astro", _page1],["src/pages/about.astro", _page2],["src/pages/films/sweet_peas_fire.md", _page3],["src/pages/films/[...url].astro", _page4],["src/pages/other/🐸.astro", _page5],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { pageMap, renderers };
