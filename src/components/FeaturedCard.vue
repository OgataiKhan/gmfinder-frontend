<script>
	import store from "../store/store.js";

	export default {
		props: ["gm"],
		data() {
			return {
				store,
			};
		},
		methods: {
			selectGm() {
				this.$emit("select", this.gm);
			},
		},
	};
</script>

<template>
	<div class="col col-md-6 col-lg-3 d-flex flex-column align-items-center">
		<router-link
			:to="{name: 'game-master'}"
			class="nav-link flex-grow-1 d-flex w-100"
			@click="selectGm">
			<div class="card d-flex flex-column w-100">
				<div class="img-container">
					<img
						:src="
							gm.profile_img
								? store.api.baseURL +
								  store.api.apiUrls.storage +
								  gm.profile_img
								: '/img/generic-avatar.jpg'
						"
						class="card-img-top"
						alt="profile pic" />
				</div>
				<div class="card-body flex-shrink-0">
					<h4>{{ gm.user.name }}</h4>
					<p>
						<span> {{ gm.game_systems[0].name }} </span>
					</p>
				</div>
			</div>
		</router-link>
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/components/featured_card.scss";
</style>
