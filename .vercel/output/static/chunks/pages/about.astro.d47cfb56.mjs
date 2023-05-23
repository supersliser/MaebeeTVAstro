import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.bfb7bb32.mjs';
import 'html-escaper';
import { $ as $$BasicLayout, a as $$BasicKidsLayout } from './_...glob_.astro.79f86b50.mjs';
/* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro$1 = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$About$1;
  Astro2.props;
  const title = "About Us";
  const subtitle = "About Us";
  const PrimaryColor = "#ff9dd0";
  const NavTextColor = "#000000";
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical main marginTop">
		<div class="horizontal">
			<div style="double">
				<img src="https://cdn.discordapp.com/attachments/903265431396179978/1105072893894860810/Camera.jpg" alt="A film camera" width="500" height="400">
			</div>
			<div class="vertical seventyFive marginTop">
				<p class="serif">
					MaebeeTV is a non-profit LGBT-centered cinema production
					organization founded in 2021 that strives to teach lessons
					to young and old individuals. It allows everyday people to
					make their own experiences into movies or short films. We
					are a close-knit group of people who want to change the
					world one story at a time. Every story we create the more
					misinformation is corrected and awareness is spread.
				</p>
			</div>
		</div>
		<div class="marginTop2"></div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/about.astro");

const $$file$1 = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/about.astro";
const $$url$1 = "/about";

const about$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const title = "Home";
  const subtitle = "Changing the world, one story at a time";
  const PrimaryColor = "#fffb0d";
  const NavTextColor = "#000000";
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicKidsLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-N34TNGEL" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical main marginTop astro-N34TNGEL">
		<div class="horizontal astro-N34TNGEL">
			<div class="double astro-N34TNGEL">
				<img src="https://media.discordapp.net/attachments/903265431396179978/977713498090008606/MaebeeTV-logos.jpeg" alt="The MaebeeTV logo." width="400px" height="400px" class="astro-N34TNGEL">
			</div>
			<div class="vertical double astro-N34TNGEL">
				<p class="handwriting astro-N34TNGEL">
					Welcome to the incredible world of MaebeeTV! We're a super-duper group of friends who started this amazing movie club in 2021. Our goal is to teach important lessons to everyone, no matter how big or small they are. We think that everyone's unique experiences can become magical movies or awesome short films. We're like a big, happy family, and we want to make the world a better place, one story at a time. Each story we create helps us fix any misunderstandings and spread lots of kindness and joy. So, let's have a blast and make the world brighter together!
				</p>
			</div>
		</div>
		<div class="marginTop astro-N34TNGEL"></div>
		<div class="marginTop astro-N34TNGEL"></div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/about.astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/about.astro";
const $$url = "/other/kids/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { about$1 as a, about as b };
