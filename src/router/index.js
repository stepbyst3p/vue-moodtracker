import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import Home from "@/components/Home";
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
	const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
	const currentUser = firebase.auth().currentUser;

	if (requiresAuth && !currentUser) {
		next("/login");
	} else if (requiresAuth && currentUser) {
		next();
	} else {
		next();
	}
});

export default router;
