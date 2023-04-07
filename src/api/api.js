/**
 * 有两种使用axios的方式
 * 第一种是 直接引用对应的模块 
 * 例如 ：
 *    import User from '@/api/user';
 *    User.login()
 * 
 * 第二种就是引用该模块，
 * 然后 再 使用方法，大体上差不多，建议用第一种
 * 这个模块就是 将所有的 请求 都放到同一个变量中，方便调用
 */
const api = import.meta.globEager("./*Api.js");
Object.keys(api).forEach((module) => {
  const moduleName = module.substring(2, module.length - 3);
  api[moduleName] = api[module].default;
  delete api[module];
});
export default api;
