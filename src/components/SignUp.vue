<template>
 	<form @submit.prevent>
		<h1>Get Started</h1>

		<label for="name">Name</label>
		<input v-model.trim="signupForm.name" type="text" placeholder="Savvy Apps" id="name" />

		<label for="title">Title</label>
		<input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />

		<label for="email2">Email</label>
		<input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />

		<label for="password2">Password</label>
		<input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />

		<button @click="signup" class="button">Sign Up</button>

		<div class="extras">
			<a>Back to Log In</a>
		</div>
	</form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'SignUp',
  data: function() {
    return {
      signupForm: {
            name: '',
            title: '',
            email: '',
            password: ''
        }
    }
  },
  methods: {
    signup() {
		fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
			this.$store.commit('setCurrentUser', user)

			// create user obj
			fb.usersCollection.doc(user.uid).set({
				name: this.signupForm.name,
				title: this.signupForm.title
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

