import Vue from "vue";
import VueRouter from "vue-router";
import { getAuth } from "firebase/auth";

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
    meta: {
      requiresAuth: true
    }

  },
  {
    path: "/investing",
    name: "Investing",
    component: () => import("../views/Investing.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/saving",
    name: "Saving",
    component: () => import("../views/Saving.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/quizzes",
    name: "Quizzes",
    component: () => import("../views/Quizzes.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/quiz/:id",
    name: "Quiz",
    component: () => import("../views/Quiz.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/course/:id",
    name: "CourseView",
    component: () => import("../views/CourseView.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/grades",
    name: "Grades",
    component: () => import("../views/Grades.vue"),
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!getAuth().currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (getAuth().currentUser) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    } else {
      next()
    }
  } else {
    next();
  }
})

export default router;
