import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Bouton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Bouton;
  const { text, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="block w-fit mx-auto mt-20 mb-20 px-30 py-4 text-lg md:text-xl lg:text-2xl
         text-center bg-red-900 text-white font-semibold rounded-xl shadow-lg
         hover:bg-white hover:text-red-900 transition-all"> ${text} </a>`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/components/Bouton.astro", void 0);

export { $$Bouton as $ };
