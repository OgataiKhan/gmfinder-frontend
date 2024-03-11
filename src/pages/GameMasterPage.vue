<script>
import ReviewsComponent from '../components/ReviewsComponent.vue';
import GmCardComponent from '../components/GmCardComponent.vue';
import store from '../store/store.js';
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
import ShowReviewsComponent from '../components/ShowReviewsComponent.vue';

export default {
  data() {
    return {
      store,
      msg: 'Summon the Lorekeeper',
      formData: {
        rating_id: null,
      },
      ratingSuccess: false,
    };
  },
  components: {
    ReviewsComponent,
    GmCardComponent,
    ShowReviewsComponent,
  },
  methods: {
    postRating() {
      const data = {
        rating_id: this.formData.rating_id,
        game_master_id: store.selectedGameMaster.id,
      };

      axios.post(this.store.api.baseURL + this.store.api.apiUrls.ratings, data)
        .then(response => {
          console.log('Selected gm', store.selectedGameMaster.id);
          console.log('Rating selected', this.formData.rating_id);


          this.ratingSuccess = true;
          console.log("Rating submitted successfully", response.data);
          // Reset formData
          this.formData.rating_id = null;
        })
        .catch(error => {
          console.error("Error submitting review", error);
        });
    },






    //method to send message to game master
    // postMessage() {
    //   const data = {
    //     game_master_id: store.selectedGameMaster.id,
    //     text: this.formData.text,
    //     name: this.formData.name,
    //     email: this.formData.email
    //   }
    //   axios.post(this.store.api.baseURL + this.store.api.apiUrls.messages, data).then(response => {
    //     console.log('inviato!')
    //   }).catch(error => {
    //     console.error(error)
    //   })
    // },
    //method to go back to the search page
    backToSearch() {
      // Use the Vuex store's state to navigate back with the stored search parameters
      this.$router.push({
        name: 'advanced-search',
        query: {
          //we can access vuex state directly from the component because of the mapState helper in computed
          gameSystem: this.selectedGame,
          page: this.page,
        },
      });
    },
  },
  mounted() {
    // check if query params are present, and store the game master in the store
    if (this.$route.query.gameMaster) {
      const slug = this.$route.query.gameMaster;
      //make API call to fetch game master details
      axios
        .get(
          this.store.api.baseURL +
          this.store.api.apiUrls.game_masters +
          '/' +
          slug
        )
        .then((response) => {
          // Store the fetched game master in the store
          this.store.selectedGameMaster = response.data.result;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  computed: {
    //this creates a computed property that maps the store's state to the component's data i.e. a computed property that changes when the store's state (data) changes
    ...mapState({
      //creates a computed property named 'page' that reflects state.searchParams.page
      page: state => state.searchParams.page,
      //creates a computed property named 'selectedGame' that reflects state.searchParams.selectedGame
      selectedGame: state => state.searchParams.selectedGame,
    }),
  },
};
</script>

<template>
  <div class="gm-page flex-grow-1">
    <div class="container p-2 mb-3" v-if="store.selectedGameMaster">
      <h1>{{ msg }}</h1>
      <GmCardComponent v-if="store.selectedGameMaster" :gm="store.selectedGameMaster" :gmShow="true" />
      <!-- Reviews -->
      <div class="review-container mt-4">
        <ReviewsComponent />
      </div>


      <!-- select to give rating -->
      <div class="my-3 container text-start">
        <form>
          <select name="rating" id="rating" v-model="formData.rating_id">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div class="py-3 d-flex">
            <button type="submit" class="mx-auto" @click.prevent="postRating">
              send rating
            </button>
          </div>
        </form>
      </div>

      <div class="show-review-container">
        <ShowReviewsComponent />
      </div>




      <div class="my-3 container text-start">
        <button type="submit" @click="backToSearch">Back to Search</button>
      </div>
    </div>
    <!-- if gm not found -->
    <div v-else class="text-center">
      <h1>Game Master not found</h1>
      <router-link :to="{ name: 'advanced-search' }" class="nav-link mt-3"><button>Back to
          Search</button></router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;
@use '../scss/helpers/mixins' as *;

.gm-page {
  background-color: $light-color;

  h1 {
    color: $primary-color;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>
