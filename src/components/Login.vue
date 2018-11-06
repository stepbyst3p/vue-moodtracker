<template>
	<div class="authentication">
		<form action="" @submit.prevent="login" v-if="showLoginForm">
			<p>Login</p>
			<input type="text" placeholder="Email" v-model.trim="loginForm.email">
			<input type="password" placeholder="password" v-model.trim="loginForm.password">
			<button>Login</button>
			<p><a @click="toggleForm">Create an account</a></p>
		</form>

		<form action="" @submit.prevent="signup" v-else>
			<p>SignUp</p>
			<input type="text" placeholder="Email" v-model.trim="signupForm.email">
			<input type="password" placeholder="password" v-model.trim="signupForm.password">
			<button>Login</button>
			<p><a @click="toggleForm">Already have account?</a></p>
		</form>
	</div>
</template>

<script>
const fb = require('../firebaseConfig.js')

export default {
  name: 'Login',
  data: function() {
    return {
		showLoginForm: true,
		loginForm: {
			email: '',
      		password: ''
		},
		signupForm: {
			email: '',
      		password: ''
		}
    }
  },
  methods: {
	toggleForm() {
		this.showLoginForm = !this.showLoginForm;
	},
    login() {
		fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
			this.$store.commit('setCurrentUser', user)
			this.$store.dispatch('fetchUserProfile')
			this.$router.push('/home')
		}).catch(err => {
			console.log(err)
		})
	},
	signup() {
		fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
			this.$store.commit('setCurrentUser', user.user)
				// create user obj
				fb.usersCollection.doc(user.uid).set({
					email: this.signupForm.email
				}).then(() => {
					this.$store.dispatch('fetchUserProfile')
					this.$router.push('/home')
				}).catch(err => {
					console.log(err)
				})
			}).catch(err => {
				console.log(err)
			})
		}
    }
}
</script>

