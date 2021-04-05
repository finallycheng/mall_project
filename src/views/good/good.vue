<template>
  <nav-box>
    <template v-slot:nav-left>
      <div class="btn back"></div>
    </template>
    <template v-slot:nav-center>
      <div class="good_info">
        <div
          class="itmes"
          v-for="(itme, index) in ['商品', '参数', '评价', '推荐']"
          :key="index"
        >
          {{ itme }}
        </div>
      </div>
    </template>
    <template v-slot:nav-right>
      <div class="btn more"></div>
    </template>
  </nav-box>
</template>

<script>
import NavBox from "@/components/common/navbox/navBox.vue";

export default {
  components: {
    NavBox
  }
};
</script>

<style scoped>
.good_info {
  display: flex;
  padding: 0 20px;
}

.itmes {
  flex: 1;
}
.btn {
  width: 60px;
  height: 44px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 18px 12px;
}

.back {
  background-image: url("../../assets/image/good/back.svg");
}

.more {
  background-image: url("../../assets/image/good/more.svg");
}
</style>
