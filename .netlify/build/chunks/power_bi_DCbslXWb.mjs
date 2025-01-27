/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Curso oficial de Microsoft centrado en el análisis de datos con Power BI, modelado de datos, creación de dashboards interactivos y optimización de informes para la toma de decisiones empresariales.</p>";

				const frontmatter = {"title":"Microsoft Power BI Data Analyst PL-300","org":"PUE","tags":["Análisis de Datos","Business Intelligence","Power BI","Visualización"],"url":"https://www.pue.es/cursos/microsoft/power-platform/pl-300-power-bi-data-analyst","company":"PUE","date":2022};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/power_bi.md";
				const url = "/certificates/power_bi";
				function rawContent() {
					return "   \n                                             \n        \n                                                                         \n                                                                                    \n            \n          \n   \n\nCurso oficial de Microsoft centrado en el análisis de datos con Power BI, modelado de datos, creación de dashboards interactivos y optimización de informes para la toma de decisiones empresariales.\n";
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
