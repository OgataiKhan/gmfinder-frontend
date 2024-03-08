<script>
import store from '../store/store.js';
//import axios
import axios from 'axios';
//import SearchComponent
import SearchComponent from '../components/SearchComponent.vue';
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
            <h3 class="text-center mb-4">Advanced Search</h3>
            <SearchComponent @dataReceived="handleData" ref="SearchComponent" />
          </div>
        </div>
      </div>
      <!-- /row top -->
      <!-- row bottom -->
      <!-- create ul to show search results -->
      <div class="row mx-auto mt-2 align-items-center">
        <div class="col mb-5">
          <h3 class="text-center my-5 text-black" v-if="apiResponse && store.gameMastersResults.length">Total results:
            {{
              apiResponse.results.total }}</h3>
          <ul class="d-flex gap-3 flex-column">
            <li v-for="gm in store.gameMastersResults" :key="gm.id">
              <!-- route link f9or clickable card -->
              <router-link :to="{ name: 'game-master' }" class="nav-link" @click="selectGm(gm)">
                <!-- create card for each gm -->
                <div class="card d-flex flex-md-row">
                  <div class="card-header border-bottom-0">
                    <img :src="gm.profile_img
              ? this.store.api.baseURL +
              this.store.api.apiUrls.storage +
              gm.profile_img
              : '/img/generic-avatar.jpg'
              " class="card-img-top" alt="profile pic" />
                  </div>
                  <div class="card-body">
                    <div class="text-center text-md-start">
                      <h4 class="card-title">{{ gm.user.name }}</h4>
                    </div>
                    <hr />
                    <div>
                      <h6>Game Systems</h6>
                      <p>
                        <span v-for="(system, index) in gm.game_systems" :key="index">
                          {{ system.name
                          }}{{ index < gm.game_systems.length - 1 ? ', ' : '' }} </span>
                      </p>
                    </div>
                    <div>
                      <h6>
                        Location
                      </h6>
                      <p>{{ gm.location }}
                      </p>
                    </div>
                    <div>
                      <h6>
                        Max Players
                      </h6>
                      <p>{{ gm.max_players }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- /create card for each gm -->
              </router-link>
            </li>
          </ul>
        </div>
        <!-- /row bottom -->
      </div>
      <!-- pagination -->
      <nav class="mb-3">
        <ul class="pagination d-flex justify-content-between px-3 pb-3">
          <!-- Previous -->
          <li>
            <div class="page-item" v-if="apiResponse && this.$route.query.page"
              v-show="apiResponse.results?.prev_page_url">
              <button class="page-link" @click="previousPage">Previous</button>
            </div>
          </li>
          <!-- Next -->
          <li>
            <div class="page-item" v-if="apiResponse && this.$route.query.page"
              v-show="apiResponse.results?.next_page_url">
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
