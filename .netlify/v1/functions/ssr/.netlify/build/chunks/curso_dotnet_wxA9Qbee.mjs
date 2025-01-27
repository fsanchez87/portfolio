/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Formación especializada en el desarrollo de aplicaciones con .NET, abordando fundamentos de C#, acceso a bases de datos con Entity Framework y desarrollo de APIs RESTful.</p>";

				const frontmatter = {"title":"Curso de Programación en .NET","org":"Servicio Público de Empleo Estatal","tags":["Desarrollo Web",".NET","C#","Backend"],"url":"https://www.sepe.es/","company":"SEPE","date":2020};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/curso_dotnet.md";
				const url = "/certificates/curso_dotnet";
				function rawContent() {
					return "   \n                                    \n                                       \n                                         \n                         \n             \n          \n   \n\nFormación especializada en el desarrollo de aplicaciones con .NET, abordando fundamentos de C#, acceso a bases de datos con Entity Framework y desarrollo de APIs RESTful.\n";
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
