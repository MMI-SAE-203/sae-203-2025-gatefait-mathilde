import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
import { $ as $$Bouton } from '../chunks/Bouton_CXaNZvH-.mjs';
export { renderers } from '../renderers.mjs';

const $$Programmation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Programmation", "image": "src/assets/programme.webp", "texte": "Le programme se d\xE9roulera sur 3 nuits du 29 au 31 octobre 2024. Les soir\xE9es seront divis\xE9es en plusieurs parties avec de nombreuses activit\xE9s. Petits et grands, venez au cin\xE9ma de Montb\xE9liard, sauf si vous \xEAtes des trouillards !!" })} ${maybeRenderHead()}<div class="ml-4 mr-4"> <div> <div class="flex items-center"> <h2 class="mb-14 mt-15 mr-4">Nuit du 29</h2> <div class="w-full h-1 bg-white"></div> </div> <div class="relative"> <div class="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory md:scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pb-4 lg:justify-center"> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>enfant</p> <p>17h - 19h</p> <p>Hotel transylvanie/Casper</p> <p>salle 4</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Tout public</p> <p>19h - 20h</p> <p>Loup garou géant</p> <p>Hall du cinéma</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Tout public</p> <p>20h - 21h</p> <p>Projection court-métrage</p> <p>Salle 2</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>+ 16 ans</p> <p>21h - 4h</p> <p>Shining/ Les cartes du mal/ Time cut</p> <p>Salle 6</p> </div> </div> </div> </div> <div> <div class="flex items-center"> <h2 class="mb-14 mt-15 mr-4">Nuit du 30</h2> <div class="w-full h-1 bg-white"></div> </div> <div class="relative"> <div class="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 lg:justify-center"> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Enfants</p> <p>17h - 19h</p> <p>Coraline, La famille addams</p> <p>Salle 4</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Tout public</p> <p>19h - 20h</p> <p>Sculture citrouille</p> <p>Salle 10</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Tout public</p> <p>20h - 21h</p> <p>Exposition</p> <p>Salle 2</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>+ 16 ans</p> <p>21h - 4h</p> <p>Scream/ Sans un bruit/La dame blanche/Conjuring</p> <p>Salle 6</p> </div> </div> </div> </div> <div> <div class="flex items-center"> <h2 class="mb-14 mt-15 mr-4">Nuit du 31</h2> <div class="w-full h-1 bg-white"></div> </div> <div class="relative"> <div class="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 lg:justify-center"> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Enfants</p> <p>17h - 19h</p> <p>Récolte de bonbons</p> <p>Ville</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Tout public</p> <p>19h - 20h</p> <p>Concours déguisement</p> <p>Salle 10</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>Tout public</p> <p>20h - 21h</p> <p>Projection court-métrage</p> <p>Salle 2</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>+ 16 ans</p> <p>21h - 4h</p> <p>L’appart 7A/ Don’t move/Ça</p> <p>Salle 2</p> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Filmographie", "url": "films" })} ${renderComponent($$result2, "Button", $$Bouton, { "text": "Activit\xE9s", "url": "activites" })} ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Programmation.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Programmation.astro";
const $$url = "/Programmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Programmation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
