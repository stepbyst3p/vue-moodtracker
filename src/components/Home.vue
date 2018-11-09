<template>
  <div>
    <PageTitle/>
	<MoodForm/>
    <button v-on:click="logout">Logout</button>
	<Calendar/>
  </div>
</template>

<script>
import firebase from 'firebase';
import PageTitle from '@/components/PageTitle';
import MoodForm from '@/components/MoodForm';
import Calendar from '@/components/Calendar';

export default {
  components: {
    PageTitle,
	MoodForm,
	Calendar
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  }
}
</script>
