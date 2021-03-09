<template>
  <div id="app">
    <tabbar-shell></tabbar-shell>
    <tabbar-btn></tabbar-btn>
  </div>
</template>

<style></style>

<script>
import TabbarBtn from "./components/common/tabbar/tabbarBtn.vue";
import tabbarShell from "./components/common/tabbar/tabbarShell.vue";

export default {
  components: { tabbarShell, TabbarBtn }
};
</script>
