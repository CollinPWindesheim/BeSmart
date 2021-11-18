import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/money",
    name: "Money",
    component: () => import("../views/Money.vue"),
  },
  {
    path: "/investing",
    name: "Investing",
    component: () => import("../views/Investing.vue"),
  },
  {
    path: "/saving",
    name: "Saving",
    component: () => import("../views/Saving.vue"),
  },
  {
    path: "/quizzes",
    name: "Quizzes",
    component: () => import("../views/Quizzes.vue"),
  },
  {
    path: "/quiz/:id",
    name: "Quiz",
    component: () => import("../views/Quiz.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
