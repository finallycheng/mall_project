<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null,
      isShowBtn: false
    };
  },
  props: {
    monitor_state: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: true,
      click: true,
      probeType: this.monitor_state
    });
    this.controlBtn();
    this.pullingUp();
  },
  methods: {
    controlBtn() {
      this.scroll.on("scroll", position => {

        this.$emit("monitor_position", -position.y);

      });
    },
    clickTop() {
      // scrollTo(x, y, time, easing)
      // x：x坐标
      // y：y坐标
      // time：运行时间（毫秒）
      this.scroll.scrollTo(0, 0, 1000);
    },
    pullingUp() {
      // 下拉加载更多
      this.scroll.on("pullingUp", () => {
        this.$emit("loadMore");
        this.scroll.finishPullUp(); // 添加后可以多次下拉加载
      });
    },
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>

<style scoped></style>
