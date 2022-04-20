import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import testOneView from "../views/TestOneView.vue";
import testTwoView from "../views/TestTwoView.vue";
import testThreeView from "../views/TestThreeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  { 
    path: "/test-One",
    name: "test-One",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestOneView.vue"),
  },
  { 
    path: "/test-Two",
    name: "test-Two",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestTwoView.vue"),
  },
  { 
    path: "/test-Three",
    name: "test-Three",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestThreeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
