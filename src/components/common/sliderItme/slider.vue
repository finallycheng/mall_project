<template>
  <div class="carousel_box">
    <ul ref="imgs_box" @transitionend="toggle()">
      <slot v-cloak></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_index: 0,
      img_number: 0
    };
  },
  computed: {
    img_width() {
      return screen.width;
    },
    img_left() {
      return -(this.img_width + this.img_width * this.img_index);
    },
    dom_img_box() {
      return this.$refs.imgs_box;
    }
  },
  watch: {},
  methods: {
    count_img() {
      this.img_number = this.dom_img_box.children.length - 1;
    },
    push_img() {
      // console.log(this.dom_img_box);
      let one_img = this.dom_img_box.firstElementChild;
      let copy_dom = one_img.cloneNode(true);
      this.dom_img_box.appendChild(copy_dom);
    },
    translocation() {
      setInterval(() => {
        this.dom_img_box.style.transition = "all .3s";
        this.dom_img_box.style.transform = "translate(" + this.img_left + "px)";
        this.img_index += 1;
      }, 1500);
    },
    toggle() {
      if (this.img_index === this.img_number) {
        this.img_index = 0;
        this.dom_img_box.style.transition = "none";
        this.dom_img_box.style.transform = "translate(0px)";
      }
    }
  },
  mounted() {},
  updated() {
    // 计算图片的数量
    this.push_img();
    this.count_img();

    // 开始轮播图片
    this.translocation();
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

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
