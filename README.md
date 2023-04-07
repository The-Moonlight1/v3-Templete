# 脚手架使用文档
本脚手架在 vue+vite 的基础上增加了如下功能：

- 对 axios 进行了模块化的二次封装
- 将 iconfoot 封装成了组件，可以通过对组件传参的方式调用
- 设置了 eachart,element 的全局调用
- 使用 pinia 进行状态管理
- Vue-router 的全局守卫
- 可以使用 less 进行样式的书写
- 添加了常用自定义指令
- 设置了 prettier 进行代码格式化
- 设置了 gitHooks 和 commitlint,提交时自动格式化并保证 commit 风格统一

## 目录结构

- .husky:处理 githook 的文件夹
- public:ico,index.html 等网页配置相关文件的文件夹
- src：核心代码文件夹

  - api:axios 封装的文件夹，封装代码在 request.js,书写功能时，我们需要找到对应该功能所在模块，在模块中书写
  - assets:静态文件文件夹，处理图片，iconfoot,svg,共同样式等文件，其中 icon 中的 JS 代码是下载的 iconfoot 的 symbol 文件
  - components:通用组件文件夹，一些整个项目中需要用到的组件放在此处
  - directive：自定义指令文件夹，注册各种自定义指令，这些自定义指令会作为插件安装到 Vue 上
  - hooks: hook文件夹，抽取公共方法，方便复用
  - mook：数据模拟 
  - router：路由文件夹，管理页面的跳转
  - store: pinia 文件夹，统一状态管理，直接在 modules 文件夹下写对应 store 即可
  - views: 页面文件夹，在这个目录下建立自己对应页面的文件夹，在里面写 Vue 文件即可
  
  
  - App.vue:Vue 的主组件，进入项目后见到的第一个组件
  - main.js:Vue 的主文件，在此进行 Vue 的通用配置


## axios 封装

axios 封装的代码在 src/api/http.js 中，

axios 的封装做了以下几个方面的处理：

- 添加了请求，响应拦截器，直接返回响应信息的 data

axois 进行了模块化划分和自动装配，每个模块开发时新建一个**以 Api.js 结尾的文件**（比如 homeApi.js）,先从 request.js 中引入封装好的 axios,然后将对应接口写成函数并暴露出来，在需要使用的地方，调用即可


基本用法：

```js
import request from "./request";

/**
 * case 模块
 */

/**
 * 在这里写具体的方法
 */
function wuhu(data) {
  return request({
    method: "post",
    url: "/wuhu",
    data: data,
  });
}
// 在这里导出
export default {
  wuhu
}

```


调用示例：

```js
 import case from '@/api/case'
 case.wuhu(data).then(res=>{
    console.log(res)
 }).catch(err=>{
    log(err)   
 })
```

基本格式：模块名.接口函数名(传参)+.then 执行回调函数



## Vue-Router 的全局守卫

vue-router 的封装主要是针对路由守卫的封装，如果需要在到达某一路由时要修改 title 的名称，那么可以在对应的路由配置上配置 meta 属性来实现

```js
      {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "主页",
    },
    children: [],
  },
```

meta 属性还可以用来配置路由的权限,当配置了此权限后，只有登录的用户才能访问这一路由，否则会直接跳转到登录页

```js
  {
    path: "/UserInfo",
    name: "UserInfo",
    component: () => import("../view/UserInfo/UserInfo.vue"),
    // 利用元信息判别路由权限
    meta: {
      title: "用户信息",
      requiresAuth: true,
    },
    children: [],
  },
```

## 自定义指令的使用

脚手架中内置了一些实用的自定义指令（src/directive/\*），这些自定义指令可以大大简化开发。同时，也建议尽量把与 DOM，BOM 相关的操作都用自定义指令的方式来实现。保证模块单一功能

调用方法：在 directive 模块下的每个文件的名称都是自定义指令的名称，dom 上 **用 v-自定义指令名称** 即可调用，具体调用方法和每个自定义指令的功能可以参考具体文件的注释

```html
<div v-fix></div>
```

directive 文件夹下的 index.js 会**自动收集**模块中所有的自定义指令并作为插件挂载到 Vue 上，因此，如果要添加全局自定义指令，只需要在 src/directive 文件夹下创建自定义指令名命名的 JS 文件并暴露出去即可

## iconfoot 的使用

iconfoot 已经被封装成组件并挂载到全局，在任意组件中无需引入即可使用

```js
<icon name="aixin" color="red"></icon>
```

name 是一个必选项，要根据 iconfoot 官网中项目的名字来写,名字前去掉 icon，其余可以传的属性还包括：

color,width,height,cursor

对于 icon 这个组件封装的思路是引入了 iconfoot 上生成的 symbol 代码，因此只能使用项目中的 icon，如果要新增 icon，则要重新生成 symbol 代码并将生成的代码复制到 src/assets/icon/iconfoot.js 中

## 全局组件注册

当涉及全局组件的注册时，要在 src/components/components.js 中引入组件并按照以下方法进行注册

```js
install(app) {
      app.component('VueIcon', icon);
  },
```

## prettier 格式化

脚手架中已经配置好了 prettier，执行 npm run format 即可将所有 js 和 vue 文件进行格式化，你也可以按照 prettier 的命令，对任意文件进行单独格式化

在 git-hooks 中，prettier 会被执行，确保每一次提交前都完成代码格式化
<<<<<<< HEAD

## gitHooks 与 commitlint

本脚手架的 gitHooks 会在代码提交前，格式化所有代码并使用 commitlint 对提交信息进行检验,如果提交信息非法会拒绝提交代码

commitlint.config.js 这个文件中配置了提交规范，提交信息必须包含配置的内容

为了确保提交信息规范，更建议用 npm run commit 代替 git commit,在 git add .后，使用 npm run commit 命令会自动出现选项界面，选择对应的修改类型并填写信息，commitlint 就可以自动生成符合规范的提交信息
![在这里插入图片描述](https://img-blog.csdnimg.cn/cb79acf8933640c0b6461a87e4d6bde4.png)

选项的含义看不懂可以参考 commitlint.config.js 中的注释