<template>


  <slider>
    <li v-for="(img_link, index) in imgs_list" :key="index">
      <img :src="img_link" alt="" @load="load_img" />
    </li>
  </slider>


</template>

<script>
import slider from "@/components/common/sliderItme/slider.vue";

export default {
  data() {
    return {
      state: false
    };
  },
  props: {
    imgs_list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    slider
  },
  methods: {
    load_img() {
      if (!this.state) {
        this.state = true;
        this.$emit("load_over");
      }
    }
  }
};
</script>

<style scoped></style>
