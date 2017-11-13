# zhiwangwulian-wechat

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
# install sass-loader node-sass
npm install sass-loader node-sass --save-dev

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 文件夹说明
- assets 
- common 公共文件
  + js 公共js文件
  + css 公共css文件夹
  + img 公共img文件夹
- components  组件库文件夹（命名分为两类）
  + 例：DtButton  公共的组件 所有的项目都可以使用
  + 例：Button    项目私有组件 只有此项目使用
- config  配置文件夹
  + index.js 返回一些配置，例如，baseUrl
- fetch  http请求文件夹
- iconfont 字体库文件夹
- pages 页面文件夹
- router 路由配置文件夹
- utils 公共工具库 (每个项目都可以使用)
- dtutils dt项目特殊工具库（DT每个项目都可以用）
- scss 公共的sass文件夹
  + animation.scss 过渡
  + color.scss 全局颜色变量
  + mixin.scss
  + px2rem.scss (配合\src\static\js\rem.js会用)
- static 静态文件夹（不会改变的js或第三方插件）
  + js 公共js文件
  + css 公共css文件夹
  + img 公共img文件夹
- store store文件夹

## 项目之间的不同
#### 1、httpUrl和key【重要】

```
module.exports = {
  'httpUrl': "http://120.24.55.58:8033/",
  'key': [51, 56, 66, 54, 50, 50, 67, 51, 57, 67, 70, 55, 70, 52, 55, 57, 55, 69, 67, 65, 51, 50, 57, 70, 69, 55, 49, 48, 52, 50, 53, 55]
}

```