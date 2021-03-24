<template>
  <div id="benfit_box">
    <div
      class="benfit_info"
      v-for="(info, index) in benefit_datas"
      :key="index"
    >
      <img :src="info.image" alt="" />
      <p>{{ info.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "benfit",
  props: {
    benefit_datas: {
      type: Array
    }
  }
};
</script>

<style scoped>
#benfit_box {
  display: flex;
  padding: 15px 0 10px 0;
  height: 100px;
  border-bottom: 15px solid rgb(228, 226, 226);
  font-size: 14px;
}

.benfit_info {
  flex: 1;
  text-align: center;
}

img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
</style>
