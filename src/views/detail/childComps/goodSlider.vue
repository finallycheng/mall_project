<template>
  <slider class="good_slider">
    <li v-for="(img, index) in goodSliderImgs" :key="index">
      <img :src="img" alt="" />
    </li>
  </slider>
</template>

<script>
import slider from "@/components/common/sliderItme/slider.vue";

export default {
  props: {
    goodSliderImgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {},
  components: {
    slider
  },
  created() {}
};
</script>

<style scoped>
.good_slider li {
  height: 400px;
}

img {
  height: 400px;
}
</style>
