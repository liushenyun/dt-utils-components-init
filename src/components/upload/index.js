/* eslint-disable*/
import DtUpload from "./src/dtUpload.vue";
console.log(DtUpload);
DtUpload.install = function(Vue) {
  Vue.component(DtUpload.name, DtUpload);
}
export default DtUpload
