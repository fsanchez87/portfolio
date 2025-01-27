/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Técnico Superior en Administración de Sistemas Informáticos en Red","location":"Centro de Estudios Sant Francesc-Linkia FP","url":"https://www.linkiafp.es/","institute":"Centro de Estudios Sant Francesc-Linkia FP","date":2017,"tags":["Administración de Sistemas","Redes","Seguridad Informática","Virtualización","Bases de Datos","Sistemas Operativos","Servicios de Red","Alta Disponibilidad"]};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/studies/studie3.md";
				const url = "/studies/studie3";
				function rawContent() {
					return "   \n                                                                         \n                                                    \n                             \n                                                     \n          \n     \n   \n                                 \n            \n                            \n                     \n                     \n                          \n                       \n                          \n   \n   ";
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
