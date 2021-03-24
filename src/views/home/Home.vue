<template>
  <div id="home">
    <nav-box>
      <div class="nav-text" slot="nav-center">首页</div>
    </nav-box>
    <scroll class="content">
      <carousel :imgs_list="img_links"></carousel>
      <benfit-view :benefit_datas="benefit_datas"></benfit-view>
      <week-tags :tags_datas="tags_datas"></week-tags>
      <nav-child
        :childTitles="['流行', '新款', '精选']"
        @navClick="nav_click"
      ></nav-child>
      <goods-list :child_datas="child_data"></goods-list>
    </scroll>
  </div>
</template>

<script>
import navBox from "@/components/common/navbox/navBox.vue";
import carousel from "@/components/common/carousel/carousel.vue";
import Scroll from "@/components/common/scroll/scroll.vue";
import NavChild from "@/components/content/navChild.vue";
import GoodsList from "@/components/content/goods/goodsList.vue";

import BenfitView from "./childComps/benfitView.vue";
import weekTags from "./childComps/weekTags.vue";

import { getHomeData, getHomeChildNavData } from "@/network/home.js";

export default {
  name: "Home",
  data() {
    return {
      img_links: [],
      benefit_datas: [],
      tags_datas: [],
      child_datas: {
        pop: { page: 1, data: [] },
        new: { page: 1, data: [] },
        feat: { page: 1, data: [] }
      },
      show_page: "pop"
    };
  },
  computed: {
    child_data() {
      return this.child_datas[this.show_page]["data"];
    }
  },
  components: {
    navBox,
    carousel,
    BenfitView,
    weekTags,
    NavChild,
    GoodsList,
    Scroll
  },
  created() {
    this.getHomeData();
    this.getHomeChildNavData("pop");
    this.getHomeChildNavData("new");
    this.getHomeChildNavData("feat");
  },
  methods: {
    nav_click(index) {
      switch (index) {
        case 1:
          this.show_page = "pop";
          break;
        case 2:
          this.show_page = "new";
          break;
        case 3:
          this.show_page = "feat";
      }
    },
    getHomeData() {
      getHomeData().then(result => {
        this.img_links = result.carousel_imgs;
        this.benefit_datas = result.benefits;
        this.tags_datas = result.tags_datas;
      });
    },
    getHomeChildNavData(datum) {
      const child_datas = this.child_datas[datum];
      getHomeChildNavData({
        url: "port/" + datum + "?page=" + child_datas.page,
        method: "GET"
      }).then(result => {
        child_datas.data.push(...result);
      });
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.content {
  position: absolute;
  width: 100vw;
  /* height: calc(100% - 110px); */
  top: 44px;
  bottom: 70px;
}
</style>
