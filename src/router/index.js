import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import Home from "@/components/Home";
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";
import Success from "@/components/Success";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/success",
      name: "Success",
      component: Success,
      meta: {
        requireAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requireAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
