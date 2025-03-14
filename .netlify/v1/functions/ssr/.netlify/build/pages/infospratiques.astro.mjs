import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
import { $ as $$Bouton } from '../chunks/Bouton_CXaNZvH-.mjs';
export { renderers } from '../renderers.mjs';

const $$Infospratiques = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Infos pratiques", "image": "src/assets/infospratiques.webp", "texte": "Retrouvez ici toutes les informations importantes concernant l\u2019accessibilit\xE9 du festival. Adresse, transports, restauration et contact \xE0 votre disposition. Le cin\xE9ma de Montb\xE9liard transform\xE9 en temple de l\u2019horreur !!" })} ${maybeRenderHead()}<img class="mt-20 mb-20
    w-full
    h-full" src="src/assets/destination.webp" alt="infos pratiques"> <div class="ml-4 mr-4"> <div> <img class="float-right w-1/4" src="src/assets/popcorn.webp" alt="infos pratiques"> <h2 class="mb-5">Adresse</h2> <adress>Le Colisée <br> 8 rue Henri Mouhot <br> 25200 Montbéliard</adress> </div> <div> <h2 class="mb-5 mt-10">Transport</h2> <p>À pied, cinq minutes de la gare</p> <p>En voiture, parking gratuit à proximité</p> <p>En bus, arrêt à 100 mètres</p> </div> <div> <h2 class="mb-5 mt-10">Restauration</h2> <p>Restauration sur place</p> <p>Bar à cocktails</p> <p>Foodtruck</p> <p>Collaboration avec le restaurant le Colisée</p> </div> <div> <h2 class="mb-5 mt-10">Hébergement</h2> <p>Greet Hotel Montbéliard</p> <p>Gîtesle Charle Montbéliard</p> </div> <div> <h2 class="mb-5 mt-10">Prix</h2> <p>Pass 1 jour : 15€</p> <p>Pass 2 jour : 28€</p> <p>Pass 3 jour : 40€</p> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Contact", "url": "Contact" })} </div> </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Infospratiques.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Infospratiques.astro";
const $$url = "/Infospratiques";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Infospratiques,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
