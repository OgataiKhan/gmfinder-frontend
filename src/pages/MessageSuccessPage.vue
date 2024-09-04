<script>
	export default {
		name: "MessageSuccessPage",
		data() {
			return {
				msg: "Message sent successfully!",
			};
		},
	};
</script>

<template>
	<div class="msg-success flex-grow-1">
		<h1>{{ msg }}</h1>
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/pages/message_success.scss";
</style>
