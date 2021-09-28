<template>
  <div class="toast">{{ hint_text }}</div>
</template>

<script>
export default {
  name: "toast",
  props: {
    hint_text: {
      type: String,
      default: "这是一个提示框"
    }
  }
};
</script>

<style scoped>
.toast {
  z-index: 99;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  color: rgb(187, 187, 187);
  background-color: rgba(44, 44, 44, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 30px;

}

</style>
