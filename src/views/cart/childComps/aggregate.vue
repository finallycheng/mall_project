<template>
  <div class="aggregate">
    <div class="whole">
      <input-check :checked="allSelect" @click.native="selectAll" />
      全选
    </div>
    <div class="total_prices">
      合计：
      <span>{{ totalPrice }}</span>
    </div>
    <div class="settlement_btn" >去结算</div>
  </div>
</template>

<script>
import inputCheck from "@/components/common/input/input-check.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    numPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters(["getGoodsList"]),
    totalPrice() {
      return this.getGoodsList
        .filter(item => {
          return item.checked == true;
        })
        .reduce((preValue, newValue) => {
          return preValue + parseFloat(newValue.price) * newValue.count;
        }, 0)
        .toFixed(2);
    },
    allSelect() {
      if (this.getGoodsList.length === 0) return false;
      return this.getGoodsList.every(item => item.checked);
    }
  },
  methods: {
    selectAll() {
      let select = !this.allSelect;
      this.getGoodsList.forEach(item => {
        item.checked = select;
      });
    }
  },
  components: {
    inputCheck
  }
};
</script>

<style scoped>
.aggregate {
  position: relative;
  width: 100%;
  height: 45px;
  background-color: #fff;
  bottom: 0;
  display: flex;
  align-items: center;
}

.aggregate > div {
  float: left;
  height: 20px;
  line-height: 20px;
}

.aggregate .whole {
  margin-left: 15px;
}

.total_prices {
  margin-left: 20px;
}

.total_prices > span {
  color: rgb(255, 0, 76);
}

div.settlement_btn {
  position: absolute;
  right: 20px;

  width: 80px;
  height: 35px;
  text-align: center;
  line-height: 35px;

  color: #fff;
  background-color: var(--nav-color);
  border-radius: 15px;
  overflow: hidden;
}
</style>
