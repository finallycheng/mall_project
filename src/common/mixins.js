import { debounce } from "./utils";

export const myMixins = {
  data() {
    return {
      scroll_module: null,
      refresh: null,
      delayFunc: null,
      isShowBtn: false
    };
  },
  methods: {
    createdRefresh() {
      this.scroll_module = this.$refs.scrollModule;
      this.refresh = this.scroll_module.refresh;
    },
    click_top() {
      this.scroll_module.clickTop();
    },
    setShowBtn(y) {
      this.isShowBtn = y > 800 ? true : false;
    }
  },
  mounted() {
    this.createdRefresh();
    this.delayFunc = debounce(this.refresh, 100);
    this.$bus.$on("loadFinish", this.delayFunc);
  }
};
