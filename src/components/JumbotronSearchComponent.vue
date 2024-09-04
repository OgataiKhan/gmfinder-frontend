<script>
	import SearchComponent from "./SearchComponent.vue";
	export default {
		name: "JumbotronSearchComponent",
		data() {
			return {
				msg: "Find Your Guide to Adventure",
			};
		},
		components: {
			SearchComponent,
		},
	};
</script>

<template>
	<div class="jumbotron-search col col-md-8 col-lg-6 mx-auto">
		<h3 class="text-center mb-3 font-medieval">
			{{ msg }}
		</h3>
		<!-- select element -->
		<SearchComponent />
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/components/jumbotron_search_component.scss";
</style>
