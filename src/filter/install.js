// 第一种写法
const utils = {
  install(Vue) {
    let coA = () => {
      console.log("方法");
    };
    let coB = "属性"
    Vue.prototype.$utils = {
      coA,
      coB
    };
  }
}
export default utils;

// 第二种写法
// export default {
//   install(Vue) {
//     Vue.prototype.$myName = "zhagngsan";
//   }
// }
