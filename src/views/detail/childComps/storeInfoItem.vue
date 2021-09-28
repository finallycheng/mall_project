<template>
  <div class="store_info">
    <div class="store_log_name">
      <img :src="storeInfo.merchant_face" alt="" />
      <h3>{{ storeInfo.merchant_name }}</h3>
    </div>
    <div class="store_score_sell">
      <div class="store_box">
        <div class="sell_info left">
          <div class="sell_box">
            <div class="gross_sales">
              <span>{{ storeInfo.gross_sales | formatNum }}</span>
              总销量
            </div>
            <div class="goods_num">
              <span>{{ storeInfo.goods_number }}</span>
              全部宝贝
            </div>
          </div>
        </div>
        <div class="store_score right">
          <div class="score_box">
            <div
              class="grade"
              v-for="(item, index) in storeInfo.grade"
              :key="index"
            >
              {{ item.name }}
              <span
                class="score"
                :class="standard(item.grade) ? 'text_red' : 'text_green'"
                >{{ item.grade | convert }}</span
              >
              <span
                class="grade"
                :class="standard(item.grade) ? 'back_red' : 'back_green'"
                >{{ item.grade | level }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="into_shop">
        <button>进店逛逛</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    storeInfo: {
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods: {
    standard(value) {
      if (parseFloat(value) > 4.4) {
        return true;
      }
    },
  },
  filters: {
    formatNum(value) {
      if (value > 10000) {
        return (value / 10000).toFixed(2).toString() + "万";
      }
    },
    level(value) {
      if (parseFloat(value) > 4.4) {
        return "高";
      }
      return "低";
    },
    convert(value) {
      return value.toFixed(1);
    }
  },
};
</script>

<style scoped>
.store_info {
  padding: 20px 0;
  border-bottom: 5px solid rgb(243, 243, 243);
}

.store_log_name img {
  width: 60px;
  border-radius: 50%;
  vertical-align: middle;
}

.store_log_name h3 {
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
}

.store_score_sell {
  margin-top: 10px;
  height: 140px;
  font-size: 14px;
}

.store_score_sell > div.store_box {
  height: 80px;
}

.sell_info {
  font-size: 14px;
  width: 50%;
  height: 60px;
  text-align: center;
  padding-top: 20px;
}

.sell_box {
  width: calc(100% - 15px);
  height: 40px;
  padding-left: 15px;
  border-right: 1px solid rgb(223, 223, 223);
}

.sell_box div {
  float: left;
  margin-left: 15px;
}

.sell_box div span {
  font-size: 20px;
  display: block;
}

.store_score {
  width: 50%;
  height: 100%;
}

.store_score .score_box {
  margin-left: 20%;
  height: 100%;
}

.store_score div {
  height: calc(80px / 3);
  line-height: calc(80px / 3);
}

.store_score .score_box span.score {
  margin-left: 8px;
  margin-right: 5px;
}

.store_score .score_box span.grade {
  color: #fff;
}

.text_green {
  color: green;
}

.text_red {
  color: red;
}

.back_green {
  background-color: green;
}

.back_red {
  background-color: red;
}

.into_shop {
  margin: 0 auto;
  padding-top: 15px;
  width: 120px;
}

.into_shop button {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 25px;
  line-height: 25px;
  vertical-align: middle;
  border: none;
  color: rgb(59, 59, 59);
}
</style>