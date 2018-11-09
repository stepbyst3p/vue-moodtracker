<template>
	<ul>
		<li v-for="record in moodsList" :key="record.id">
			{{record.mood}}<br/>{{record.date}}
		</li>
	</ul>
</template>

<script>
export default {
	props: [
		'moodsList'
	]
}
</script>

<style>
</style>
