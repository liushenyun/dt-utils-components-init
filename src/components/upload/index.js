/* eslint-disable*/
import DtUpload from "./src/dtUpload.vue";
console.log(DtUpload);
// 第一种写法
DtUpload.install = function(Vue) {
  Vue.component(DtUpload.name, DtUpload);
}
export default DtUpload

// // 第二种写法
// const dtupload1 = {
//   install(Vue) {
//     Vue.component(DtUpload.name, DtUpload)
//   }
// }
// export default dtupload1
