/* empty css                         */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Bp-QbenT.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<ul>\n<li>Mantenimiento y gestión de software y hardware de equipos Endpoint</li>\n<li>Atención a usuarios y resolución de incidencias</li>\n<li>Administración de servidores Windows Server y Linux</li>\n<li>Gestión y mantenimiento de <strong>Active Directory</strong>, creación y gestión de usuarios, permisos y políticas de grupo (<strong>GPOs</strong>)</li>\n<li>Administración de <strong>Azure AD</strong>, gestión de identidades y control de acceso</li>\n<li>Implementación y mantenimiento de soluciones de virtualización en <strong>VMware, Azure y AWS</strong></li>\n<li>Configuración y administración de sistemas de Backup, Firewalls y seguridad perimetral</li>\n<li>Administración y mantenimiento de infraestructuras de servidores y CPD</li>\n<li>Gestión de sistemas de correo electrónico con <strong>Google Workspace</strong></li>\n<li>Configuración y mantenimiento de soluciones de <strong>telefonía IP (Mitel)</strong></li>\n<li>Administración de herramientas de colaboración y videoconferencia</li>\n<li>Implementación de medidas de <strong>seguridad informática</strong> y cumplimiento de normativas de IT</li>\n</ul>";

				const frontmatter = {"title":"Administrador de Sistemas","date":"08/2014 - 10/2022","url":"https://www.afi.es/","location":"Madrid, España","org":"Analistas Financieros Internacionales","tags":["Administración de Sistemas","Servidores","Windows Server","Active Directory","Azure","GPOs","Backup","Firewalls","Virtualización","VMware","AWS","Soporte Técnico","Seguridad Informática","Google Workspace","Telefonía IP","Mitel"]};
				const file = "/Users/fsanchez/Code/portfolio/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "   \n                                \n                       \n                        \n                        \n                                          \n      \n   \n                                 \n                 \n                     \n                       \n            \n           \n             \n                \n                     \n             \n          \n                      \n                            \n                       \n                   \n           \n   \n   \n\n- Mantenimiento y gestión de software y hardware de equipos Endpoint  \n- Atención a usuarios y resolución de incidencias  \n- Administración de servidores Windows Server y Linux  \n- Gestión y mantenimiento de **Active Directory**, creación y gestión de usuarios, permisos y políticas de grupo (**GPOs**)  \n- Administración de **Azure AD**, gestión de identidades y control de acceso  \n- Implementación y mantenimiento de soluciones de virtualización en **VMware, Azure y AWS**  \n- Configuración y administración de sistemas de Backup, Firewalls y seguridad perimetral  \n- Administración y mantenimiento de infraestructuras de servidores y CPD  \n- Gestión de sistemas de correo electrónico con **Google Workspace**  \n- Configuración y mantenimiento de soluciones de **telefonía IP (Mitel)**  \n- Administración de herramientas de colaboración y videoconferencia  \n- Implementación de medidas de **seguridad informática** y cumplimiento de normativas de IT  \n";
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
