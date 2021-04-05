<template>
  <div class="back_top" v-show="isShowBtn">
    <div class="btn"></div>
  </div>
</template>

<script>
export default {
  props: {
    isShowBtn: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.back_top {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid rgb(255, 47, 92);
  border-radius: 50%;
  box-shadow: 4px 4px 10px rgb(112, 112, 112);
}
.btn {
  width: 100%;
  height: 100%;
  background-image: url("../../../assets/image/home/arrow_up_fill.svg");
  background-position: 5px 4px;
  background-size: 40px;
  background-repeat: no-repeat;
}
</style>
