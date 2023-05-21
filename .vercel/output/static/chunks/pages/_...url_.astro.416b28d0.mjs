import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.a141932b.mjs';
import 'html-escaper';
import { $ as $$BasicLayout } from './_...glob_.astro.feda7668.mjs';
/* empty css                              *//* empty css                           *//* empty css                               */
const $$Astro = createAstro();
function getStaticPaths() {
  return [
    { params: { url: "sweet_peas_fire" } }
  ];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { title, subtitle, PrimaryColor, NavTextColor, link, text } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-AUPJX5VN" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical astro-AUPJX5VN" style="margin-top: 10%">
    <div class="sixteenNine astro-AUPJX5VN">
      <iframe${addAttribute(link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-AUPJX5VN"></iframe>
  </div>
    <div class="astro-AUPJX5VN">
      <p class="serif project astro-AUPJX5VN">${text}</p>
    </div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/films/[...url].astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/films/[...url].astro";
const $$url = "/films/[...url]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
