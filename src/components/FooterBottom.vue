<script>
	import ButtonBackTopComponent from "./ButtonBackTopComponent.vue";
	export default {
		name: "FooterBottom",
		components: {
			ButtonBackTopComponent,
		},
	};
</script>

<template>
	<div class="container d-flex justify-content-between align-items-center">
		<div class="logo">
			<img src="/img/logo.png" alt="logo" />
		</div>
		<div>
			<ButtonBackTopComponent />
		</div>
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/components/app_footer.scss";
</style>
