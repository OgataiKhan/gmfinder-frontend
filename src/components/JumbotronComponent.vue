<script>
	import JumbotronSearchComponent from "./JumbotronSearchComponent.vue";
	export default {
		name: "JumbotronComponent",
		data() {
			return {
				msg: "Find Your Guide to Adventure!",
			};
		},
		components: {
			JumbotronSearchComponent,
		},
	};
</script>

<template>
	<div class="jumbotron d-flex align-items-center">
		<JumbotronSearchComponent />
	</div>
</template>

<style scoped lang="scss">
	@import "/src/scss/components/jumbotron_component.scss";
</style>
