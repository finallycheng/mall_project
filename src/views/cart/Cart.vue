<template>
  <div class="cart">
    <nav-bar class="nav">
      <template v-slot:nav-center>
        <h3 class="nav-font">购物车（{{ good_count }}）</h3>
      </template>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <article-box />
    </scroll>
    <aggregate />
  </div>
</template>

<script>

import navBar from "@/components/common/navbox/navBox.vue";
import scroll from "@/components/common/scroll/scroll.vue";

import articleBox from "./childComps/articleBox.vue";
import aggregate from "./childComps/aggregate.vue";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      good_count: "getGoodsCount"
    })
  },
  methods: {},
  activated() {
    this.$refs.scroll.refresh();
  },
  components: {
    navBar,
    scroll,
    articleBox,
    aggregate
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav {
  background-color: var(--nav-color);
}

.nav .nav-font {
  color: #fff;
  font-weight: 600;
}

.scroll {
  height: calc(100% - 44px - 70px - 45px);
  overflow: hidden;
  background-color: rgb(243, 243, 243);
}
</style>

