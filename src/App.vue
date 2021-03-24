<template>
  <div id="app">
    <router-view></router-view>
    <tabbar-main></tabbar-main>
  </div>
</template>

<style></style>

<script>
import TabbarMain from "@/components/content/tabbarMain.vue";

export default {
  components: { TabbarMain }
};
</script>

<style>
@import url("./assets/css/init.css");
</style>
