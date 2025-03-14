import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
import { a as allActivites } from '../chunks/backend_Dzj0FaO0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activites = await allActivites();
  console.log(activites);
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Activit\xE9s", "image": "/src/assets/activites.webp", "texte": "Vous trouverez ici l\u2019ensemble des activit\xE9s propos\xE9s sur les 3 nuits du festival Festiv\u2019Halloween. Petits et grands venez passez un bon moment de partage et d\u2019horreur." })} ${maybeRenderHead()}<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs"> ${activites.map((activite) => renderTemplate`<div class="p-4 m-4 bg-white flex flex-col rounded-xl shadow-lg"> <ul> <li> <img${addAttribute(activite.imgUrl, "src")}${addAttribute(`Affiche du film ${activite.nom}`, "alt")} class="w-full h-auto mb-3 rounded-xl"> </li> <li class="text-center mb-2 text-black">${activite.nom}</li> <li class="text-center mb-2 text-black"> ${activite.type_activite} </li> </ul> <a${addAttribute(`/activites/${activite.id}`, "href")} class="block text-center text-white rounded-xl bg-red-900 p-2 mt-2 w-full">
Découvrir l'activité
</a> </div>`)} </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/activites/index.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/activites/index.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
