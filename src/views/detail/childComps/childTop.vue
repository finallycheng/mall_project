<template>
  <div class="child_top">
    <nav-box class="topBack">
      <template v-slot:nav-left>
        <div class="effect_btn back" @click="back()"></div>
      </template>
      <template v-slot:nav-center>
        <div class="detail_info">
          <div
            class="items"
            :class="currentIndex === index ? 'current' : ''"
            v-for="(item, index) in ['商品', '参数', '评价', '推荐']"
            :key="index"
            @click="toggle_nav(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
      <template v-slot:nav-right>
        <div class="effect_btn more"></div>
      </template>
    </nav-box>
  </div>
</template>

<script>
import NavBox from "@/components/common/navbox/navBox.vue";

export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    toggle_nav(index) {
      this.currentIndex = index;
      this.$emit("cursor", index);
    }
  },
  components: {
    NavBox,
  }
}
</script>

<style scoped>
.topBack {
  background: #fff;
}

.detail_info {
  display: flex;
  padding: 0 20px;
}

.items {
  flex: 1;
  font-size: 14px;
}

.current {
  color: rgb(252, 112, 112);
}

.effect_btn {
  width: 60px;
  height: 44px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 18px 12px;
}

.back {
  background-image: url("../../../assets/image/good/back.svg");
}

.more {
  background-image: url("../../../assets/image/good/more.svg");
}
</style>
