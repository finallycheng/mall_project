<template>
  <div class="goods_list">
    <goods-list-itme
      v-for="(data, index) in child_datas"
      :key="index"
      :data="data"
    />
  </div>
</template>

<script>
import goodsListItme from "./goodsListItme.vue";
export default {
  components: { goodsListItme },
  props: {
    child_datas: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 5px;
}
</style>
