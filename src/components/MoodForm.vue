<template>
<div>
  <form action="" class="mood-form" @submit.prevent="submitCurrentMood">
    <input type="text" autofocus v-model="currentMood"/>
    <button>Submit</button>
  </form>
  <ul>
	<li v-for="mood in moodsList" :key="mood.id">{{mood}}</li>
  </ul>
</div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'MoodForm',
  data: function() {
    return {
	  currentMood: '',
	  moodsList: []
    }
  },
  computed: {
        ...mapState(['userProfile'])
    },
	methods: {
		submitCurrentMood() {
			this.moodsList.push(this.currentMood);
			this.currentMood = '';
		}
	}
}
</script>

