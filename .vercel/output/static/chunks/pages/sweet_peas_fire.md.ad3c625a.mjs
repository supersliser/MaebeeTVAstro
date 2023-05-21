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

				const frontmatter = {"title":"Sweet Pea's Fire","subtitle":"Sweet Pea's Fire","PrimaryColor":"#0084ff","NavTextColor":"#ffffff","link":"https://www.youtube.com/embed/HK_BAvuWsNA","text":{"text1":"Sweet Pea's Fire is a story of a creature who had no family or friends to talk to. Sweet Pea tells a fire spirit all about her life after an encounter with one, until she learns she failed to keep the fire going. In which the fire spirit perishes and Sweet Pea realizes what she's done wrong.","text2":"Sweet Pea's Fire is a fantastic illustration of the neglection cycle. Sweet Pea was neglected by her family in this narrative, and in order to avoid being neglected herself, she neglected others."}};
				const file = "M:/maebeetv stuff/MaebeeTVAstro/src/pages/films/sweet_peas_fire.md";
				const url = "/films/sweet_peas_fire";
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
