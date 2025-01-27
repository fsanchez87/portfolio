/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p>Soy un <strong>desarrollador Full Stack</strong> con experiencia en el desarrollo de aplicaciones web utilizando <strong>.NET, Angular y SQL</strong>. Actualmente trabajo en <strong>Afi STA - LKS NEXT</strong>, donde creo soluciones escalables y optimizadas, aplicando buenas prácticas de arquitectura, principios SOLID y metodologías ágiles. Me especializo en el diseño de <strong>interfaces dinámicas, APIs RESTful y bases de datos eficientes</strong>, garantizando rendimiento y seguridad.<br>\n<br><br>\nAntes de enfocarme en el desarrollo, trabajé durante <strong>ocho años como administrador de sistemas</strong>, gestionando infraestructuras en <strong>Windows Server, Active Directory, Azure, VMware y AWS</strong>. Esta experiencia me ha dado una visión integral de la tecnología, permitiéndome desarrollar software con un enfoque en rendimiento, estabilidad y buenas prácticas de despliegue. Cuento con un <strong>Máster en Full Stack Developer</strong> y formación en <strong>Desarrollo de Aplicaciones Web</strong>, siempre buscando mejorar y enfrentar nuevos desafíos en el mundo del desarrollo web.</p>";

				const frontmatter = {"title":"Sobre mí","name":"Francisco Sánchez","designation":"Desarrollador Web","location":"Barcelona, ES 08980","website":"http://tafutza.hn/kos"};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "   \n               \n                         \n                                \n                             \n                                \n   \n\nSoy un **desarrollador Full Stack** con experiencia en el desarrollo de aplicaciones web utilizando **.NET, Angular y SQL**. Actualmente trabajo en **Afi STA - LKS NEXT**, donde creo soluciones escalables y optimizadas, aplicando buenas prácticas de arquitectura, principios SOLID y metodologías ágiles. Me especializo en el diseño de **interfaces dinámicas, APIs RESTful y bases de datos eficientes**, garantizando rendimiento y seguridad.  \n<br>  \nAntes de enfocarme en el desarrollo, trabajé durante **ocho años como administrador de sistemas**, gestionando infraestructuras en **Windows Server, Active Directory, Azure, VMware y AWS**. Esta experiencia me ha dado una visión integral de la tecnología, permitiéndome desarrollar software con un enfoque en rendimiento, estabilidad y buenas prácticas de despliegue. Cuento con un **Máster en Full Stack Developer** y formación en **Desarrollo de Aplicaciones Web**, siempre buscando mejorar y enfrentar nuevos desafíos en el mundo del desarrollo web.\n";
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

export { _page as _, compiledContent as c, frontmatter as f };
