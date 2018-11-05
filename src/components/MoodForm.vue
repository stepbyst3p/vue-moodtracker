<template>
  <form action="" class="mood-form">
    <input type="text" autofocus v-model="currentMood"/>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: 'MoodForm',
  data: function() {
    return {
      currentMood: ''
    }
  },
  methods: {
    submitCurrentMood: function(e) {
      e.preventDefault();
    }
  }
}
</script>

