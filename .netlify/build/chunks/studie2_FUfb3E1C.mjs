/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Técnico Superior en Desarrollo de Aplicaciones Web","location":"Centro de Estudios Stucom-Linkia FP","url":"https://www.linkiafp.es/","institute":"Centro de Estudios Stucom-Linkia FP","date":2021,"tags":["Desarrollo Web","JavaScript","C#","HTML5","CSS3","Backend","Frontend","Bases de Datos","Java","PHP","XML","Sistemas Informáticos","Entornos de Desarrollo","Diseño de Interfaces"]};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
				function rawContent() {
					return "   \n                                                         \n                                             \n                             \n                                              \n          \n     \n   \n                     \n                 \n         \n            \n           \n              \n               \n                     \n           \n          \n          \n                            \n                             \n                           \n   \n   ";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
