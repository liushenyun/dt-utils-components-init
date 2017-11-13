<template>
  <div class="component-show-outer">
    <h4>组件展示区</h4>
    <button @click="backHome">返回主页（HOME）</button>
    <h5>input样式：</h5>
    <input type="text" class="dt-input" placeholder="5454">
    <h5>textarea样式：</h5>
    <textarea  id="" cols="30" rows="10" placeholder="请填入" class="dt-textarea "></textarea>
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
