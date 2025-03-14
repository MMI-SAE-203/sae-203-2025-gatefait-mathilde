import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_BynSGe3a.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Intro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Intro;
  const { title, image, texte } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <img${addAttribute(image, "src")} class="w-full h-auto" alt="image"> <h2 class="absolute top-24 left-4 lg:top-85">${title}</h2> <p class="ml-4 mr-4 font-bold">${texte}</p> </div>`;
}, "/Users/mathildegatefait/Documents/GitHub/sae-203-2025-gatefait-mathilde/src/components/Intro.astro", void 0);

export { $$Intro as $ };
