<template>
  <div class="btm_box">
    <div class="left btns">
      <div class="btn service">
        <div class="icon">
          <img src="../../../assets/image/detail/wodekefu.svg" alt="" />
        </div>
        <div class="text"><span>客服</span></div>
      </div>
      <div class="btn store">
        <div class="icon">
          <img src="../../../assets/image/detail/dianpu.svg" alt="" />
        </div>
        <div class="text"><span>店铺</span></div>
      </div>
      <div class="btn collect">
        <div class="icon">
          <img src="../../../assets/image/detail/shoucang.svg" alt="" />
        </div>
        <div class="text"><span>收藏</span></div>
      </div>
    </div>
    <div class="right btns">
      <div class="btn add_shopping" @click="click_add">
        加入购物车
      </div>
      <div class="btn purchase">购买</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "btmZone",
  data() {
    return {
      num: 0
    }
  },
  props: {
    shop_cart: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions(["add_good"]),
    click_add(){
      this.add_good(this.shop_cart).then(res => {
        this.$toast(res, 1.5);
      });
    }
  },
  components: {}
};
</script>

<style scoped>
.btm_box {
  width: 97%;
  text-align: center;
  position: absolute;
  bottom: 5px;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

.btns {
  display: flex;
  width: 50%;
  height: 54px;
}

.left .btn {
  flex: 1;
  text-align: center;
  vertical-align: middle;
}

.btn div.icon {
  width: 25px;
  height: 25px;
  align-items: center;
  margin: 0 auto;
  margin-top: 4px;
}

.btn img {
  width: 25px;
}

.btn .text {
  margin-top: 2px;
  font-size: 14px;
}

.right .btn {
  flex: 1;
  line-height: 54px;
}

.add_shopping {
  background-color: rgb(255, 251, 5);
}

.purchase {
  background-color: rgb(252, 130, 242);
  color: #fff;
}
</style>
