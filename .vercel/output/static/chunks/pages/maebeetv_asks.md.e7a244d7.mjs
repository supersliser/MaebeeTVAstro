import { h as createVNode, s as spreadAttributes, F as Fragment } from '../astro.a141932b.mjs';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("");

				const frontmatter = {"title":"MaebeeTV Asks","subtitle":"MaebeeTV Asks","PrimaryColor":"#fc735b","NavTextColor":"#ffffff","link":"https://www.youtube.com/embed/r_fWFDubP_Q","text":"MaebeeTV Asks is a webseries with nine episodes that educates people about society and dispels common misunderstandings regarding the LGBT community."};
				const file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/projects/maebeetv_asks.md";
				const url = "/projects/maebeetv_asks";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
