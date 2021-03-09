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
