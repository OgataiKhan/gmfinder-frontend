<script>
	import store from "../store/store.js";
	import axios from "axios";

	export default {
		name: "GmMessageComponent",
		data() {
			return {
				store,
				formData: {
					text: null,
					name: null,
					email: null,
				},
				messageSuccess: false,
			};
		},
		methods: {
			postMessage() {
				const data = {
					game_master_id: store.selectedGameMaster.id,
					text: this.formData.text,
					name: this.formData.name,
					email: this.formData.email,
				};
				axios
					.post(
						this.store.api.baseURL +
							this.store.api.apiUrls.messages,
						data
					)
					.then((response) => {
						//empty the form data
						this.formData.text = null;
						this.formData.name = null;
						this.formData.email = null;
						this.messageSuccess = true;
					})
					.catch((error) => {
						console.error(error);
					});
			},
			//reset messageSuccess
			messageReset() {
				this.messageSuccess = false;
			},
		},
	};
</script>

<template>
	<div v-if="store.selectedGameMaster" class="message-gm">
		<!-- send message -->
		<div class="col-8 mx-auto form-div" v-if="!messageSuccess">
			<div class="text-center my-4">
				<h3>
					Dispatch Your Scroll to
					{{ store.selectedGameMaster.user.name }}
				</h3>
			</div>
			<form @submit.prevent="sendMessage">
				<div>
					<div class="py-2">
						<label for="userEmailAddress" class="form-label"
							>Thy Name</label
						>
						<input
							type="text"
							class="form-control input-focus-orange"
							id="userName"
							placeholder="Enter your name"
							required
							minlength="3"
							maxlength="100"
							v-model="formData.name" />
					</div>
					<div class="py-2">
						<label for="userEmailAddress" class="form-label"
							>Raven-Email Address</label
						>
						<input
							type="email"
							class="form-control input-focus-orange"
							id="userEmailAddress"
							placeholder="Enter your email address"
							required
							v-model="formData.email" />
					</div>
				</div>
				<div class="py-2">
					<label for="msgText" class="form-label">Thy Missive</label>
					<textarea
						class="form-control input-focus-orange"
						id="msgText"
						rows="3"
						v-model="formData.text"
						required
						minlength="2"></textarea>
				</div>
				<div class="py-2 d-flex">
					<button
						type="submit"
						class="w-100"
						@click.prevent="postMessage">
						Send Forth Thy Scroll
					</button>
				</div>
			</form>
		</div>
		<!-- if message success is true -->
		<div class="col-8 mx-auto form-div" v-else>
			<h3 class="text-center">Your message has been sent!</h3>
			<div class="mt-4 text-center">
				<button type="submit" @click="messageReset">
					Send Another Message
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@import "/src/scss/components/gm_message.scss";
</style>
