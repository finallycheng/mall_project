<template>
  <div class="detail_box">
    <child-top @cursor="move" ref="child_top"></child-top>
    <scroll class="content" @monitor_position="toggleItem" ref="scrollModule">
      <!-- 商品轮播图 -->
      <good-slider
        ref="good_slider"
        :goodSliderImgs="goodSliderImgs"
      ></good-slider>
      <div
        class="goodMain"
        v-if="Object.keys(this.goodSliderImgs).length !== 0"
      >
        <good-info-item :goodBasicInfo="goodBasicInfo"></good-info-item>
        <!-- 店铺信息 -->
        <store-info-item :storeInfo="storeInfo"></store-info-item>
        <!-- 商品描述 -->
        <good-describe-item
          ref="good_param"
          :paramInfo="paramInfo"
          @finish_load="finishLoad"
        ></good-describe-item>
        <!-- 评论 -->
        <child-comment ref="good_comment"></child-comment>
      </div>
      <!-- 商品推荐 -->
      <goods-list ref="good_recommend" :good_datas="good_data"></goods-list>
    </scroll>
    <back-top :isShowBtn="isShowBtn" @click.native="click_top"></back-top>
    <!-- 底部 -->
    <btm-zone :shop_cart="shop_cart"></btm-zone>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/scroll.vue";
import GoodsList from "@/components/content/goods/goodsList.vue";
import backTop from "@/components/content/backTop/backTop.vue";

import ChildTop from "./childComps/childTop.vue";
import GoodSlider from "./childComps/goodSlider.vue";
import GoodInfoItem from "./childComps/goodInfoItem.vue";
import StoreInfoItem from "./childComps/storeInfoItem.vue";
import GoodDescribeItem from "./childComps/goodDescribeItem.vue";
import ChildComment from "./childComps/childComment.vue";
import btmZone from "./childComps/btmZone.vue";

import { debounce } from "@/common/utils.js";
import { myMixins } from "@/common/mixins.js";

import {
  gainGoodData,
  goodInfo,
  storeInfo,
  paramInfo
} from "@/network/detail.js";

export default {
  name: "detail",
  data() {
    return {
      goodSliderImgs: [],
      goodBasicInfo: {},
      storeInfo: {},
      paramInfo: {},
      good_data: [],
      positionY: [],
      gainPosition: null,
      currentItem: 0,
      shop_cart: {}
    };
  },
  mixins: [myMixins],
  methods: {
    recommend() {
      gainGoodData("recommend").then(result => {
        this.good_data = result;
      });
    },
    finishLoad() {
      this.delayFunc();
    },
    gainGoodData() {
      gainGoodData(this.$route.params.key).then(result => {
        this.goodSliderImgs = result.carousel_img;
        this.goodBasicInfo = goodInfo(result);
        this.storeInfo = storeInfo(result);
        this.paramInfo = paramInfo(result);

        this.shop_cart["img"] = this.goodSliderImgs[0];
        this.shop_cart["title"] = this.goodBasicInfo["title"];
        this.shop_cart["price"] = this.goodBasicInfo["discount"];
        this.shop_cart["describe"] = this.paramInfo["describe"][0];
        this.shop_cart["only"] = this.$route.params.key;
      });
      this.recommend();
    },
    move(index) {
      this.$refs.scrollModule.scroll.scrollTo(0, -this.positionY[index], 500);
    },
    toggleItem(y) {
      this.setShowBtn(y);
      // 大于或等于0并且小于 100
      // 大于或等于100并且小于 500
      // 大于或等于500并且小于 1500
      // 大于或等于1500

      const length = this.positionY.length;
      for (var i = 0; i < length; i++) {
        // if (
        //   this.currentItem !== i &&
        //   ((this.positionY[i] <= y && this.positionY[i + 1] > y) ||
        //     (this.positionY[i] <= y && i === length - 1))
        // ) {
        //   this.currentItem = i;
        //   this.$refs.child_top.currentIndex = i;
        // }
        if (
          this.currentItem !== i &&
          this.positionY[i] <= y &&
          this.positionY[i + 1] > y
        ) {
          this.currentItem = i;
          this.$refs.child_top.currentIndex = i;
        }
      }
    }
  },
  created() {
    this.gainGoodData();
    this.gainPosition = debounce(() => {
      this.positionY = [];
      this.positionY.push(this.$refs.good_slider.$el.offsetTop);
      this.positionY.push(this.$refs.good_param.$el.offsetTop);
      this.positionY.push(this.$refs.good_comment.$el.offsetTop);
      this.positionY.push(this.$refs.good_recommend.$el.offsetTop);
      this.positionY.push(Number.MAX_VALUE);
    }, 500);
  },
  updated() {
    this.gainPosition();
  },
  components: {
    ChildTop,
    Scroll,
    GoodSlider,
    GoodInfoItem,
    StoreInfoItem,
    GoodDescribeItem,
    ChildComment,
    GoodsList,
    btmZone,
    backTop
  },
  watch: {
    $route() {
      this.gainGoodData();
      location.reload();
    }
  }
};
</script>

<style scoped>
.detail_box {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  position: absolute;
  width: 100vw;
  /* height: calc(100% - 44px); */
  top: 44px;
  bottom: 0;
  overflow: hidden;
}

.goodMain {
  margin: 0 15px;
}
</style>
