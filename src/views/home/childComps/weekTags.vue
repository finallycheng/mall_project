<template>
  <div class="tags">
    <a href="#">
      <h3>本周流行</h3>
      <ul class="kind">
        <li v-for="(data, index) in tags_datas" :key="index">
          <img :src="data.image" alt="" />
          <p>{{ data.title }}</p>
        </li>
      </ul>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    tags_datas: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.tags {
  text-align: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}
.tags h3 {
  margin: 8px;
}

.kind {
  font-size: 13px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
}

.kind li {
  flex: 1;
  width: 80px;
  margin: 10px;
}

.kind img {
  vertical-align: middle;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
</style>
