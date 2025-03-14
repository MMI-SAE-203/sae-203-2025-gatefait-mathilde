import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../../chunks/Intro_r_FbaivT.mjs';
import { $ as $$Bouton } from '../../chunks/Bouton_CXaNZvH-.mjs';
import { d as OneIDInv } from '../../chunks/backend_Dzj0FaO0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invites = await OneIDInv(id);
  if (!invites) {
    return Astro2.redirect("/invites");
  }
  await OneIDInv(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Fiche invit\xE9", "image": "/src/assets/invites.webp", "texte": "Ici nous allons nous int\xE9resser plus en d\xE9tail \xE0 cet invit\xE9 qui viendra partager sa passion." })} ${maybeRenderHead()}<div class="flex justify-center mt-7 lg:mt-10"> <div class="max-w-4xl mx-4 p-6 bg-white rounded-2xl shadow-lg lg:p-10"> <h2 class="text-3xl font-bold text-center text-gray-900"> ${invites.nom} ${invites.prenom} </h2> <div class="lg:grid lg:grid-cols-2 lg:gap-6 mt-6"> <div class="flex justify-center"> <img${addAttribute(invites.imageUrl, "src")}${addAttribute(`Photo de ${invites.nom} ${invites.prenom}`, "alt")} class="rounded-xl shadow-md w-full max-w-md object-cover"> </div> <ul class="mt-6 space-y-3 text-gray-700 lg:mt-0"> <li><span class="font-semibold">Rôle :</span> ${invites.role}</li> <li><span class="font-semibold">Email :</span> ${invites.email}</li> <li> <span class="font-semibold">Biographie :</span> <p class="mt-2 text-justify">${invites.biographie}</p> </li> </ul> </div> </div> </div> <div class="flex justify-center mt-6"> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Invit\xE9s", "url": "/invites" })} </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/invites/[id].astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
