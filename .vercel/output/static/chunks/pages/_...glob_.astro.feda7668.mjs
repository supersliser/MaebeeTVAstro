import { c as createAstro, a as createComponent, d as defineStyleVars, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, f as renderComponent, g as renderHead } from '../astro.a141932b.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                               */
const $$Astro$3 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { PrimaryColor, NavTextColor } = Astro2.props;
  const primaryColour = PrimaryColor;
  const textColour = NavTextColor;
  const AllFilms = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/films/sweet_peas_fire.md": () => import('./sweet_peas_fire.md.7e5f81b4.mjs')}), () => "../pages/films/*.md");
  const AllProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/maebeetv_asks.md": () => import('./maebeetv_asks.md.7318eaa5.mjs')}), () => "../pages/projects/*.md");
  const AllOther = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/other/🐸.astro": () => import('./🐸.astro.538c2b00.mjs')}), () => "../pages/other/*.astro");
  const $$definedVars = defineStyleVars([{ primaryColour, textColour }]);
  return renderTemplate`
${maybeRenderHead($$result)}<nav class="astro-YMHDP2RL"${addAttribute($$definedVars, "style")}>
    <div class="astro-YMHDP2RL">
        <a class="homeButton astro-YMHDP2RL" href="../">
            <img width="32" height="32" src="https://cdn.discordapp.com/attachments/903265431396179978/977713498090008606/MaebeeTV-logos.jpeg" class="astro-YMHDP2RL">
            <p class="serif astro-YMHDP2RL">MaebeeTV Productions</p>
        </a>
        <ul class="astro-YMHDP2RL">
            <li class="astro-YMHDP2RL">
                <a href="/" class="astro-YMHDP2RL"> Home</a>
            </li>
            <li class="astro-YMHDP2RL">
                <a href="/about" class="astro-YMHDP2RL"> About</a>
            </li>
            <li class="dropdown astro-YMHDP2RL">
                <a class="dropbtn astro-YMHDP2RL" href="javascript:void(0)">
                    Films
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 astro-YMHDP2RL" width="12px">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" class="astro-YMHDP2RL"></path>
                    </svg>
                </a>
                <div class="dropdown-content astro-YMHDP2RL">
                    ${AllFilms.map((post) => renderTemplate`<a${addAttribute(post.url, "href")} class="astro-YMHDP2RL">
                                ${post.frontmatter.title}
                            </a>`)}
                </div>
            </li>
            <li class="dropdown astro-YMHDP2RL">
                <a class="dropbtn astro-YMHDP2RL" href="javascript:void(0)">
                    Projects
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 astro-YMHDP2RL" width="12px">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" class="astro-YMHDP2RL"></path>
                    </svg>
                </a>
                <div class="dropdown-content astro-YMHDP2RL">
                    ${AllProjects.map((post) => renderTemplate`<a${addAttribute(post.url, "href")} class="astro-YMHDP2RL">
                                ${post.frontmatter.title}
                            </a>`)}
                </div>
            </li>
            <li class="dropdown astro-YMHDP2RL">
                <a class="dropbtn astro-YMHDP2RL" href="javascript:void(0)">
                    Other fun stuff
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 astro-YMHDP2RL" width="12px">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" class="astro-YMHDP2RL"></path>
                    </svg>
                </a>
                <div class="dropdown-content astro-YMHDP2RL">
                    ${AllOther.map((post) => renderTemplate`<a${addAttribute(post.url, "href")} class="astro-YMHDP2RL">
                                ${post.title}
                            </a>`)}
                </div>
            </li>
        </ul>
    </div>
</nav>`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/NavBar.astro");

const $$Astro$2 = createAstro();
const $$Top = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Top;
  const { PrimaryColor, text, NavTextColor } = Astro2.props;
  const $$definedVars = defineStyleVars([{ PrimaryColor, NavTextColor }]);
  return renderTemplate`${maybeRenderHead($$result)}<div class="top astro-6UZMZU6T"${addAttribute($$definedVars, "style")}>
    <h1 class="sans astro-6UZMZU6T">${text}</h1>
</div>`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/Top.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$BasicLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title, subtitle, PrimaryColor, NavTextColor } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="utf-8">\n		<link rel="icon" type="image/svg+xml" href="https://media.discordapp.net/attachments/903265431396179978/977713498090008606/MaebeeTV-logos.jpeg?width=810&height=810">\n		<meta name="viewport" content="width=device-width">\n		<meta name="generator"', ">\n		<title>", ' - MaebeeTV</title>\n		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3417864629803378" crossorigin="anonymous"><\/script>\n	', "</head>\n	<body>\n		", "\n		", "\n		", "\n	</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Nav", $$NavBar, { "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }), renderComponent($$result, "Top", $$Top, { "text": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }), renderSlot($$result, $$slots["default"]));
}, "M:/maebeetv stuff/MaebeeTVAstro/src/layouts/BasicLayout.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await fetch("https://api.npoint.io/610b9bb2a97b2e3a797f/pages/0").then((response) => response.json());
  return data.map((post) => {
    return {
      params: { glob: post.glob },
      props: { post }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": entry.title, "subtitle": entry.subtitle, "PrimaryColor": entry.PrimaryColor, "NavTextColor": entry.NavTextColor, "class": "astro-NAYYEELK" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="vertical astro-NAYYEELK" style="margin-top: 10%">
    <div class="sixteenNine astro-NAYYEELK">
      <iframe${addAttribute(entry.link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-NAYYEELK"></iframe>
    </div>
    <div class="astro-NAYYEELK">
      <p class="serif project astro-NAYYEELK">${entry.text}</p>
    </div>
  </div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/projects/[...glob].astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/projects/[...glob].astro";
const $$url = "/projects/[...glob]";

const ____glob_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BasicLayout as $, ____glob_ as _ };
