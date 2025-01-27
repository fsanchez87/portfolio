/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Curso de especialización en seguridad informática, auditoría de sistemas y gestión de riesgos en infraestructuras IT, con énfasis en pruebas de penetración y seguridad ofensiva.</p>";

				const frontmatter = {"title":"Curso de Auditoría de Seguridad Informática","org":"Universidad de Alcalá (UAH)","tags":["Seguridad Informática","Ciberseguridad","Hacking Ético","Protección de Datos"],"url":"https://www.uah.es/","company":"Universidad de Alcalá de Henares","date":2017};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/certificates/auditoria_seguridad.md";
				const url = "/certificates/auditoria_seguridad";
				function rawContent() {
					return "   \n                                                  \n                                \n                                                                                 \n                        \n                                         \n          \n   \n\nCurso de especialización en seguridad informática, auditoría de sistemas y gestión de riesgos en infraestructuras IT, con énfasis en pruebas de penetración y seguridad ofensiva.\n";
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
