<template>
  <div class="home-outer">
    <h3>wechat Init (持续更新)</h3>
    <h4>(components/utils/dtutils/filter)</h4>
    <p>这是首页</p>
    <button @click="toUtilsPage">去往utils</button>
    <button @click="toComponentsShow">去组件展示区</button>
    <button @click="toUploadShow">去上传文件</button>
    <button @click="httpRequest">http请求</button>
    <button @click="toFilter">to filter</button>
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
    toUploadShow() {
      this.$router.push({
        name: "Upload"
      });
    },
    httpRequest() {
      this.$router.push({ name: "HttpTest" });
    },
    toFilter() {
      this.$router.push({ name: "Filter" });
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: red;
}
</style>
