<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar-main></tabbar-main>
  </div>
</template>

<script>
import TabbarMain from "@/components/content/tabbarMain.vue";

export default {
  components: { TabbarMain }
};
</script>

<style>
@import url("./assets/css/init.css");
@import url("./assets/css/normalize.css");
</style>
