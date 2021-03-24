<template>
  <div class="list_itme">
    <img :src="data.modelData.data.looks.image" alt="" />
    <p class="text">{{ data.modelData.data.content }}</p>
    <span class="like">{{ data.modelData.data.cFav }}</span>
    <span class="collect">{{ data.modelData.data.cCollected }}</span>
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
  }
};
</script>

<style scoped>
.list_itme {
  flex: 1;
  width: 200px;
}

.list_itme p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.list_itme img {
  width: 180px;
}

.like::before {
  content: "";
  font-family: vanfont;
  display: inline-block;
  background-image: url("../../../assets/image/home/good.svg");
  width: 20px;
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
