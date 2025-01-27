/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<ul>\n<li>Desarrollo de aplicaciones web con <strong>.NET</strong></li>\n<li>Desarrollo de interfaces dinámicas y <strong>SPA con Angular</strong></li>\n<li>Mantenimiento y actualización de aplicaciones</li>\n<li>Maquetación con <strong>HTML5, CSS3 y Bootstrap</strong></li>\n<li>Consumo de <strong>APIs RESTful</strong> y manejo de datos en <strong>Angular</strong></li>\n<li>Gestión y resolución de <strong>incidencias técnicas</strong></li>\n</ul>";

				const frontmatter = {"title":"Analista Programador","date":"10/2022 - Actualidad","url":"https://www.lksnext.com/es/servicios/tecnologia/gobtech/afi-sta/","location":"Madrid, España","org":"Afi STA - LKS NEXT","tags":["Desarrollo Web","Backend",".NET","Frontend","Angular","HTML","CSS","Bootstrap"]};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "   \n                           \n                          \n                                                                     \n                        \n                       \n                                                                                              \n   \n\n- Desarrollo de aplicaciones web con **.NET**  \n- Desarrollo de interfaces dinámicas y **SPA con Angular**  \n- Mantenimiento y actualización de aplicaciones  \n- Maquetación con **HTML5, CSS3 y Bootstrap**  \n- Consumo de **APIs RESTful** y manejo de datos en **Angular**  \n- Gestión y resolución de **incidencias técnicas**  ";
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
