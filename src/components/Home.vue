<template>
  <div>
    <PageTitle/>
	<MoodForm/>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import PageTitle from './PageTitle';
import MoodForm from './MoodForm';
export default {
  components: {
    PageTitle,
    MoodForm
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
