/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Curso de especialización en el desarrollo de aplicaciones web con ASP.NET MVC 5, incluyendo patrones de arquitectura, integración con bases de datos y optimización del rendimiento en aplicaciones web.</p>";

				const frontmatter = {"title":"Desarrollo Web con ASP.NET MVC 5","org":"CampusMVP","tags":["Desarrollo Web","ASP.NET MVC","C#","Backend"],"url":"https://www.campusmvp.es/catalogo/Product-Desarrollo-Web-con-ASP.NET-MVC-5_92.aspx","company":"Campus MVP","date":2023};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/asp_net_mvc.md";
				const url = "/certificates/asp_net_mvc";
				function rawContent() {
					return "   \n                                       \n              \n                                                \n                                                                                       \n                   \n          \n   \n\nCurso de especialización en el desarrollo de aplicaciones web con ASP.NET MVC 5, incluyendo patrones de arquitectura, integración con bases de datos y optimización del rendimiento en aplicaciones web.\n";
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
