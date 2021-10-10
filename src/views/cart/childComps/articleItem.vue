<template>
  <div class="article-item">
    <div class="left-checkbox-box">
      <input-check :checked="isChecked" @click.native="checkedClick()" />
    </div>
    <div class="center-img">
      <img :src="good.img" />
    </div>
    <div class="right-good-data">
      <h4>{{ good.title }}</h4>
      <p>{{ good.describe }}</p>
      <div class="price-sum">
        <span class="left price">{{ good.price }}</span>
        <span class="right sum">x{{ good.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import inputCheck from "@/components/common/input/input-check.vue";

export default {
  name: "articleItem",
  props: {
    good: {
      Object: Object,
      default: {}
    }
  },
  computed: {
    isChecked(){
      return this.good.checked;
    }
  },
  methods: {
    checkedClick() {
      this.good.checked = !this.good.checked;
    }
  },
  components: {
    inputCheck
  }
};
</script>

<style scoped>
.article-item {
  height: 100px;
  padding: 10px 0;
  font-size: 0;
}

.article-item > div {
  line-height: 100px;
  float: left;
}

.article-item .left-checkbox-box {
  margin: 0 5px;
}

.article-item .center-img {
  border-radius: 8px;
  overflow: hidden;
}

.article-item .center-img img {
  width: 80px;
  height: 100px;
  vertical-align: middle;
}

.article-item .right-good-data {
  width: 65%;
  font-size: 14px;
  padding: 0 15px;
  white-space: nowrap;
}

.article-item .right-good-data h4 {
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article-item .right-good-data p {
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(165, 165, 165);
}

.article-item .right-good-data .price-sum {
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}

.right-good-data .price-sum .price {
  color: rgb(252, 50, 0);
}
</style>
