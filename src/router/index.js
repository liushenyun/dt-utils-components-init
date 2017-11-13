import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/Home.vue';
import Utils from '../pages/Utils.vue';
import ComponentShow from "../pages/ComponentShow.vue";
import DTUtils from "../pages/DTUtils.vue";
import HttpTest from "../pages/HttpTest.vue";

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/utils',
    name: 'Utils',
    component: Utils
  }, {
    path: '/componentshow',
    name: 'ComponentShow',
    component: ComponentShow
  }, {
    path: '/dtutils',
    name: 'DTUtils',
    component: DTUtils
  }, {
    path: '/http',
    name: 'HttpTest',
    component: HttpTest
  }]
})