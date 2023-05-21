import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.a141932b.mjs';
import 'html-escaper';
import { $ as $$BasicLayout } from './_title_.astro.9c962a03.mjs';
/* empty css                             *//* empty css                           *//* empty css                             */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  Astro2.props;
  const title = "About Us";
  const subtitle = "About Us";
  const PrimaryColor = "#ff9dd0";
  const NavTextColor = "#000000";
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "subtitle": subtitle, "PrimaryColor": PrimaryColor, "NavTextColor": NavTextColor }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="vertical main marginTop">
		<div class="horizontal">
			<div style="double">
				<img src="../images/Camera.jpg" alt="A film camera" width="500" height="400">
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

const $$file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
