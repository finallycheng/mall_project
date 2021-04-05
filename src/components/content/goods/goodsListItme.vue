<template>
  <div class="list_itme" @click="skip_page()">
    <img :src="data.img" alt="" @load="loadFinish" />
    <p class="text">{{ data.title }}</p>
    <span class="like">{{ data.money }}</span>
    <span class="collect">{{ data.collect }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    loadFinish() {
      this.$bus.$emit("loadFinish");
    },
    skip_page() {
      const path = "/detail/" + this.data["key"];
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.list_itme {
  flex: 1;
  width: 200px;
  margin-bottom: 10px;
}

.list_itme p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.list_itme img {
  border-radius: 10px;
  width: 180px;
}

.like::before {
  content: "";
  font-family: vanfont;
  display: inline-block;
  width: 20px;
  background-image: url("../../../assets/image/home/dollar.svg");
  height: 20px;
  background-size: 20px;
  vertical-align: -3px;
}

.collect::before {
  content: "";
  font-family: vanfont;
  display: inline-block;
  background-image: url("../../../assets/image/home/favorite.svg");
  width: 20px;
  height: 20px;
  background-size: 20px;
  vertical-align: -3px;
}
</style>
