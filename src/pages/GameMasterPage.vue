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
  <div class="gm-page flex-grow-1" v-cloak>
    <div class="container p-2 mb-3" v-if="store.selectedGameMaster">
      <h1>{{ msg }}</h1>
      <GmCardComponent v-if="store.selectedGameMaster" :gm="store.selectedGameMaster" :gmShow="true" />



      <!-- Reviews OffCanvas -->

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Review</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ReviewsComponent />
        </div>
      </div>
      <!-- write review button -->
      <div class="d-flex align-items-center justify-content-between py-3">
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">
          Write a Review
        </button>
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">
          Send a Message
        </button>
      </div>
    </div>
    <div v-else class="text-center">
      <h1>Game Master not found</h1>
      <router-link :to="{ name: 'advanced-search' }" class="nav-link mt-3"><button>Back to
          Search</button></router-link>
    </div>
    <!-- Show Reviews -->
    <div class="show-review-container">
      <ShowReviewsComponent />
    </div>
    <div class="my-3 container text-start">
      <button type="submit" @click="backToSearch">Back to Search</button>
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


// media queries for offcanvas. mobile first


@media (min-width: 768px) {
  .offcanvas {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .offcanvas {
    width: 25%;
  }
}
</style>
