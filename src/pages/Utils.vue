<template>
  <div class="utils-outer">
    <h4>这是页面是用来测试utils</h4>
    <button @click='backHome'>返回主页</button>
    <button>isObject</button>
    <button>isArray</button>
    <button>isEmpty</button>
    <button>isArray</button>
    <button @click="clickAll">debounce</button>
    <button @click="throttless">throttle</button>
  </div>
</template>

<script>
import debounce from "../utils/debounce";
import throttle from "../utils/throttle";
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "Home" });
    },
    clickAll: debounce(function(params) {
      console.log(454);
    }, 500),
    throttless: throttle(function(params) {
      console.log("three");
    }, 1000)
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>

