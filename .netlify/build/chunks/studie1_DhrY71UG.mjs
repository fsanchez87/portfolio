/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Máster en Full Stack Developer","location":"Universidad Internacional de La Rioja","url":"https://www.unir.net/ingenieria/master-full-stack-developer/","institute":"Universidad Internacional de La Rioja","date":2022,"tags":["Desarrollo Web","Full Stack","Frontend","Backend","HTML","CSS","SASS","JavaScript","TypeScript","Angular","Bootstrap","Node.js","Express.js","MongoDB","MySQL","TDD","SOLID","CI/CD","Testing"]};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "   \n                                     \n                                               \n                                                                 \n                                                \n          \n     \n   \n                     \n                 \n               \n              \n           \n          \n           \n                 \n                 \n              \n                \n              \n                 \n              \n            \n          \n            \n            \n              \n   \n   ";
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
