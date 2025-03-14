import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BynSGe3a.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
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
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/","cacheDir":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/node_modules/.astro/","outDir":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/dist/","srcDir":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/","publicDir":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/public/","buildClientDir":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/dist/","buildServerDir":"file:///Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/activites/[id]","isIndex":false,"type":"page","pattern":"^\\/activites\\/([^/]+?)\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/activites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/activites","isIndex":true,"type":"page","pattern":"^\\/activites\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activites/index.astro","pathname":"/activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/apropos","isIndex":false,"type":"page","pattern":"^\\/Apropos\\/?$","segments":[[{"content":"Apropos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Apropos.astro","pathname":"/Apropos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/Contact\\/?$","segments":[[{"content":"Contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Contact.astro","pathname":"/Contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/films/[id]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/films","isIndex":true,"type":"page","pattern":"^\\/films\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/films/index.astro","pathname":"/films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/infospratiques","isIndex":false,"type":"page","pattern":"^\\/Infospratiques\\/?$","segments":[[{"content":"Infospratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Infospratiques.astro","pathname":"/Infospratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/invites/[id]","isIndex":false,"type":"page","pattern":"^\\/invites\\/([^/]+?)\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/invites","isIndex":true,"type":"page","pattern":"^\\/invites\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invites/index.astro","pathname":"/invites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/programmation","isIndex":false,"type":"page","pattern":"^\\/Programmation\\/?$","segments":[[{"content":"Programmation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Programmation.astro","pathname":"/Programmation","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Apropos.D-mBOazM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Apropos.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Contact.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Infospratiques.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Programmation.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/activites/[id].astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/activites/index.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/films/[id].astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/films/index.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/invites/[id].astro",{"propagation":"none","containsHead":true}],["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/invites/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/activites/[id]@_@astro":"pages/activites/_id_.astro.mjs","\u0000@astro-page:src/pages/activites/index@_@astro":"pages/activites.astro.mjs","\u0000@astro-page:src/pages/Apropos@_@astro":"pages/apropos.astro.mjs","\u0000@astro-page:src/pages/Contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/films/[id]@_@astro":"pages/films/_id_.astro.mjs","\u0000@astro-page:src/pages/films/index@_@astro":"pages/films.astro.mjs","\u0000@astro-page:src/pages/Infospratiques@_@astro":"pages/infospratiques.astro.mjs","\u0000@astro-page:src/pages/invites/[id]@_@astro":"pages/invites/_id_.astro.mjs","\u0000@astro-page:src/pages/invites/index@_@astro":"pages/invites.astro.mjs","\u0000@astro-page:src/pages/Programmation@_@astro":"pages/programmation.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ck1qWypN.mjs","/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CavMtMYp.mjs","/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DO4CWw4M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),o=document.querySelector(\"#menu\"),c=document.body;e&&o&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",t=!n;e.ariaExpanded=String(t),o.ariaHidden=String(n),c.classList.toggle(\"noscroll\",t)});"]],"assets":["/_astro/facebook.Xmq_88FU.svg","/_astro/instagram.CbbtXs5b.svg","/_astro/alef-hebrew-700-normal.HbamEiXs.woff2","/_astro/alef-latin-ext-700-normal.D65LlLCe.woff2","/_astro/creepster-latin-400-normal.DnKpM-ys.woff2","/_astro/alef-latin-ext-400-normal.D8uIVS-6.woff2","/_astro/alef-latin-700-normal.BXgplaMv.woff2","/_astro/alef-hebrew-400-normal.B3mXsi-i.woff2","/_astro/alef-latin-400-normal.DXtOzdue.woff2","/_astro/logo.CSh9LIB1.svg","/_astro/alef-hebrew-700-normal.Dk2Vpb5j.woff","/_astro/alef-latin-ext-700-normal.DQVzQD3m.woff","/_astro/creepster-latin-400-normal.DFidaany.woff","/_astro/alef-latin-700-normal.CF2CJXpi.woff","/_astro/alef-latin-ext-400-normal.B4PXvIJB.woff","/_astro/alef-hebrew-400-normal.B7gIhvxs.woff","/_astro/alef-latin-400-normal.BaiVmqus.woff","/_astro/Apropos.D-mBOazM.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"wCXIj7ZWQZeM81ZWI+yOtFzGTrlmD1MKLG6COdCGByo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
