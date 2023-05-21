import { i as server_default } from './chunks/astro.a141932b.mjs';
import 'html-escaper';

const _page0 = () => import('./chunks/pages/index.astro.202b7386.mjs');
const _page1 = () => import('./chunks/pages/maebeetv_asks.md.e7a244d7.mjs');
const _page2 = () => import('./chunks/pages/_title_.astro.9c962a03.mjs').then(n => n._);
const _page3 = () => import('./chunks/pages/about.astro.0f710394.mjs');
const _page4 = () => import('./chunks/pages/sweet_peas_fire.md.ad3c625a.mjs');
const _page5 = () => import('./chunks/pages/_title_.astro.9c962a03.mjs').then(n => n.a);
const _page6 = () => import('./chunks/pages/🐸.astro.6fcc99db.mjs');



const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/projects/maebeetv_asks.md", _page1],["src/pages/projects/[title].astro", _page2],["src/pages/about.astro", _page3],["src/pages/films/sweet_peas_fire.md", _page4],["src/pages/films/[title].astro", _page5],["src/pages/other/🐸.astro", _page6],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { pageMap, renderers };
