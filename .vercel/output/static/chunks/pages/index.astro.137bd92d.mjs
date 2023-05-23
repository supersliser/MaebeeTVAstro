import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.bfb7bb32.mjs';
import 'html-escaper';
import { $ as $$BasicLayout, a as $$BasicKidsLayout } from './_...glob_.astro.79f86b50.mjs';
/* empty css                               *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const title = "Home";
  const subtitle = "Changing the world, one story at a time";
  const PrimaryColor = "#ff9dd0";
  const NavTextColor = "#000000";
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical main marginTop astro-J7PV25F6">
		<div class="horizontal astro-J7PV25F6">
			<div class="double astro-J7PV25F6">
				<img src="https://media.discordapp.net/attachments/903265431396179978/977713498090008606/MaebeeTV-logos.jpeg" alt="The MaebeeTV logo." width="400px" height="400px" class="astro-J7PV25F6">
			</div>
			<div class="vertical double astro-J7PV25F6">
				<h1 class="serif astro-J7PV25F6">Welcome to MaebeeTV!</h1>
				<p class="serif astro-J7PV25F6">
					We are a movie production company that strives to change the
					way stories are told.</p><p class="astro-J7PV25F6"></p>
				
			</div>
		</div>
		<div class="vertical marginTop2 astro-J7PV25F6">
			<h1 class="serif astro-J7PV25F6">Want to join our team?</h1>
			<p class="serif astro-J7PV25F6">
				Our company is commited to providing safe and friendly
				environments that can ensure the highest quality productions are
				created. Our films are made as a single team, with smaller
				groups assigned based on your own unique talents and quirks.
				Each team is given important tasks with flexible deadlines, all
				in the spirit of raising awareness and encouraging others to
				share their stories.
			</p>
			<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdaBYNVmnUodH3BqEIymy7LIrWOhiGqPkH2OF0i-wPWj-YkQA/viewform?embedded=true" class="astro-J7PV25F6">
				Loading Google Form...
			</iframe>
		</div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/index.astro");

const $$file$1 = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Home";
  const subtitle = "Changing the world, one story at a time";
  const PrimaryColor = "#fffb0d";
  const NavTextColor = "#000000";
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicKidsLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor, "class": "astro-7ORWTOUU" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical main marginTop astro-7ORWTOUU">
		<div class="horizontal astro-7ORWTOUU">
			<div class="double astro-7ORWTOUU">
				<img src="https://cdn.discordapp.com/attachments/903258487872700520/1110100037825990746/MaebeeTVKids.png" alt="The MaebeeTV logo." width="400px" height="400px" class="astro-7ORWTOUU">
			</div>
			<div class="vertical double astro-7ORWTOUU">
				<h1 class="sans astro-7ORWTOUU">Welcome to MaebeeTVKids!!!</h1>
				<p class="sans astro-7ORWTOUU">
					We're a magical movie-making crew that loves to make stories come to life in the most amazing and fun ways ever!
				</p>
			</div>
		</div>
		<div class="marginTop astro-7ORWTOUU"></div>
		<div class="marginTop astro-7ORWTOUU"></div>
	</div>
` })}`;
}, "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/index.astro");

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/other/kids/index.astro";
const $$url = "/other/kids";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
