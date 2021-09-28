<template>
  <div class="good_describe">
    <div class="line"></div>
    <ul class="describe_text">
      <li v-for="(item, index) in paramInfo.describe" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="img_box">
      <img
        v-for="(img, index) in paramInfo.details"
        :src="img"
        alt=""
        :key="index"
        @load="imgLoad()"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    imgInfoLen() {
      return this.paramInfo.details.length;
    }
  },
  methods: {
    imgLoad() {
      this.$emit("finish_load");
    }
  }
};
</script>

<style scoped>
.good_describe {
  padding: 20px 10px;
}
.line {
  width: 100px;
  border-top: 1px solid rgb(65, 64, 64);
  margin-bottom: 10px;
}

.line::before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  margin-top: -6px;
  background-color: rgb(65, 64, 64);
}

.describe_text li {
  font-size: 14px;
  color: rgb(150, 150, 150);
  text-indent: 2em;
}

.img_box img {
  width: 100%;
}
</style>
