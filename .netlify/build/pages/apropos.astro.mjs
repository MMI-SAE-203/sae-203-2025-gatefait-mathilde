import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
export { renderers } from '../renderers.mjs';

const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "\xC0 Propos", "image": "src/assets/apropos.webp", "texte": "Bienvenue sur la page officielle de notre festival de films d'horreur ! D\xE9couvrez l\u2019histoire fascinante de cet \xE9v\xE9nement unique, son \xE9quipe passionn\xE9e, et les valeurs qui fa\xE7onnent chaque \xE9dition terrifiante." })} ${maybeRenderHead()}<div class="m-4"> <div class="flex items-center"> <h2 class="mb-14 mt-15 mr-4">Historique</h2> <div class="w-full h-1 bg-white"></div> </div> <p>
Créé en 2024 par une équipe de passionnés du cinéma de genre, notre
      festival de films d’horreur deviendra rapidement un rendez-vous
      incontournable pour les amateurs de frissons. Né de l’envie de célébrer
      l’art du cinéma horrifique sous toutes ses formes, cet événement vise à
      mettre en lumière des réalisateurs talentueux, qu’ils soient émergents ou
      reconnus. Chaque année, le festival proposera une programmation
      diversifiée, allant des classiques du genre aux œuvres indépendantes et
      innovantes, pour offrir une expérience immersive et inoubliable. Notre
      objectif est de créer un espace où se mêlent émotions fortes, réflexion
      sur les thématiques de la peur et célébration d’un genre souvent
      sous-estimé mais riche en créativité.
</p> <div class="flex items-center"> <h2 class="mb-14 mt-15 mr-4">Équipes</h2> <div class="w-full h-1 bg-white"></div> </div> <p>
Le festival repose sur une équipe passionnée d’organisateurs et de
      techniciens. Ensemble, ils sélectionnent les films, créent une ambiance
      immersive et garantissent une expérience cinématographique inoubliable
      pour tous les amateurs d’horreur.
</p> <div class="flex items-center"> <h2 class="mb-14 mt-15 mr-4">Charte</h2> <div class="w-full h-1 bg-white"></div> </div> <p>
Le festival valorise l’innovation, la diversité et la créativité dans le
      cinéma d’horreur. Cette édition explore la thématique de la peur, offrant
      des œuvres qui captivent et repoussent les limites du genre, pour une
      expérience à la fois effrayante et enrichissante.
</p> </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Apropos.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/Apropos.astro";
const $$url = "/Apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Apropos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
