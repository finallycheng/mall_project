<template>
  <div class="inventory" ref="inventory">
    <article-item
      class="item"
      v-for="good in getGoodsList"
      :key="good.index"
      :good="good"
    />
  </div>
</template>

<script>
import articleItem from "./articleItem";
import { mapGetters } from "vuex";

export default {
  name: "articleBox",
  data() {
    return {
      all_check: false
    };
  },
  computed: {
    ...mapGetters(["getGoodsList", "getGoodsCount"])
  },
  components: {
    articleItem
  }
};
</script>

<style scoped>
.inventory .item {
  border-bottom: 1px solid #ddd;
}

.inventory .item:last-of-type {
  border-bottom: none;
}
</style>
