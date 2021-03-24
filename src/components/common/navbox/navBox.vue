<template>
  <div class="nav-box">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navBox"
};
</script>

<style scoped>
.nav-box {
  width: 100vw;
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  background-color: rgb(252, 112, 112);
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
}

.nav-left,
.nav-right {
  width: 60px;
}

.nav-center {
  font-size: 24px;
  flex: 1;
  color: #fff;
  font-weight: bold;
}
</style>
