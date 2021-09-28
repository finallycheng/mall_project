<template>
  <div class="tabbar-btn" @click="activeBtn()">
    <div class="tabbar-img">
      <slot v-if="!isShow" name="tabbar-icon"></slot>
      <slot v-else name="tabbar-icon-active"></slot>
    </div>
    <div class="tabbar-text" :style="textActive">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarBtn",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default: "/home"
    }
  },
  computed: {
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    textActive() {
      return this.isShow ? { color: "red" } : {};
    }
  },
  methods: {
    activeBtn() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tabbar-btn {
  flex: 1;
  text-align: center;
}
</style>
