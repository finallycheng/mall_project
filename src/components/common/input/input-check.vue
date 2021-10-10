<template>
  <input type="checkbox" class="checked" v-model="checked" />
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.checked {
  vertical-align: middle;
  width: 20px;
  height: 20px;
  -webkit-appearance: none; /* 设置input的样式 */
  position: relative;
  border: 1px;
  background-color: rgba(196, 196, 196, 0.559);
  border-radius: 50%;
}
.checked:hover {
  cursor: pointer;
}
.checked:checked {
  background-color: var(--nav-color);
}

.checked:checked::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 6px;
  border: 2px solid #fff;
  transform: rotate(-45deg);
  border-top: none;
  border-right: none;
  top: 4px;
  left: 3px;
}
</style>
