<script>
	export default {
		name: "ErrorPage",
		data() {
			return {
				msg: "Oops! The page you're looking for doesn't exist.",
			};
		},
	};
</script>

<template>
	<div class="error-page flex-grow-1">
		<h1>404 - Page Not Found</h1>
		<p>{{ msg }}</p>
		<router-link to="/">Go Back Home</router-link>
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/pages/error.scss";
</style>
