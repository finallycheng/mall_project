import toast from "./toast.vue";

export default {
  install: function(Vue) {
    Vue.prototype.$toast = function(context, timeout = 1.5) {
      // 创建构造器
      const Profile = Vue.extend(toast);
      // 创建构造器实例
      const profile = new Profile({
        propsData: {
          hint_text: context
        }
      });
      // 将内容挂载至div上
      profile.$mount(document.createElement("div"));
      // 将渲染后的内容添加到body中
      document.body.appendChild(profile.$el);
      setTimeout(() => {
        document.body.removeChild(profile.$el);
      }, timeout * 1000);
    };
  }
};
