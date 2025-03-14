import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BiVrPmr9.mjs';
import { $ as $$Intro } from '../chunks/Intro_r_FbaivT.mjs';
import { c as allFilms, f as filterByCategory } from '../chunks/backend_Dzj0FaO0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let films = await allFilms();
  let categories = ["Tout", "+16ans", "Court m\xE9trage", "Enfants"];
  if (Astro2.request.method == "POST") {
    const data = await Astro2.request.formData();
    const categorie = data.get("categorie");
    if (categorie !== "Tout") {
      const response = await filterByCategory(categorie);
      if (response.success) {
        films = response.films;
      } else {
        console.error(response.message);
      }
    } else {
      films = await allFilms();
    }
  }
  const filmsByDate = films.reduce((acc, film) => {
    const date = new Date(film.date_projection).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(film);
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "title": "Filmographie", "image": "/src/assets/films.webp", "texte": "Vous trouverez ici l\u2019ensemble des films propos\xE9s sur les 3 nuits du festival Festiv\u2019Halloween. Petits et grands venez passer un bon moment de partage et d\u2019horreur." })} ${maybeRenderHead()}<form action="/films" method="post"> <label for="categorie">Filtrer par catégorie:</label> <select name="categorie"> ${categories.map((categorie) => renderTemplate`<option${addAttribute(categorie, "value")}>${categorie}</option>`)} </select> <input type="submit" value="Filtrer" class="text-blue-800 underline cursor-pointer"> </form> <div id="films-container"> ${Object.entries(filmsByDate).map(([date, films2]) => renderTemplate`<div${addAttribute(date, "key")} class="mb-12"> <h2 class="text-2xl font-bold mb-6 border-b-2 border-white pb-2 text-center"> ${date} </h2> <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs"> ${films2.map((film) => renderTemplate`<div class="p-4 m-4 bg-white flex flex-col rounded-xl shadow-lg film-card"${addAttribute(film.categories, "data-genre")}> <ul class="flex flex-col items-center justify-between h-full"> <li> <img${addAttribute(film.imgUrl, "src")}${addAttribute(`Affiche du film ${film.titre}`, "alt")} class="w-full h-auto mb-3 rounded-xl"> </li> <li class="text-center mb-2 text-black">${film.titre}</li> <li class="text-center text-black">${film.realisateur}</li> <li> <a${addAttribute(`/films/${film.id}`, "href")} class="block text-center text-white rounded-xl bg-red-900 p-2 mt-2 w-full">
Découvrir le film
</a> </li> </ul> </div>`)} </div> </div>`)} </div> ` })}`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/films/index.astro", void 0);

const $$file = "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/pages/films/index.astro";
const $$url = "/films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
