import Vue from "vue";
import VueRouter from "vue-router";

// push 出错也是同样的方式去修改
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// push 出错也是同样的方式去修改
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const Home = () => import("@/views/home/Home.vue");
const List = () => import("@/views/list/List.vue");
const Add = () => import("@/views/add/Add.vue");
const Cart = () => import("@/views/cart/Cart.vue");
const Mine = () => import("@/views/mine/Mine.vue");


const detail = () => import("@/views/detail/detail.vue");

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/detail", redirect: "/home" },

  { path: "/home", component: Home },
  { path: "/list", component: List },
  { path: "/add", component: Add },
  { path: "/cart", component: Cart },
  { path: "/mine", component: Mine },
  {
    path: "/detail/:key",

    component: detail

  }
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes
});

export default router;
