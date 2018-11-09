<template>
<div>
  <form action="" class="mood-form" @submit.prevent="submitCurrentMood">
    <input type="text" autofocus v-model="moodRecord.mood" required/>
    <button>Submit</button>
  </form>
  <Calendar :moodsList="moodsList"/>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Calendar from '@/components/Calendar'
const fb = require('../firebaseConfig.js')

export default {
	components: {
		Calendar
	},
	name: 'MoodForm',
	data: function() {
		return {
			moodRecord: {
				mood: '',
				date: new Date,
			},
			moodsList: []
		}
	},
  	computed: {
		...mapState(['userProfile'])
	},
	methods: {
		submitCurrentMood() {
			this.moodsList.push({
				mood: this.moodRecord.mood,
				date: this.moodRecord.date
			});
			this.moodRecord.mood = '';
			this.moodRecord.date = new Date;
		}
	}
}
</script>

