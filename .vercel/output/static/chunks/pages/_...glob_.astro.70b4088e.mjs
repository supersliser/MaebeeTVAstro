import { c as createAstro, a as createComponent, d as defineStyleVars, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, f as renderComponent, g as renderHead } from '../astro.bfb7bb32.mjs';
import 'html-escaper';
/* empty css                               *//* empty css                               *//* empty css                           *//* empty css                           *//* empty css                               *//* empty css                               *//* empty css                               */
const $$Astro$a = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { PrimaryColor, NavTextColor } = Astro2.props;
  const primaryColour = PrimaryColor;
  const textColour = NavTextColor;
  const AllFilms = await fetch("https://api.npoint.io/f2948809e44e0dab1ee3").then(
    (response) => response.json()
  );
  const AllProjects = await fetch(
    "https://api.npoint.io/610b9bb2a97b2e3a797f"
  ).then((response) => response.json());
  for (var i = 0; i < AllProjects.pages.length; i++) {
    AllProjects.pages[i].glob = "../projects/" + AllProjects.pages[i].glob;
  }
  for (var i = 0; i < AllFilms.pages.length; i++) {
    AllFilms.pages[i].glob = "../films/" + AllFilms.pages[i].glob;
  }
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
                <a href="/about" class="astro-YMHDP2RL">About</a>
            </li>
            <li class="dropdown astro-YMHDP2RL">
                <a class="dropbtn astro-YMHDP2RL" href="javascript:void(0)">
                    Films
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 astro-YMHDP2RL" width="12px">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" class="astro-YMHDP2RL"></path>
                    </svg>
                </a>
                <div class="dropdown-content astro-YMHDP2RL">
                    ${AllFilms.pages.map((post) => renderTemplate`<a${addAttribute(post.glob, "href")} class="astro-YMHDP2RL">${post.title}</a>`)}
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
                    ${AllProjects.pages.map((post) => renderTemplate`<a${addAttribute(post.glob, "href")} class="astro-YMHDP2RL">${post.title}</a>`)}
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
                    <a href="/other/🐸" class="astro-YMHDP2RL">🐸</a>
                    <a href="/other/privacypolicy" class="astro-YMHDP2RL">Privacy Policy</a>
                    <a href="/other/kids/" class="astro-YMHDP2RL">MaebeeTV Kids</a>
                </div>
            </li>
        </ul>
    </div>
</nav>`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/NavBar.astro");

const $$Astro$9 = createAstro();
const $$Top = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Top;
  const { PrimaryColor, text, NavTextColor } = Astro2.props;
  const $$definedVars = defineStyleVars([{ PrimaryColor, NavTextColor }]);
  return renderTemplate`${maybeRenderHead($$result)}<div class="top astro-6UZMZU6T"${addAttribute($$definedVars, "style")}>
    <h1 class="sans astro-6UZMZU6T">${text}</h1>
</div>`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/Top.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$8 = createAstro();
const $$BasicLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title, subtitle, PrimaryColor, NavTextColor } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en">\n	<head>\n		<meta charset="utf-8">\n		<link rel="icon" type="image/svg+xml" href="https://media.discordapp.net/attachments/903265431396179978/977713498090008606/MaebeeTV-logos.jpeg?width=810&height=810">\n		<meta name="viewport" content="width=device-width">\n		<meta name="generator"', ">\n		<title>", ' - MaebeeTV</title>\n		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3417864629803378" crossorigin="anonymous"><\/script>\n	', "</head>\n	<body>\n		", "\n		", "\n		", "\n	</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Nav", $$NavBar, { "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }), renderComponent($$result, "Top", $$Top, { "text": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }), renderSlot($$result, $$slots["default"]));
}, "M:/maebeetv stuff/MaebeeTVAstro/src/layouts/BasicLayout.astro");

const $$Astro$7 = createAstro();
async function getStaticPaths$3() {
  const data = await fetch("https://api.npoint.io/610b9bb2a97b2e3a797f").then((response) => response.json());
  return data.pages.map((post) => {
    return {
      params: { glob: post.glob },
      props: { title: post.title, subtitle: post.subtitle, PrimaryColor: post.PrimaryColor, NavTextColor: post.NavTextColor, link: post.link, text: post.text }
    };
  });
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$$3;
  Astro2.params;
  const { title, subtitle, PrimaryColor, NavTextColor, link, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-3U2FZYI4" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div class="vertical astro-3U2FZYI4" style="margin-top: 10%">
    <div class="sixteenNine astro-3U2FZYI4">
      <iframe${addAttribute(link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-3U2FZYI4"></iframe>
    </div>
    <div class="astro-3U2FZYI4">
      <p class="serif project astro-3U2FZYI4">${text}</p>
    </div>
  </div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/Projects/[...glob].astro");

const $$file$3 = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/Projects/[...glob].astro";
const $$url$3 = "/Projects/[...glob]";

const ____glob_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$3,
    file: $$file$3,
    getStaticPaths: getStaticPaths$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
async function getStaticPaths$2() {
  const data = await fetch("https://api.npoint.io/f2948809e44e0dab1ee3").then((response) => response.json());
  return data.pages.map((post) => {
    return {
      params: { glob: post.glob },
      props: { title: post.title, subtitle: post.subtitle, PrimaryColor: post.PrimaryColor, NavTextColor: post.NavTextColor, link: post.link, text: post.text }
    };
  });
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$$2;
  Astro2.params;
  const { title, subtitle, PrimaryColor, NavTextColor, link, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-EIFMDBOV" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical astro-EIFMDBOV" style="margin-top: 10%">
    <div class="sixteenNine astro-EIFMDBOV">
      <iframe${addAttribute(link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-EIFMDBOV"></iframe>
  </div>
    <div class="astro-EIFMDBOV">
      <p class="serif project astro-EIFMDBOV">${text}</p>
    </div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/films/[...glob].astro");

const $$file$2 = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/films/[...glob].astro";
const $$url$2 = "/films/[...glob]";

const ____glob_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$2,
    file: $$file$2,
    getStaticPaths: getStaticPaths$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$NavBarKids = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NavBarKids;
  const { PrimaryColor, NavTextColor } = Astro2.props;
  const primaryColour = PrimaryColor;
  const textColour = NavTextColor;
  const AllFilms = await fetch("https://api.npoint.io/f2948809e44e0dab1ee3").then(
    (response) => response.json()
  );
  const AllProjects = await fetch(
    "https://api.npoint.io/610b9bb2a97b2e3a797f"
  ).then((response) => response.json());
  for (var i = 0; i < AllProjects.pages.length; i++) {
    AllProjects.pages[i].glob = "../projects/" + AllProjects.pages[i].glob;
  }
  for (var i = 0; i < AllFilms.pages.length; i++) {
    AllFilms.pages[i].glob = "../films/" + AllFilms.pages[i].glob;
  }
  const $$definedVars = defineStyleVars([{ primaryColour, textColour }]);
  return renderTemplate`

${maybeRenderHead($$result)}<nav class="astro-NRRH4JV5"${addAttribute($$definedVars, "style")}>
    <div class="astro-NRRH4JV5">
        <a class="homeButton astro-NRRH4JV5" href="../kids/">
            <img width="60" height="60" src="https://cdn.discordapp.com/attachments/903258487872700520/1110100037825990746/MaebeeTVKids.png" class="astro-NRRH4JV5">
            <p class="serif astro-NRRH4JV5">MaebeeTV Productions</p>
            <p class="handwriting astro-NRRH4JV5" style="font-size: 2.5rem; padding-left: 2%;">Kids</p>
        </a>
        <ul class="astro-NRRH4JV5">
            <li class="astro-NRRH4JV5">
                <a class="handwriting astro-NRRH4JV5" href="../kids/">Home</a>
            </li>
            <li class="astro-NRRH4JV5">
                <a class="handwriting astro-NRRH4JV5" href="../kids/about">About Us</a>
            </li>
            <li class="dropdown astro-NRRH4JV5" style="padding-top: 10%;">
                <a class="dropbtn handwriting astro-NRRH4JV5" href="javascript:void(0)">
                    Films
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 astro-NRRH4JV5" width="12px">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" class="astro-NRRH4JV5"></path>
                    </svg>
                </a>
                <div class="dropdown-content astro-NRRH4JV5">
                    ${AllFilms.pages.map((post) => renderTemplate`<a class="handwriting astro-NRRH4JV5"${addAttribute(post.glob, "href")}>${post.title}</a>`)}
                </div>
            </li>
            <li class="dropdown astro-NRRH4JV5" style="padding-top: 20%;">
                <a class="handwriting dropbtn astro-NRRH4JV5" href="javascript:void(0)">
                    TV Shows
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 astro-NRRH4JV5" width="12px">
                        <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" class="astro-NRRH4JV5"></path>
                    </svg>
                </a>
                <div class="dropdown-content astro-NRRH4JV5">
                    ${AllProjects.pages.map((post) => renderTemplate`<a class="handwriting astro-NRRH4JV5"${addAttribute(post.glob, "href")}>${post.title}</a>`)}
                </div>
            </li>
        </ul>
    </div>
</nav>
<svg class="drips astro-NRRH4JV5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"${addAttribute($$definedVars, "style")}><path${addAttribute(primaryColour, "fill")} fill-opacity="1" d="M0,64L24,64C48,64,96,64,144,69.3C192,75,240,85,288,112C336,139,384,181,432,213.3C480,245,528,267,576,272C624,277,672,267,720,224C768,181,816,107,864,85.3C912,64,960,96,1008,117.3C1056,139,1104,149,1152,176C1200,203,1248,245,1296,234.7C1344,224,1392,160,1416,128L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z" class="astro-NRRH4JV5"></path></svg>`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/NavBarKids.astro");

const $$Astro$4 = createAstro();
const $$Particles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Particles;
  const { id, options, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-particles", "astro-particles", { "data-id": id, "data-options": JSON.stringify(options), "data-url": url }, { "default": () => renderTemplate`
    ${maybeRenderHead($$result)}<canvas></canvas>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/node_modules/astro-particles/src/Particles.astro");

const $$Astro$3 = createAstro();
const $$Bubbles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Bubbles;
  const options = {
    preset: "bigCircles",
    autoPlay: true,
    background: {
      color: "#090909"
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      color: {
        value: "#6a731c"
      }
    }
  };
  return renderTemplate`

${renderComponent($$result, "Particles", $$Particles, { "id": "tsparticles", "options": options }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/components/Bubbles.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$BasicKidsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BasicKidsLayout;
  const { title, subtitle, PrimaryColor, NavTextColor } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="utf-8">\n		<link rel="icon" type="image/svg+xml" href="https://cdn.discordapp.com/attachments/903258487872700520/1110100037825990746/MaebeeTVKids.png">\n		<meta name="viewport" content="width=device-width">\n		<meta name="generator"', ">\n		<title>", ' - MaebeeTV</title>\n		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3417864629803378" crossorigin="anonymous"><\/script>\n	', "</head>\n	<body>\n		", "\n		", "\n			", '\n	</body></html><!-- <style define:vars={{ background }}>\n	html {\n		background-image: url("../images/circle-scatter-haikei (1).svg");\n	}\n</style> -->'])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Nav", $$NavBarKids, { "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }), renderComponent($$result, "Background", $$Bubbles, {}), renderSlot($$result, $$slots["default"]));
}, "M:/maebeetv stuff/MaebeeTVAstro/src/layouts/BasicKidsLayout.astro");

const $$Astro$1 = createAstro();
async function getStaticPaths$1() {
  const data = await fetch("https://api.npoint.io/f2948809e44e0dab1ee3").then((response) => response.json());
  return data.pages.map((post) => {
    return {
      params: { glob: post.glob },
      props: { title: post.title, subtitle: post.subtitle, PrimaryColor: post.PrimaryColor, NavTextColor: post.NavTextColor, link: post.link, text: post.text }
    };
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  Astro2.params;
  const { title, subtitle, PrimaryColor, NavTextColor, link, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicKidsLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-HYEH5N34" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical astro-HYEH5N34" style="margin-top: 10%">
    <div class="sixteenNine astro-HYEH5N34">
      <iframe${addAttribute(link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-HYEH5N34"></iframe>
  </div>
    <div class="astro-HYEH5N34">
      <p class="serif project astro-HYEH5N34">${text}</p>
    </div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/films/[...glob].astro");

const $$file$1 = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/films/[...glob].astro";
const $$url$1 = "/other/kids/films/[...glob]";

const ____glob_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await fetch("https://api.npoint.io/f2948809e44e0dab1ee3").then((response) => response.json());
  return data.pages.map((post) => {
    return {
      params: { glob: post.glob },
      props: { title: post.title, subtitle: post.subtitle, PrimaryColor: post.PrimaryColor, NavTextColor: post.NavTextColor, link: post.link, text: post.text }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.params;
  const { title, subtitle, PrimaryColor, NavTextColor, link, text } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-U4NB3FJJ" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical astro-U4NB3FJJ" style="margin-top: 10%">
    <div class="sixteenNine astro-U4NB3FJJ">
      <iframe${addAttribute(link, "src")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="astro-U4NB3FJJ"></iframe>
  </div>
    <div class="astro-U4NB3FJJ">
      <p class="serif project astro-U4NB3FJJ">${text}</p>
    </div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/tv/[...glob].astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/tv/[...glob].astro";
const $$url = "/other/kids/tv/[...glob]";

const ____glob_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BasicLayout as $, ____glob_$3 as _, $$BasicKidsLayout as a, ____glob_$2 as b, ____glob_$1 as c, ____glob_ as d };
