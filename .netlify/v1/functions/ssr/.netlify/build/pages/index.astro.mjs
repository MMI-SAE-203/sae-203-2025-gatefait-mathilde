import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Bouton } from '../chunks/Bouton_CXaNZvH-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <img class="w-full h-96 object-cover" src="src/assets/accueil.webp" alt="accueil"> <div class="ml-4 mr-4"> <div class="-mt-80 text-center lg:-mt-60"> <h1>Festiv' Halloween</h1> <h3>29 - 31 octobre 2025</h3> </div> <p class="mt-30 font-bold lg:mt-40">
Le festiv’halloween est un festival de cinéma axé sur l’horreur. Pour
        passer un agréable moment de peur et de terreur, passez 3 nuits avec
        nous pour un marathon de films jusqu’au bout de la nuit. En harmonie
        avec la période d’halloween, ce dernier se déroulera pendant les nuits
        du 29, 30 et 31 octobre 2024.
</p> <nav class="mt-15 mb-20"> <h2 class="mb-9">Apperçus programme</h2> <div class="relative"> <div class="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 lg:justify-center"> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>29/10</p> <p>17h - 19h</p> <p>Récolte de bonbons</p> <p>Ville</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>30/10</p> <p>19h - 20h</p> <p>Loup-garou géant</p> <p>Salle 10</p> </div> <div class="bg-white rounded-xl text-black p-4 text-center min-w-[200px] snap-center"> <p>31/10</p> <p>20h - 21h</p> <p>Projection court-métrage</p> <p>Salle 2</p> </div> </div> </div> <div class="text-right underline mt-5"> <a href="../Programmation">voir la programmation complète</a> </div> </nav> </div> <nav class="ml-4 mr-4"> <h2 class="mb-5">Quelques invités</h2> <div class="flex flex-col gap-6 lg:flex-row lg:justify-center"> <div class="bg-white text-black rounded-4xl p-6"> <div class="flex flex-col items-center"> <img src="src/assets/invite1.webp" alt="invite1" class="rounded-4xl w-60 h-auto"> <p class="text-center mt-5">
Acteur film “Ça” <br> Bill Skarsgård
</p> </div> </div> <div class="bg-white text-black rounded-4xl p-6"> <div class="flex flex-col items-center"> <img src="src/assets/invite2.webp" alt="invite2" class="rounded-4xl w-60 h-auto"> <p class="text-center mt-5">
Dessinateur Coraline <br>Tadahiro Uesugi
</p> </div> </div> </div> </nav> <a class="block text-right underline mt-15 mr-4" href="invites">voir tous les invités</a> </div> <div class="mt-15 mb-15"> <h2 class="mb-5 mr-4 ml-4">Apperçus</h2> <img class="w-full h-full" src="src/assets/destination.webp" alt="carte"> <address class="mb-5 text-center mr-4 ml-4 mt-5">
Le Colisée 8 Rue Henri Mouhot <br> 25200 Montbéliard
</address> <a class="block text-right underline mr-4 mt-10" href="Infospratiques">voir les infos pratiques</a> </div> <div> <img class="-mb-20 ml-35" src="src/assets/clown.webp" alt="clown"> <div class="ml-5"> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Billeterie", "url": "https://billetterie.lemoloco.com/" })} </div> </div> <div class="flex justify-center gap-4"> <img src="/src/assets/logomontbeliard.svg" alt="Logo Montbéliard"> <img src="/src/assets/logonfc.svg" alt="Logo NFC"> <img src="/src/assets/logopassculture.svg" alt="Logo Pass Culture"> </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/index.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
