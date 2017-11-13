<template>
  <div class="utils-outer">
    <h4>这是页面是用来测试utils</h4>
    <button @click='backHome'>返回主页</button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

