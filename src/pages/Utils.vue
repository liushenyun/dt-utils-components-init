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
    <button @click="isPhoneActive">isPhone</button>
    
  </div>
</template>

<script>
import debounce from "../utils/debounce";
// import { debounce } from "../utils";
import throttle from "../utils/throttle";
import isPhone from "../utils/isPhone.js";
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "Home" });
    },
    clickAll: debounce(
      function(params) {
        console.log(454);
      },
      500,
      { leading: true }
    ),
    throttless: throttle(function(params) {
      console.log("three");
    }, 1000),
    isPhoneActive () {
      console.log(isPhone(1382875866013828758660));
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>

