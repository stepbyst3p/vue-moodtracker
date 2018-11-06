<template>
  <form action="" class="mood-form" @submit.prevent="submitCurrentMood">
    <input type="text" autofocus v-model="currentMood"/>
    <button>Submit</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'MoodForm',
  data: function() {
    return {
      currentMood: ''
    }
  },
  computed: {
        ...mapState(['userProfile'])
    },
	methods: {
		submitCurrentMood() {
			fb.moodsCollection.add({
				createdOn: new Date(),
				currentMood: this.currentMood,
				userId: this.currentUser.uid
			}).then(ref => {
				this.post.content = ''
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
</script>

