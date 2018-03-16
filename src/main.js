// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ajax from './fetch'
// import './common/js/filter'
import './static/js/rem';
import './config/index';
import './filter/filter';
import install from "./filter/install.js";
Vue.use(install);
// 用法
// console.log(122, this.$utils.coB);
// console.log(123, this.$utils.coA());
import DtUpload from "./components/upload/index.js";
Vue.use(DtUpload);
Vue.config.productionTip = false;

Object.assign(Vue.prototype, { $http: ajax })
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
