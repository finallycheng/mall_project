<template>
  <div class="good_basic_info">
    <h3 class="good_name">{{ goodBasicInfo.title }}</h3>
    <!-- 售价 -->
    <div class="price">
      <span class="discount">{{ goodBasicInfo.discount }}</span>
      <span class="cost">{{ goodBasicInfo.original_cost }}</span>
    </div>
    <!-- 销量、收藏 -->
    <div class="market_info">
      <span class="sales left">销量 {{ goodBasicInfo.sale_num }}</span>
      <span class="collect right"> 收藏 {{ goodBasicInfo.collect }} 人 </span>
    </div>
    <!-- 寄件服务 -->
    <div class="shipments_serve">
      <span v-for="(item, index) in goodBasicInfo.service" :key="index">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodInfoItem",
  props: {
    goodBasicInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.good_name {
  margin: 10px 0;
  font-size: 20px;
}

.price {
  margin: 5px 0;
}

.discount {
  font-size: 24px;
  font-weight: bold;
  color: rgb(255, 86, 151);
  margin-right: 5px;
}

.cost {
  text-decoration: line-through;
  color: rgb(170, 170, 170);
  font-size: 14px;
}

.market_info {
  font-size: 14px;
  color: rgb(170, 170, 170);
  margin-top: 20px;
  border-bottom: 2px solid rgb(243, 243, 243);
  height: 25px;
  line-height: 25px;
}

.shipments_serve {
  font-size: 14px;
  padding: 15px 0;
  border-bottom: 5px solid rgb(243, 243, 243);
  height: 20px;
}

.shipments_serve span {
  float: left;
  vertical-align: middle;
}

.shipments_serve span::before {
  content: "";
  background: url("https://s11.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png")
    no-repeat;
  background-size: 16px;
  display: inline-block;
  width: 16px;
  height: 16px;
  /* vertical-align: -5px; */
  vertical-align: middle;
}
</style>
