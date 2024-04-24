import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex items-center h-20 px-2 md:px-10 bg-primary text-text" data-svelte-h="svelte-pnyezg"><div class="mx-auto flex items-center justify-center w-[80%]"><nav><ul class="flex items-center justify-center"><li><div class="flex items-center justify-center "><a href="/"><img class="max-h-6 mb-3" src="aerometrix_logo.png" alt="Aerometrix Logo" style="height: 50px;"> </a></div></li> </ul></nav>  <div class="flex-grow"></div> </div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
