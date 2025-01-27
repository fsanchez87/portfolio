/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<ul>\n<li>Soporte administrativo en la gestión de documentos</li>\n<li>Atención a clientes y proveedores</li>\n<li>Organización y control de facturación</li>\n</ul>";

				const frontmatter = {"title":"Administrativo","date":"08/2009 - 01/2014","url":"https://www.sportstreet.es/grupo/","location":"Madrid, España","org":"Sport Street, S.L.","tags":["Gestión Administrativa","Atención al Cliente","Gestión Documental"]};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "   \n                     \n                       \n                                        \n                        \n                       \n                                                                             \n   \n\n- Soporte administrativo en la gestión de documentos  \n- Atención a clientes y proveedores  \n- Organización y control de facturación  \n";
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
