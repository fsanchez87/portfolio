import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_Bp-QbenT.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/fsanchez/Code/portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/about/about","isIndex":false,"type":"page","pattern":"^\\/about\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/about.md","pathname":"/about/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/angular","isIndex":false,"type":"page","pattern":"^\\/certificates\\/angular\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"angular","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/angular.md","pathname":"/certificates/angular","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/asp_net_mvc","isIndex":false,"type":"page","pattern":"^\\/certificates\\/asp_net_mvc\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"asp_net_mvc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/asp_net_mvc.md","pathname":"/certificates/asp_net_mvc","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/auditoria_seguridad","isIndex":false,"type":"page","pattern":"^\\/certificates\\/auditoria_seguridad\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"auditoria_seguridad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/auditoria_seguridad.md","pathname":"/certificates/auditoria_seguridad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/curso_dotnet","isIndex":false,"type":"page","pattern":"^\\/certificates\\/curso_dotnet\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"curso_dotnet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/curso_dotnet.md","pathname":"/certificates/curso_dotnet","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/curso_net_7","isIndex":false,"type":"page","pattern":"^\\/certificates\\/curso_net_7\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"curso_net_7","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/curso_net_7.md","pathname":"/certificates/curso_net_7","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/frontend_react","isIndex":false,"type":"page","pattern":"^\\/certificates\\/frontend_react\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"frontend_react","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/frontend_react.md","pathname":"/certificates/frontend_react","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/certificates/power_bi","isIndex":false,"type":"page","pattern":"^\\/certificates\\/power_bi\\/?$","segments":[[{"content":"certificates","dynamic":false,"spread":false}],[{"content":"power_bi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/certificates/power_bi.md","pathname":"/certificates/power_bi","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/contact/email","isIndex":false,"type":"page","pattern":"^\\/contact\\/email\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/email.md","pathname":"/contact/email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/contact/linkedin","isIndex":false,"type":"page","pattern":"^\\/contact\\/linkedin\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}],[{"content":"linkedin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/linkedin.md","pathname":"/contact/linkedin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/projects/spotfilm","isIndex":false,"type":"page","pattern":"^\\/projects\\/spotfilm\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"spotfilm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/spotfilm.md","pathname":"/projects/spotfilm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/studies/studie1","isIndex":false,"type":"page","pattern":"^\\/studies\\/studie1\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"studie1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/studie1.md","pathname":"/studies/studie1","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/studies/studie2","isIndex":false,"type":"page","pattern":"^\\/studies\\/studie2\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"studie2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/studie2.md","pathname":"/studies/studie2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/studies/studie3","isIndex":false,"type":"page","pattern":"^\\/studies\\/studie3\\/?$","segments":[[{"content":"studies","dynamic":false,"spread":false}],[{"content":"studie3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/studies/studie3.md","pathname":"/studies/studie3","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/works/work1","isIndex":false,"type":"page","pattern":"^\\/works\\/work1\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work1.md","pathname":"/works/work1","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/works/work2","isIndex":false,"type":"page","pattern":"^\\/works\\/work2\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work2.md","pathname":"/works/work2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/works/work3","isIndex":false,"type":"page","pattern":"^\\/works\\/work3\\/?$","segments":[[{"content":"works","dynamic":false,"spread":false}],[{"content":"work3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/works/work3.md","pathname":"/works/work3","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@media (max-width: 768px){.flex-col[data-astro-cid-3ef6ksr2].justify-end{display:flex;flex-direction:column;justify-content:center;align-items:center}}body{font-family:DM Sans Variable,sans-serif}@media only screen and (max-width: 480px){*{font-size:12px}}.overflow-y-scroll::-webkit-scrollbar{width:3px}.overflow-y-scroll::-webkit-scrollbar-thumb{background-color:oklch(var(--s))}.overflow-y-scroll{scrollbar-width:1px}@media (max-width: 768px){.container{flex-direction:column}}@media (min-width: 768px){.container{display:flex;flex-wrap:wrap}}\n"},{"type":"external","src":"/_astro/about.DdZQBuEh.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/fsanchez/Code/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about/about@_@md":"pages/about/about.astro.mjs","\u0000@astro-page:src/pages/certificates/angular@_@md":"pages/certificates/angular.astro.mjs","\u0000@astro-page:src/pages/certificates/asp_net_mvc@_@md":"pages/certificates/asp_net_mvc.astro.mjs","\u0000@astro-page:src/pages/certificates/auditoria_seguridad@_@md":"pages/certificates/auditoria_seguridad.astro.mjs","\u0000@astro-page:src/pages/certificates/curso_dotnet@_@md":"pages/certificates/curso_dotnet.astro.mjs","\u0000@astro-page:src/pages/certificates/curso_net_7@_@md":"pages/certificates/curso_net_7.astro.mjs","\u0000@astro-page:src/pages/certificates/frontend_react@_@md":"pages/certificates/frontend_react.astro.mjs","\u0000@astro-page:src/pages/certificates/power_bi@_@md":"pages/certificates/power_bi.astro.mjs","\u0000@astro-page:src/pages/contact/email@_@md":"pages/contact/email.astro.mjs","\u0000@astro-page:src/pages/contact/linkedin@_@md":"pages/contact/linkedin.astro.mjs","\u0000@astro-page:src/pages/projects/spotfilm@_@md":"pages/projects/spotfilm.astro.mjs","\u0000@astro-page:src/pages/studies/studie1@_@md":"pages/studies/studie1.astro.mjs","\u0000@astro-page:src/pages/studies/studie2@_@md":"pages/studies/studie2.astro.mjs","\u0000@astro-page:src/pages/studies/studie3@_@md":"pages/studies/studie3.astro.mjs","\u0000@astro-page:src/pages/works/work1@_@md":"pages/works/work1.astro.mjs","\u0000@astro-page:src/pages/works/work2@_@md":"pages/works/work2.astro.mjs","\u0000@astro-page:src/pages/works/work3@_@md":"pages/works/work3.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_b_nU1KoR.mjs","/Users/fsanchez/Code/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_JP4S6L79.mjs","/Users/fsanchez/Code/portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.Cwa51KsK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/fsanchez/Code/portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts","var l={exports:{}},d;function h(){return d||(d=1,function(n,f){function r(){var c=document.querySelector(\"[data-toggle-theme]\"),e=c?c.getAttribute(\"data-key\"):null;(function(t=localStorage.getItem(e||\"theme\")){localStorage.getItem(e||\"theme\")&&(document.documentElement.setAttribute(\"data-theme\",t),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(a=>{a.classList.add(c.getAttribute(\"data-act-class\"))}))})(),c&&[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(t=>{t.addEventListener(\"click\",function(){var a=t.getAttribute(\"data-toggle-theme\");if(a){var o=a.split(\",\");document.documentElement.getAttribute(\"data-theme\")==o[0]?o.length==1?(document.documentElement.removeAttribute(\"data-theme\"),localStorage.removeItem(e||\"theme\")):(document.documentElement.setAttribute(\"data-theme\",o[1]),localStorage.setItem(e||\"theme\",o[1])):(document.documentElement.setAttribute(\"data-theme\",o[0]),localStorage.setItem(e||\"theme\",o[0]))}[...document.querySelectorAll(\"[data-toggle-theme]\")].forEach(i=>{i.classList.toggle(this.getAttribute(\"data-act-class\"))})})})}function m(){var c=document.querySelector(\"[data-set-theme='']\"),e=c?c.getAttribute(\"data-key\"):null;(function(t=localStorage.getItem(e||\"theme\")){if(t!=null&&t!=\"\")if(localStorage.getItem(e||\"theme\")&&localStorage.getItem(e||\"theme\")!=\"\"){document.documentElement.setAttribute(\"data-theme\",t);var a=document.querySelector(\"[data-set-theme='\"+t.toString()+\"']\");a&&([...document.querySelectorAll(\"[data-set-theme]\")].forEach(o=>{o.classList.remove(o.getAttribute(\"data-act-class\"))}),a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\")))}else{var a=document.querySelector(\"[data-set-theme='']\");a.getAttribute(\"data-act-class\")&&a.classList.add(a.getAttribute(\"data-act-class\"))}})(),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(t=>{t.addEventListener(\"click\",function(){document.documentElement.setAttribute(\"data-theme\",this.getAttribute(\"data-set-theme\")),localStorage.setItem(e||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"[data-set-theme]\")].forEach(a=>{a.classList.remove(a.getAttribute(\"data-act-class\"))}),t.getAttribute(\"data-act-class\")&&t.classList.add(t.getAttribute(\"data-act-class\"))})})}function u(){var c=document.querySelector(\"select[data-choose-theme]\"),e=c?c.getAttribute(\"data-key\"):null;(function(t=localStorage.getItem(e||\"theme\")){if(localStorage.getItem(e||\"theme\")){document.documentElement.setAttribute(\"data-theme\",t);var a=document.querySelector(\"select[data-choose-theme] [value='\"+t.toString()+\"']\");a&&[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+t.toString()+\"']\")].forEach(o=>{o.selected=!0})}})(),c&&[...document.querySelectorAll(\"select[data-choose-theme]\")].forEach(t=>{t.addEventListener(\"change\",function(){document.documentElement.setAttribute(\"data-theme\",this.value),localStorage.setItem(e||\"theme\",document.documentElement.getAttribute(\"data-theme\")),[...document.querySelectorAll(\"select[data-choose-theme] [value='\"+localStorage.getItem(e||\"theme\")+\"']\")].forEach(a=>{a.selected=!0})})})}function s(c=!0){c===!0?document.addEventListener(\"DOMContentLoaded\",function(e){r(),u(),m()}):(r(),u(),m())}n.exports={themeChange:s}}(l)),l.exports}var g=h();g.themeChange();"]],"assets":["/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2","/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2","/_astro/about.DdZQBuEh.css","/cv.pdf","/favicon.webp","/profile.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"fdAU1GvgthNdbIhk/j2Y0dE92NCBqVhpStKsrkuYQ5Q="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
