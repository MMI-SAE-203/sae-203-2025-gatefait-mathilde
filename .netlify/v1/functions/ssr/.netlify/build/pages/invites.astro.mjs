import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
import { e as allInvitesByAgentName } from '../chunks/backend_Dzj0FaO0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await allInvitesByAgentName();
  console.log(invites);
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Invit\xE9s", "image": "/src/assets/invites.webp", "texte": "Venez rencontrer ces passionn\xE9s qui partagent leurs exp\xE9riences, anecdotes et secrets de tournage \xE0 travers des conf\xE9rences, des ateliers, et des s\xE9ances de d\xE9dicaces." })} ${maybeRenderHead()}<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs"> ${invites.map((invite) => renderTemplate`<div class="p-4 m-4 bg-white flex flex-col rounded-xl shadow-lg"> <ul> <li> <img${addAttribute(invite.imgUrl, "src")}${addAttribute(`Affiche du film ${invite.nom}`, "alt")} class="w-full h-auto mb-3 rounded-xl"> </li> <li class="text-center text-black">${invite.nom}</li> <li class="text-center text-black">${invite.prenom}</li> <li class="text-center text-black">${invite.role}</li> </ul> <a${addAttribute(`/invites/${invite.id}`, "href")} class="block text-center text-white rounded-xl bg-red-900 p-2 mt-2 w-full">
Découvrir l'invité
</a> </div>`)} </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/invites/index.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
