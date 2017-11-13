<template>
  <div class="http-outer">
    <h4>http-test</h4>
    <button @click="http1">请求1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1
    };
  },
  mounted() {
    this.getAdminList(this.page);
  },
  methods: {
    http1() {},
    getAdminList(page) {
      this.$http("Shop_goods/get_goods_list", { page: page })
        .then(msg => {
          this.isOver = true;
          if (msg.data.list.length < 12) {
            this.loading = true;
          }
          this.listData = this.listData.concat(msg.data.list);
          this.domain = msg.domain;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>

