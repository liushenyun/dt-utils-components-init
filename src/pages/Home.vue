<template>
  <div class="home-outer">
    <p>这是首页</p>
    <button @click="toUtilsPage">去往utils</button>
    <button @click="toDtUtils">去往dt-utils</button>
    <button @click="toComponentsShow">去组件展示区</button>
    <button @click="httpRequest">http请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUtilsPage() {
      this.$router.push({ name: "Utils" });
    },
    toComponentsShow() {
      this.$router.push({
        name: "ComponentShow"
      });
    },
    toDtUtils() {
      this.$router.push({ name: "DTUtils" });
    },
    httpRequest() {
      this.$router.push({ name: "HttpTest" });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
