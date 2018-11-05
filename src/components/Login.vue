<template>
  <form action="" @submit.prevent="login">
    <p>Login</p>
    <input type="text" placeholder="Email" v-model.trim="loginForm.email">
    <input type="password" placeholder="password" v-model.trim="loginForm.password">
    <button>Login</button>
    <p><router-link to="/signup">Create an account</router-link></p>
  </form>
</template>

<script>
const fb = require('../firebaseConfig.js')

export default {
  name: 'Login',
  data: function() {
    return {
		loginForm: {
			email: '',
      		password: ''
		}
    }
  },
  methods: {
    login() {
		fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
			this.$store.commit('setCurrentUser', user)
			this.$store.dispatch('fetchUserProfile')
			this.$router.push('/home')
		}).catch(err => {
			console.log(err)
		})
	}
  }
}
</script>

