/**
 * 两种实现方式
 *  1.使用 vite/webpack 提供的 api 实现模块化导入
 *  2.使用 app.use 方式
 *      app.use方法具体如何使用，请仔细查看 个人笔记
 */
 const importDirectives = import.meta.globEager('./*.js')
 const directives = {}
 Object.keys(importDirectives).forEach(directiveFile => {
   const key = directiveFile.slice(2, directiveFile.length - 3)
   directives[key] = importDirectives[directiveFile].default
 })
 
export default {
   install(app, options) {
     for (const item in directives) {
       app.directive(item, directives[item]);
     }
   }
}