import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../../chunks/Intro_r_FbaivT.mjs';
import { O as OneIDAct } from '../../chunks/backend_Dzj0FaO0.mjs';
import { $ as $$Bouton } from '../../chunks/Bouton_CXaNZvH-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const activite = await OneIDAct(id);
  console.log(activite);
  if (!activite) {
    return Astro2.redirect("/activites");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Activit\xE9 d\xE9taill\xE9e", "image": "/src/assets/activites.webp", "texte": "Ici nous allons nous int\xE9resser plus en d\xE9tail \xE0 cette activit\xE9." })} ${maybeRenderHead()}<div class="flex justify-center mt-7 lg:mt-10"> <div class="max-w-4xl mx-4 p-6 bg-white rounded-2xl shadow-lg lg:p-10"> <h2 class="text-3xl font-bold text-center text-gray-900"> ${activite.nom} </h2> <div class="lg:grid lg:grid-cols-2 lg:gap-6 mt-6"> <div class="flex justify-center"> <img${addAttribute(activite.imageUrl, "src")}${addAttribute(`Image de l'activit\xE9 ${activite.nom}`, "alt")} class="rounded-xl shadow-md w-full max-w-md object-cover"> </div> <ul class="mt-6 space-y-3 text-gray-700 lg:mt-0"> <li> <span class="font-semibold">Date :</span> ${activite.date_et_heure} </li> <li> <span class="font-semibold">Type d'activité :</span> ${activite.type_activite} </li> <li><span class="font-semibold">Lieu :</span> ${activite.lieu}</li> <li> <span class="font-semibold">Description :</span> <p class="mt-2 text-justify">${activite.description}</p> </li> <li> <span class="font-semibold">Invité :</span> ${activite.expand?.invites.nom + " " + activite.expand?.invites.prenom} </li> </ul> </div> </div> </div> <div class="flex justify-center mt-6"> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Activit\xE9s", "url": "/activites" })} </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/activites/[id].astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/activites/[id].astro";
const $$url = "/activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
