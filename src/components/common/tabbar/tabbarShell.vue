<template>
  <div class="tabbar_shell" v-if="isShow">
    <tabbar-btn path="/home">
      <img slot="tabbar-icon" src="@/assets/image/home/home.svg" alt="" />
      <img
        slot="tabbar-icon-active"
        src="@/assets/image/home/home_active.svg"
        alt=""
      />
      <p slot="tabbar-text">首页</p>
    </tabbar-btn>
    <tabbar-btn path="/list">
      <img slot="tabbar-icon" src="@/assets/image/list/list.svg" alt="" />
      <img
        slot="tabbar-icon-active"
        src="@/assets/image/list/list_active.svg"
        alt=""
      />
      <p slot="tabbar-text">列表</p>
    </tabbar-btn>
    <tabbar-btn path="/add">
      <img slot="tabbar-icon" src="@/assets/image/add/add.svg" alt="" />
      <img
        slot="tabbar-icon-active"
        src="@/assets/image/add/add_active.svg"
        alt=""
      />
      <p slot="tabbar-text">添加</p>
    </tabbar-btn>
    <tabbar-btn path="/cart">
      <img slot="tabbar-icon" src="@/assets/image/cart/cart.svg" alt="" />
      <img
        slot="tabbar-icon-active"
        src="@/assets/image/cart/cart_active.svg"
        alt=""
      />
      <p slot="tabbar-text">购物车</p>
    </tabbar-btn>
    <tabbar-btn path="/mine">
      <img slot="tabbar-icon" src="@/assets/image/mine/mine.svg" alt="" />
      <img
        slot="tabbar-icon-active"
        src="@/assets/image/mine/mine_active.svg"
        alt=""
      />
      <p slot="tabbar-text">我的</p>
    </tabbar-btn>
  </div>
</template>

<script>
import tabbarBtn from "./tabbarBtn.vue";
export default {
  components: { tabbarBtn },
  name: "tabbarShell",
  data() {
    return {
      isShow: false,
    }
  },
  watch: {
    "$route.path"() {
      if (this.$route.path.indexOf("/detail") !== 0) {
        this.isShow = true;
      }
    }
  }
};
</script>

<style scoped>
.tabbar_shell {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  background-color: #fff;
  width: 100%;
  padding-top: 10px;
}

.tabbar-btn img {
  width: 30px;
  vertical-align: middle;
}

.tabbar-btn p {
  font-size: 14px;
  margin: 0;
}
</style>
