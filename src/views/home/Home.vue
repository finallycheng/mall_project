<template>
  <div id="home">
    <nav-box class="nav">
      <div class="nav-text" slot="nav-center">首页</div>
    </nav-box>
    <nav-child
      :childTitles="['流行', '新款', '精选']"
      @nav_click="nav_click"
      ref="nav_child1"
      :class="fixed ? 'fixed_top' : 'fixed_none'"
    ></nav-child>
    <scroll
      class="content"
      ref="scrollModule"
      :monitor_state="3"
      @monitor_position="toggleItem"
      @loadMore="load_more"
    >
      <slider-view :imgs_list="img_links" @load_over="load_over"></slider-view>
      <benefit-view :benefit_datas="benefit_datas"></benefit-view>
      <week-tags :tags_datas="tags_datas"></week-tags>
      <nav-child
        :childTitles="['流行', '新款', '精选']"
        @nav_click="nav_click"
        ref="nav_child2"
      ></nav-child>
      <goods-list :good_datas="good_data"></goods-list>
    </scroll>
    <back-top :isShowBtn="isShowBtn" @click.native="click_top"></back-top>
  </div>
</template>

<script>
import navBox from "@/components/common/navbox/navBox.vue";
import scroll from "@/components/common/scroll/scroll.vue";

import NavChild from "@/components/content/navChild.vue";
import GoodsList from "@/components/content/goods/goodsList.vue";
import backTop from "@/components/content/backTop/backTop.vue";

import sliderView from "./childComps/sliderView.vue";
import BenefitView from "./childComps/benefitView.vue";
import weekTags from "./childComps/weekTags.vue";

// import { debounce } from "@/common/utils.js";
import { myMixins } from "@/common/mixins.js";
import { getHomeData, getHomeChildNavData } from "@/network/home.js";

export default {
  name: "Home",
  data() {
    return {
      img_links: [],
      benefit_datas: [],
      tags_datas: [],
      good_datas: {
        pop: { page: 0, data: [] },
        new: { page: 0, data: [] },
        feat: { page: 0, data: [] }
      },
      show_page: "pop",
      child_nav_top: 0,
      fixed: false,
      leaveY: 0
    };
  },
  computed: {
    good_data() {
      return this.good_datas[this.show_page]["data"];
    }
  },
  components: {
    navBox,
    sliderView,
    BenefitView,
    weekTags,
    NavChild,
    GoodsList,
    scroll,
    backTop
  },
  mixins: [myMixins],
  created() {
    this.getHomeData();
    this.getHomeChildNavData("pop");
    this.getHomeChildNavData("new");
    this.getHomeChildNavData("feat");
  },
  methods: {
    load_over() {
      this.child_nav_top = this.$refs.nav_child2.$el.offsetTop;
    },
    nav_click(index) {
      switch (index) {
        case 0:
          this.show_page = "pop";
          break;
        case 1:
          this.show_page = "new";
          break;
        case 2:
          this.show_page = "feat";
          break;
      }
      this.$refs.nav_child1.isShow = index;
      this.$refs.nav_child2.isShow = index;
    },
    getHomeData() {
      getHomeData().then(result => {
        this.img_links = result.carousel_imgs;
        this.benefit_datas = result.benefits;
        this.tags_datas = result.tags_datas;
      });
    },
    getHomeChildNavData(datum) {
      const good_datas = this.good_datas[datum];
      good_datas.page += 1;
      getHomeChildNavData({
        url: "port/" + datum + "?page=" + good_datas.page,
        method: "GET"
      }).then(result => {
        good_datas.data.push(...result);
      });
    },
    toggleItem(y) {
      this.setShowBtn(y);

      this.fixed = y >= this.child_nav_top ? true : false;
    },
    load_more() {
      this.getHomeChildNavData(this.show_page);
    }
  },
  activated() {
    this.scroll_module.refresh();
    this.scroll_module.scroll.scrollTo(0, this.leaveY, 0);
  },
  deactivated() {
    this.leaveY = this.scroll_module.scroll.y;
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.nav {
  background-color: rgb(252, 112, 112);
  font-size: 24px;
  color: #fff;
  font-weight: bold;
}

.fixed_none {
  display: none;
}

.fixed_top {
  position: fixed;
  z-index: 9;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #fff;
}

.content {
  position: absolute;
  width: 100vw;
  /* height: calc(100% - 114px); */
  top: 44px;
  bottom: 70px;
  overflow: hidden;
}
</style>
