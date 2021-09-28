<template>
  <div class="goods_list">
    <goods-list-itme
      v-for="(data, index) in good_datas"
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
    good_datas: {
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
