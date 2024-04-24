

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9J1lZ8h8.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DgBp4Tqq.js"];
export const stylesheets = ["_app/immutable/assets/2.Ce3aJL2P.css"];
export const fonts = [];
