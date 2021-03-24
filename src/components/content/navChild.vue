<template>
  <div class="nav_child">
    <ul>
      <li
        v-for="(title, index) in this.childTitles"
        :key="index"
        :class="isShow === index ? 'press' : ''"
        @click="activate(index)"
      >
        <span>{{ title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: 0 };
  },
  props: {
    childTitles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    activate(index) {
      this.isShow = index;
      this.$emit("navClick", index);
    }
  }
};
</script>

<style scoped>
.nav_child {
  position: sticky;
  z-index: 9;
  height: 30px;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #fff;
}

ul {
  display: flex;
  text-align: center;
}

ul li {
  flex: 1;
  height: 30px;
  line-height: 30px;
}

.press {
  color: rgb(255, 47, 92);
}

.press span {
  padding: 5px 5px;
  border-bottom: 2px solid rgb(255, 47, 92);
}
</style>
