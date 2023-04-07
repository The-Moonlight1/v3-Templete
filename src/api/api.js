const api = import.meta.globEager("./*Api.js");
Object.keys(api).forEach((module) => {
  const moduleName = module.substring(2, module.length - 3);
  api[moduleName] = api[module].default;
  delete api[module];
});
export default api;
