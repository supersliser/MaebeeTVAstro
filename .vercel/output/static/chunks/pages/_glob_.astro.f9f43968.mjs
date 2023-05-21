import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.a141932b.mjs';
import 'html-escaper';
import { $ as $$BasicLayout } from './_...url_.astro.d201a579.mjs';
/* empty css                            *//* empty css                           *//* empty css                              */
const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await fetch("https://jsonkeeper.com/b/K4DE").then((response) => response.json());
  data.map((entry) => {
    return [{ params: { glob: entry.url }, props: { entry } }];
  });
}
const $$glob = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$glob;
  Astro2.params;
  const { data } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": data.title, "subtitle": data.subtitle, "PrimaryColor": data.PrimaryColor, "NavTextColor": data.NavTextColor, "class": "astro-H56T2P5B" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="vertical astro-H56T2P5B" style="margin-top: 10%">
    <div class="sixteenNine astro-H56T2P5B">
      <iframe${addAttribute(data.link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-H56T2P5B"></iframe>
    </div>
    <div class="astro-H56T2P5B">
      <p class="serif project astro-H56T2P5B">${data.text}</p>
    </div>
  </div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/projects/[glob].astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/projects/[glob].astro";
const $$url = "/projects/[glob]";

export { $$glob as default, $$file as file, getStaticPaths, $$url as url };
