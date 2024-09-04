<script>
	import FooterTop from "./FooterTop.vue";
	import FooterBottom from "./FooterBottom.vue";

	export default {
		name: "AppFooter",
		components: {
			FooterTop,
			FooterBottom,
		},
	};
</script>

<template>
	<footer>
		<FooterTop />
		<FooterBottom />
	</footer>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/components/app_footer.scss";
</style>
