<script>
	//import components
	import JumbotronComponent from "../components/JumbotronComponent.vue";
	import PromotedMastersComponent from "../components/PromotedMastersComponent.vue";
	import SectionInfoComponent from "../components/SectionInfoComponent.vue";
	export default {
		name: "HomePage",
		data() {
			return {
				msg: "Welcome to Your Vue.js App HOME PAGE!",
			};
		},
		components: {
			JumbotronComponent,
			PromotedMastersComponent,
			SectionInfoComponent,
		},
	};
</script>

<template>
	<div class="home flex-grow-1">
		<JumbotronComponent />
		<PromotedMastersComponent />
		<SectionInfoComponent />
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/pages/home_page.scss";
</style>
