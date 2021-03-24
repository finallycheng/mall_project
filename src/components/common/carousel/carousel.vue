<template>
  <div class="carousel_box">
    <ul ref="imgs_box" @transitionend="toggle()">
      <li v-for="(img_link, index) in imgs_list" :key="index">
        <img :src="img_link" alt="" />
      </li>
      <li><img :src="imgs_list[0]" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_index: 0
    };
  },
  props: {
    imgs_list: {
      type: Array
    }
  },
  computed: {
    imgs_len() {
      return this.imgs_list.length;
    },
    img_width() {
      return screen.width;
    },
    img_left() {
      return -(this.img_width + this.img_width * this.img_index);
    }
  },
  watch: {},
  methods: {
    translocation() {
      setInterval(() => {
        this.$refs.imgs_box.style.transition = "all .3s";
        this.$refs.imgs_box.style.transform =
          "translate(" + this.img_left + "px)";
        this.img_index += 1;
      }, 1500);
    },
    toggle() {
      if (this.img_index === this.imgs_len) {
        this.img_index = 0;
        this.$refs.imgs_box.style.transition = "none";
        this.$refs.imgs_box.style.transform = "translate(0px)";
      }
    }
  },
  mounted() {
    this.translocation();
  }
};
</script>

<style scoped>
.carousel_box {
  width: 100%;
  height: 150px;
  overflow: hidden;
}
.carousel_box ul {
  width: calc(100vw * 6);
}
.carousel_box li {
  height: 150px;
  float: left;
}

img {
  width: calc(100vw);
  height: 100%;
  vertical-align: middle;
}
</style>
