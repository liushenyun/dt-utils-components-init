<template>
  <div class="utils-outer">
    <h4>是测试DT-utils</h4>
    <button @click='backHome'>返回主页</button>
    <button @click="aesEncrypt">加密123456</button>
    <button @click="aesDecrypt">解密</button>
  </div>
</template>

<script>
import { aesEncrypt, aesDecrypt } from "../dtutils/Aes";
export default {
  data() {
    return {
      enData: ""
    };
  },
  methods: {
    backHome() {
      this.$router.push({ name: "Home" });
    },
    aesEncrypt() {
      this.enData = aesEncrypt(1213);
      console.log(this.enData);
    },
    aesDecrypt() {
      console.log(aesDecrypt(this.enData));
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

