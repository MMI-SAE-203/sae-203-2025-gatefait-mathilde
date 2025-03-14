import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base, L as LogoFacebook, a as LogoInstagram } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
import { $ as $$Bouton } from '../chunks/Bouton_CXaNZvH-.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Contact", "image": "src/assets/contact.webp", "texte": "Amateurs et r\xE9alisateurs, inscrivez-vous sur le planning pour que votre film ou court-m\xE9trage soit projet\xE9 lors des s\xE9ances sp\xE9ciales nouveaux r\xE9alisateurs. Mettez en avant votre travail et obtenez une splendide visibilit\xE9. " })} ${maybeRenderHead()}<form action="#" method="POST" class="max-w-lg mx-4 lg:mx-auto bg-white text-black p-6 rounded-2xl shadow-lg mt-10 mb-10"> <h3 class="text-center text-black mb-6">Contactez-nous</h3> <div class="space-y-4"> <div> <label for="name" class="block font-semibold text-gray-700">Nom</label> <input type="text" id="name" name="name" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"> </div> <div> <label for="email" class="block font-semibold text-gray-700">Email</label> <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"> </div> <div> <label for="subject" class="block font-semibold text-gray-700">Sujet</label> <input type="text" id="subject" name="subject" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"> </div> <div> <label for="message" class="block font-semibold text-gray-700">Message</label> <textarea id="message" name="message" rows="4" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"></textarea> </div> </div> ${renderComponent($$result2, "Button", $$Bouton, { "text": "Envoyer" })} </form> <div class="ml-4 mr-4"> <h2 class="mb-6">Contact</h2> <p>Le Colisée</p> <p>8 rue Henri Mouhot</p> <p>25200 Montbéliard</p> <p>lecolise@gmail.com</p> <p>03 81 94 53 89</p> <div class="flex gap-6 mt-6 mb-"> <a href="https://facebook.com" aria-label="facebook"> ${renderComponent($$result2, "LogoFacebook", LogoFacebook, {})}</a> <a href="https://instagram.com" aria-label="instagram"> ${renderComponent($$result2, "LogoInstagram", LogoInstagram, {})}</a> </div> </div> <img src="src/assets/fantomes.webp" alt="Fantomes"> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Contact.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Contact.astro";
const $$url = "/Contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
