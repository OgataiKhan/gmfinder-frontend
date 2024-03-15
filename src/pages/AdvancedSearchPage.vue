<script>
import store from '../store/store.js';
//import axios
import axios from 'axios';
//impor vuex mapState
import { mapState, mapActions } from 'vuex';
//import SearchComponent
import SearchComponent from '../components/SearchComponent.vue';
//import gm card
import GmCardComponent from '../components/GmCardComponent.vue';
export default {
  name: 'AdvancedSearchPage',
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
        name: 'game-master',
        query: { gameMaster: gm.slug },
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
    ...mapActions(['updateSearchParams']),
  },
  created() {
    this.store.searchInitiated = false;
  },
  watch: {
    // Watch for changes in route query parameters
    '$route.query': {
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
              :advanced="true"
            />
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
            class="text-center my-4 text-black"
          >
            <span class="font-medieval">Total results: </span>
            <span v-if="apiResponse && store.gameMastersResults.length">{{
              apiResponse.results.total
            }}</span>
          </h3>
          <ul class="d-flex gap-3 flex-column">
            <li v-for="gm in store.gameMastersResults" :key="gm.id">
              <!-- route link for clickable card -->
              <router-link
                :to="{ name: 'game-master' }"
                class="nav-link"
                @click="selectGm(gm)"
              >
                <GmCardComponent
                  :gm="gm"
                  :gmShow="false"
                  :class="{ promotedGm: gm.has_future_promotion }"
                />
              </router-link>
            </li>
          </ul>
          <p
            v-if="store.gameMastersResults.length === 0 && apiResponse"
            class="text-center fst-italic"
          >
            There's no loot here. Also, the chest was a mimic. Roll initiative.
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
              v-show="apiResponse.results?.prev_page_url"
            >
              <button class="page-link" @click="previousPage">Previous</button>
            </div>
          </li>
          <!-- Next -->
          <li>
            <div
              class="page-item"
              v-if="apiResponse && this.$route.query.page"
              v-show="apiResponse.results?.next_page_url"
            >
              <button class="btn btn-info" @click="nextPage">Next</button>
            </div>
          </li>
        </ul>
      </nav>
      <!-- /pagination -->
    </div>
  </main>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;
@use '../scss/helpers/mixins' as *;

.card {
  background-color: $light-color-card;

  .card-header {
    background-color: transparent;

    .card-img-top {
      border-radius: 3%;
    }

    @media (min-width: 768px) {
      .card-img-top {
        width: 12rem;
        height: 12rem;
        object-fit: cover;
      }
    }

    @media (min-width: 992px) {
      .card-img-top {
        width: 300px;
        height: 300px;
      }
    }
  }
}

#advanced-search-top {
  background-image: url(../assets/img/jumbotron-image.jpeg);
  background-position: center;
  background-size: cover;
  color: $primary-color;
  margin-top: 20px;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.search-component {
  background-color: rgba(255, 255, 255, 0.6);
  padding: 3rem 1rem 4rem;
  border-radius: 10px;
}

.card.promotedGm {
  background-color: #fcebd6;
  //give golden box shadow
  box-shadow: 0 0 15px #e4a96b;
}

.card:hover {
  border: 1px solid $contrast-color;
  cursor: pointer;
  transition: border 0.2s;
  transition: transform 0.2s;
  //border shadow
  box-shadow: 0 0 10px $contrast-color;
  //make bigger
  transform: scale(1.02);
}

button {
  background-color: $contrast-color;
  color: $light-color;
  border: 1px solid $contrast-color;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 5px 20px;
}

button:hover {
  background-color: $light-color;
  color: $contrast-color;
  border-color: $contrast-color;
}

h6 {
  font-weight: bold;
}
</style>
