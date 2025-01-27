import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_b_nU1KoR.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/about.astro.mjs');
const _page2 = () => import('./pages/certificates/angular.astro.mjs');
const _page3 = () => import('./pages/certificates/asp_net_mvc.astro.mjs');
const _page4 = () => import('./pages/certificates/auditoria_seguridad.astro.mjs');
const _page5 = () => import('./pages/certificates/curso_dotnet.astro.mjs');
const _page6 = () => import('./pages/certificates/curso_net_7.astro.mjs');
const _page7 = () => import('./pages/certificates/frontend_react.astro.mjs');
const _page8 = () => import('./pages/certificates/power_bi.astro.mjs');
const _page9 = () => import('./pages/contact/email.astro.mjs');
const _page10 = () => import('./pages/contact/linkedin.astro.mjs');
const _page11 = () => import('./pages/projects/spotfilm.astro.mjs');
const _page12 = () => import('./pages/studies/studie1.astro.mjs');
const _page13 = () => import('./pages/studies/studie2.astro.mjs');
const _page14 = () => import('./pages/studies/studie3.astro.mjs');
const _page15 = () => import('./pages/works/work1.astro.mjs');
const _page16 = () => import('./pages/works/work2.astro.mjs');
const _page17 = () => import('./pages/works/work3.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/about.md", _page1],
    ["src/pages/certificates/angular.md", _page2],
    ["src/pages/certificates/asp_net_mvc.md", _page3],
    ["src/pages/certificates/auditoria_seguridad.md", _page4],
    ["src/pages/certificates/curso_dotnet.md", _page5],
    ["src/pages/certificates/curso_net_7.md", _page6],
    ["src/pages/certificates/frontend_react.md", _page7],
    ["src/pages/certificates/power_bi.md", _page8],
    ["src/pages/contact/email.md", _page9],
    ["src/pages/contact/linkedin.md", _page10],
    ["src/pages/projects/spotfilm.md", _page11],
    ["src/pages/studies/studie1.md", _page12],
    ["src/pages/studies/studie2.md", _page13],
    ["src/pages/studies/studie3.md", _page14],
    ["src/pages/works/work1.md", _page15],
    ["src/pages/works/work2.md", _page16],
    ["src/pages/works/work3.md", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "388c0477-730d-4c19-a878-f4bdea15f7c0"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
