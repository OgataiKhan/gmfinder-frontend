<script>
import store from '../store/store.js';
//import axios
import axios from 'axios';
export default {
  name: 'SearchComponent',
  data() {
    return {
      store,
      validationError: false,
      urlPage: null,
    };
  },
  props: {
    advanced: {
      type: Boolean,
      default: false,
    },
  },
  // methods
  methods: {
    searchGm(
      gameSystem = this.store.selectedGameSystem,
      page = this.store.currentPage,
      avgRating = this.store.selectedAvgRating,
      minReviews = this.store.selectedMinReviews
    ) {
      this.store.searchInitiated = true;
      if (gameSystem) {
        this.validationError = false;
        // Check and correct for negative page numbers
        let correctedPage = Math.max(1, page);

        //base params
        let params = {
          key: gameSystem,
          page: correctedPage,
        };

        //if avgRating is present, add it to the params
        if (avgRating) {
          params.min_average_rating = avgRating;
        }

        //if minReviews is present, add it to the params
        if (minReviews) {
          params.min_reviews = minReviews;
        }

        axios
          .get(this.store.api.baseURL + this.store.api.apiUrls.game_masters, {
            params,
          })
          .then((response) => {
            this.store.gameMastersResults = response.data.results.data;
            this.store.totalResults = response.data.results.total;
            this.store.lastPage = response.data.results.last_page;

            // Check if the initially requested page was out of bounds
            if (page < 1 || page > this.store.lastPage) {
              this.$router.push({
                name: 'advanced-search',
                query: {
                  gameSystem: gameSystem,
                  page: page < 1 ? 1 : this.store.lastPage,
                  avgRating: avgRating ? avgRating : undefined,
                  minReviews: minReviews ? minReviews : undefined,
                },
              });
            } else {
              this.$router.push({
                name: 'advanced-search',
                query: {
                  gameSystem: gameSystem,
                  page: correctedPage,
                  avgRating: avgRating ? avgRating : undefined,
                  minReviews: minReviews ? minReviews : undefined,
                },
              });
            }

            this.$emit('dataReceived', response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.validationError = true;
      }
    },
  },
  watch: {
    '$route.query.gameSystem'(newVal) {
      if (newVal) {
        this.searchGm(newVal, this.$route.query.page);
      }
    },

    '$route.query.page'(newVal) {
      if (newVal && !isNaN(newVal)) {
        this.store.currentPage = parseInt(newVal);
        this.searchGm(this.store.selectedGameSystem, newVal);
      }
    },
  },
  mounted() {
    //call api to fetch game options
    axios
      .get(this.store.api.baseURL + this.store.api.apiUrls.game_systems)
      .then((response) => {
        this.store.gameSystems = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });

    //if query is present, call searchGm
    if (
      this.$route.query.gameSystem &&
      this.$route.query.page &&
      !isNaN(this.$route.query.page)
    ) {
      if (this.$route.query.page < 1) {
        this.urlPage = 1;
      } else if (this.$route.query.page > this.store.lastPage) {
        this.urlPage = this.store.lastPage;
      } else {
        this.urlPage = this.$route.query.page;
      }

      this.store.currentPage = this.urlPage;
      this.searchGm(
        this.$route.query.gameSystem,
        this.$route.query.page,
        this.$route.query.avgRating,
        this.$route.query.minReviews
      );
      this.store.selectedGameSystem = this.$route.query.gameSystem;
      this.store.selectedAvgRating = this.$route.query.avgRating;
      this.store.selectedMinReviews = this.$route.query.minReviews;
    } else {
      //if the query is not present, clear the gameMastersResults
      this.store.gameMastersResults = [];
      this.store.selectedGameSystem = '';
      this.store.selectedAvgRating = '';
      this.store.selectedMinReviews = '';
    }
  },
};
</script>

<template>
  <div
    class="d-flex align-items-center flex-column justify-content-center search-component-box"
  >
    <form
      @submit.prevent="searchGm(store.selectedGameSystem)"
      class="d-flex flex-column align-items-center mx-auto w-75 mb-2"
    >
      <!-- Select Game System -->
      <label for="gameSystem" class="form-label mt-2 visually-hidden"
        >Game System</label
      >
      <select
        class="form-select mt-0 my-select input-focus-orange"
        aria-label="Default select example"
        v-model="store.selectedGameSystem"
      >
        <option disabled value="">Select a Game System</option>
        <option v-for="game in store.gameSystems" :value="game.id">
          {{ game.name }}
        </option>
      </select>
      <!-- Validation Message -->
      <div v-if="validationError" class="validation-alert align-self-start">
        Please select a game system
      </div>
      <!-- /Select Game System -->
      <div
        class="d-flex flex-column align-items-center justify-content-center flex-md-row w-100"
        v-if="advanced"
      >
        <!-- Average Rating Select -->
        <div class="d-flex flex-column align-items-center">
          <label for="avgRating" class="form-label mt-2">Average Rating</label>
          <select
            class="form-select avg-rating input-focus-orange"
            v-model="store.selectedAvgRating"
          >
            <option disabled value="">Select Average Rating</option>
            <option value="">Any Rating</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5</option>
          </select>
        </div>

        <!-- /Average Rating Select -->
        <!-- Input number reviews -->
        <div class="d-flex flex-column align-items-center">
          <label class="form-label mt-2">Min Reviews</label>
          <input
            type="number"
            class="form-control min-reviews input-focus-orange"
            placeholder="Min Reviews"
            min="0"
            v-model="store.selectedMinReviews"
          />
        </div>
      </div>
      <!-- /Input number reviews -->
      <!-- submit button -->
      <div class="mt-1">
        <button type="submit" class="mx-auto mt-4 mt-md-2">Search</button>
      </div>
      <!-- /submit button -->
    </form>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;

.validation-alert {
  color: $danger-color;
  font-size: 0.8rem;
  margin: 0;
  // position: absolute;
  top: calc(50% + 17px);
}

.search-component-box {
  position: relative;
}

.min-reviews,
.avg-rating {
  width: 50%;
}
</style>
