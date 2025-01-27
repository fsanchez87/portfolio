/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Formación intensiva en el desarrollo frontend utilizando React, Hooks, Redux y componentes reutilizables para la creación de interfaces de usuario dinámicas y eficientes.</p>";

				const frontmatter = {"title":"Bootcamp Frontend React","org":"GeeksHubs Academy","tags":["Frontend","React","JavaScript","UI/UX"],"url":"https://geekshubsacademy.com/producto/frontend-react/","company":"Geekshubs Academy","date":2021};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/frontend_react.md";
				const url = "/certificates/frontend_react";
				function rawContent() {
					return "   \n                              \n                      \n                                          \n                                                          \n                          \n          \n   \n\nFormación intensiva en el desarrollo frontend utilizando React, Hooks, Redux y componentes reutilizables para la creación de interfaces de usuario dinámicas y eficientes.\n";
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
