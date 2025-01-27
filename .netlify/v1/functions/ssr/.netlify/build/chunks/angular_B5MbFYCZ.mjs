/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Curso de especialización en Angular, abarcando el desarrollo de Single Page Applications (SPA), optimización del rendimiento y buenas prácticas en la construcción de aplicaciones modulares y escalables.</p>";

				const frontmatter = {"title":"Desarrollo de Aplicaciones Web con Angular","org":"CampusMVP","tags":["Desarrollo Web","Angular","TypeScript","SPA"],"url":"https://www.campusmvp.es/catalogo/Product-Desarrollo-de-aplicaciones-web-con-Angular_232.aspx","company":"Campus MVP","date":2021};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/angular.md";
				const url = "/certificates/angular";
				function rawContent() {
					return "   \n                                                 \n              \n                                                \n                                                                                                  \n                   \n          \n   \n\nCurso de especialización en Angular, abarcando el desarrollo de Single Page Applications (SPA), optimización del rendimiento y buenas prácticas en la construcción de aplicaciones modulares y escalables.\n";
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
