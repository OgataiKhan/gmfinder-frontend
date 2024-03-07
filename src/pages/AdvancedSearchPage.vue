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
  },
};
</script>

<template>
  <main>
    <div class="container">
      <!-- row top -->
      <div class="row mx-auto mt-2 align-items-center">
        <!-- col for select -->
        <div class="col p-5" id="row">
          <h3 class="text-center mb-3 text-black">Advanced Search</h3>
          <SearchComponent />
        </div>
      </div>
      <!-- /row top -->
      <!-- row bottom -->
      <!-- create ul to show search results -->
      <div class="row mx-auto mt-2 align-items-center">
        <div class="col mb-5">
          <h3 class="text-center my-5 text-black">Search Results</h3>
          <ul class="d-flex gap-3 flex-column">
            <li v-for="gm in store.gameMastersResults" :key="gm.id">
              <!-- route link f9or clickable card -->
              <router-link
                :to="{ name: 'game-master' }"
                class="nav-link"
                @click="selectGm(gm)"
              >
                <!-- create card for each gm -->
                <div class="card d-flex flex-md-row">
                  <div class="card-header border-bottom-0">
                    <img
                      :src="
                        gm.profile_img
                          ? this.store.api.baseURL +
                            this.store.api.apiUrls.storage +
                            gm.profile_img
                          : '/img/generic-avatar.jpg'
                      "
                      class="card-img-top"
                      alt="profile pic"
                    />
                  </div>
                  <div class="card-body">
                    <div class="text-center text-md-start">
                      <h4 class="card-title">{{ gm.user.name }}</h4>
                    </div>
                    <hr />
                    <h6>
                      Game Systems:
                      <span
                        v-for="(system, index) in gm.game_systems"
                        :key="index"
                      >
                        {{ system.name
                        }}{{ index < gm.game_systems.length - 1 ? ', ' : '' }}
                      </span>
                    </h6>
                    <h6>
                      Max players: <span>{{ gm.max_players }}</span>
                    </h6>
                    <p class="card-text">{{ gm.game_description }}</p>
                  </div>
                </div>
                <!-- /create card for each gm -->
              </router-link>
            </li>
          </ul>
        </div>
        <!-- /row bottom -->
      </div>
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

#row {
  background-image: url(../assets/img/jumbotron-image.jpeg);
  background-position: center;
  border-radius: 10px;
  margin-top: 20px;
}

.card:hover {
  border: 1px solid $contrast-color;
  cursor: pointer;
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

  span {
    font-weight: normal;
  }
}
</style>
