import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Statement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image = "background.jpg" } = $$props;
  let { title = "Effortless Solar Energy Management: Simplifying Complexity, Amplifying Results" } = $$props;
  let { subtitle = "Elevate your energy generation capabilities with our cutting-edge solutions, designed to optimize performance, reduce emissions, and drive a sustainable future." } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `<div class="relative h-[70vh] bg-cover bg-top"><div class="absolute inset-0 bg-top" style="${"background-image: url(" + escape(image, true) + ");"}"></div> <div class="absolute inset-0" style="background: linear-gradient( to top, rgba(0,0,0,1.0) 0%, rgba(0,0,0,0.75) 25%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 75%, rgba(2,14,30,0.75) 85%, rgba(2,14,30,1.0) 100%);"></div> <div class="absolute inset-0"><div class="flex flex-col justify-center h-full ml-5 lg:ml-[10%] text-white" style="z-index: 20;"><div><h1 class="w-full lg:w-[60%] text-6xl font-bold">${escape(title)}</h1></div> <div class="max-w-[420px]"><p class="mt-4 text-xl">${escape(subtitle)}</p></div></div></div></div>`;
});
const Problem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative py-20 bg-black" data-svelte-h="svelte-zj4ifp"><div class="w-[80%] mx-auto"><div class="flex justify-center items-center h-full text-white"><div class="w-[50%]"><img src="/solar-walking.png" alt="Solar Panels" class="w-[400px] md:w-[600px]"></div> <div class="w-[50%] px-10"><h1 class="text-2xl md:text-4xl font-bold">The global need for clean, renewable energy is clear.</h1>  <p class="text-xl md:text-2xl my-8">Unlocking Efficiency, Unlocking Growth</p> <p class="text-lg md:text-xl">We&#39;re collaborating with operators to overcome asset maintenance and management challenges, harnessing the power of data to drive informed decisions. Our expert team provides actionable insights, empowering customers to optimize performance, reduce costs, and thrive in a rapidly evolving industry.</p> </div></div></div></div>`;
});
const WhatWeOffer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-black text-white py-5" data-svelte-h="svelte-11uug0y"><div class="w-[80%] mx-auto"><h2 class="text-2xl md:text-4xl font-bold">We started with autonomous drone thermographic and optical aerial inspections.
            Now, we offer renewable energy asset management solutions for your entire organization.</h2></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Statement, "Statement").$$render($$result, {}, {}, {})} ${validate_component(Problem, "Problem").$$render($$result, {}, {}, {})}  ${validate_component(WhatWeOffer, "WhatWeOffer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
