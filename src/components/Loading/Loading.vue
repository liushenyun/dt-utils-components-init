<template>
  <transition name="fade">
    <div id="loading" v-if="isLoading">
      <div class="box">
        <img src="./svg/circles.svg">
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "loading",
  computed: {
    ...mapGetters(["isLoading"])
  }
};
</script>

<style lang="scss">
@import "../../scss/px2rem.scss";
@import "../../scss/mixin";
#loading {
  @include over;
  @include flex(center, center);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
  .box {
    height: px2rem(120);
    width: px2rem(120);
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>