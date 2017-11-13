<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <dt-loading></dt-loading>
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
  </div>
</template>

<script>
import DtLoading from "./components/Loading/Loading.vue";
export default {
  name: "app",
  components: {
    DtLoading
  }
};
</script>

<style lang='scss'>
@import "./static/css/base.css";
@import "./static/css/dt.reset.scss";
@import "./scss/animation.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
