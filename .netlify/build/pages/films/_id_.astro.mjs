import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { b as OneID } from '../../chunks/backend_Dzj0FaO0.mjs';
import { $ as $$Base } from '../../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../../chunks/Intro_r_FbaivT.mjs';
import { $ as $$Bouton } from '../../chunks/Bouton_CXaNZvH-.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await OneID(id);
  console.log(film);
  if (!film) {
    return Astro2.redirect("/films");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "D\xE9tails du film", "image": "/src/assets/films.webp", "texte": "Ici nous allons nous int\xE9resser plus en d\xE9tail \xE0 la mise en avant d\u2019un film." })} ${maybeRenderHead()}<div class="flex justify-center mt-7 lg:mt-10"> <div class="max-w-4xl mx-4 p-6 bg-white rounded-2xl shadow-lg lg:p-10"> <h2 class="text-3xl font-bold text-center text-gray-900">${film.titre}</h2> <div class="lg:grid lg:grid-cols-2 lg:gap-6 mt-6"> <div class="flex justify-center"> <img${addAttribute(film.imageUrl, "src")}${addAttribute(`Affiche du film ${film.titre}`, "alt")} class="rounded-xl shadow-md w-full max-w-md object-cover"> </div> <ul class="mt-6 space-y-3 text-gray-700 lg:mt-0"> <li> <span class="font-semibold">Réalisateur :</span> ${film.realisateur} </li> <li><span class="font-semibold">Casting :</span> ${film.casting}</li> <li> <span class="font-semibold">Date de sortie :</span> ${film.date_sortie} </li> <li><span class="font-semibold">Genre :</span> ${film.genre}</li> <li><span class="font-semibold">Durée :</span> ${film.duree}</li> <li><span class="font-semibold">Langue :</span> ${film.langue}</li> <li> <span class="font-semibold">Production :</span> ${film.production} </li> <li> <span class="font-semibold">Date de projection :</span> ${film.date_projection} </li> <li> <span class="font-semibold">Synopsis :</span> <p class="mt-2 text-justify">${film.synopsis}</p> </li> <li class="mt-4"> <a${addAttribute(film.bande_annonce, "href")} class="text-white bg-red-900 px-4 py-2 rounded-lg hover:bg-red-800 transition">
🎬 Voir la bande annonce
</a> </li> <li> <span class="font-semibold">Invité :</span> ${film.expand?.invites ? film.expand.invites.nom + " " + film.expand.invites.prenom : "Aucun invit\xE9 pour ce film"} </li> </ul> </div> </div> </div> <div class="flex justify-center mt-6"> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Filmographie", "url": "/films" })} </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/films/[id].astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
