/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Curso especializado en el desarrollo de aplicaciones utilizando .NET 7, abordando buenas prácticas, optimización de rendimiento y patrones de diseño modernos para aplicaciones escalables y seguras.</p>";

				const frontmatter = {"title":"Curso .NET 7","org":"Imagina","tags":["Desarrollo Web",".NET 7","Programación","Backend"],"url":"https://imaginaformacion.com/cursos/curso-net","company":"Imagina Formación","date":2024};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/curso_net_7.md";
				const url = "/certificates/curso_net_7";
				function rawContent() {
					return "   \n                   \n            \n                                                     \n                                                  \n                          \n          \n   \n\nCurso especializado en el desarrollo de aplicaciones utilizando .NET 7, abordando buenas prácticas, optimización de rendimiento y patrones de diseño modernos para aplicaciones escalables y seguras.\n";
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
