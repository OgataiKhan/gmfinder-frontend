<script>
	import store from "../store/store.js";
	//import axios
	import axios from "axios";
	//impor vuex mapState
	import {mapState, mapActions} from "vuex";
	//import SearchComponent
	import SearchComponent from "../components/SearchComponent.vue";
	//import gm card
	import GmCardComponent from "../components/GmCardComponent.vue";
	export default {
		name: "AdvancedSearchPage",
		data() {
			return {
				store,
				apiResponse: null,
			};
		},
		components: {
			SearchComponent,
			GmCardComponent,
		},
		methods: {
			selectGm(gm) {
				this.store.selectedGameMaster = gm;
				//redirect to game master page with query params
				this.$router.push({
					name: "game-master",
					query: {gameMaster: gm.slug},
				});
			},

			handleData(data) {
				this.apiResponse = data;
			},

			nextPage() {
				if (this.store.currentPage < this.store.lastPage) {
					this.store.currentPage++;
					this.$refs.SearchComponent.searchGm(
						this.store.selectedGameSystem,
						this.store.currentPage
					);
				}
			},
			previousPage() {
				if (this.store.currentPage > 1) {
					this.store.currentPage--;
					this.$refs.SearchComponent.searchGm(
						this.store.selectedGameSystem,
						this.store.currentPage
					);
				}
			},
			//This is a helper that allows us to call the updateSearchParams action from the store as if it were a method of this component
			...mapActions(["updateSearchParams"]),
		},
		created() {
			this.store.searchInitiated = false;
		},
		watch: {
			// Watch for changes in route query parameters
			"$route.query": {
				// Call handler immediately on component creation
				immediate: true,
				//the handler gets called when the route query parameters change and updates the store
				handler(newQuery) {
					this.updateSearchParams({
						page: newQuery.page || null,
						selectedGame: newQuery.gameSystem || null,
						selectedAvgRating: newQuery.avgRating || null,
						selectedMinReviews: newQuery.minReviews || null,
					});
				},
			},
		},
	};
</script>

<template>
	<main>
		<div class="container">
			<!-- row top -->
			<div class="row mx-auto mt-2 align-items-center">
				<!-- col for select -->
				<div class="col d-flex" id="advanced-search-top">
					<!-- search component with red to access method -->
					<div class="p-3 search-component col-9 mx-auto">
						<h3 class="text-center mb-3 mt-1 font-medieval">
							<strong>Advanced Search</strong>
						</h3>
						<SearchComponent
							@dataReceived="handleData"
							ref="SearchComponent"
							:advanced="true" />
					</div>
				</div>
			</div>
			<!-- /row top -->
			<!-- row bottom -->
			<!-- create ul to show search results -->
			<div class="row mx-auto mt-2 align-items-center">
				<div class="col mb-5">
					<h3
						v-if="this.store.searchInitiated"
						class="text-center my-4 text-black">
						<span class="font-medieval">Total results: </span>
						<span
							v-if="
								apiResponse && store.gameMastersResults.length
							"
							>{{ apiResponse.results.total }}</span
						>
					</h3>
					<ul class="d-flex gap-3 flex-column">
						<li v-for="gm in store.gameMastersResults" :key="gm.id">
							<!-- route link for clickable card -->
							<router-link
								:to="{name: 'game-master'}"
								class="nav-link"
								@click="selectGm(gm)">
								<GmCardComponent
									:gm="gm"
									:gmShow="false"
									:class="{
										promotedGm: gm.has_future_promotion,
									}" />
							</router-link>
						</li>
					</ul>
					<p
						v-if="
							store.gameMastersResults.length === 0 && apiResponse
						"
						class="text-center fst-italic">
						There's no loot here. Also, the chest was a mimic. Roll
						initiative.
					</p>
				</div>
				<!-- /row bottom -->
			</div>
			<!-- pagination -->
			<nav class="mb-3">
				<ul class="pagination d-flex justify-content-between px-3 pb-3">
					<!-- Previous -->
					<li>
						<div
							class="page-item"
							v-if="apiResponse && this.$route.query.page"
							v-show="apiResponse.results?.prev_page_url">
							<button class="page-link" @click="previousPage">
								Previous
							</button>
						</div>
					</li>
					<!-- Next -->
					<li>
						<div
							class="page-item"
							v-if="apiResponse && this.$route.query.page"
							v-show="apiResponse.results?.next_page_url">
							<button class="btn btn-info" @click="nextPage">
								Next
							</button>
						</div>
					</li>
				</ul>
			</nav>
			<!-- /pagination -->
		</div>
	</main>
</template>

<style scoped lang="scss">
	@use "../scss/helpers/variables" as *;
	@use "../scss/helpers/mixins" as *;
	@import "/src/scss/pages/advanced_search.scss";
</style>
