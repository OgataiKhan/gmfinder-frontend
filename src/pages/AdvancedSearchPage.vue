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
};
</script>

<template>
  <main>
    <div class="container">
      <!-- row top -->
      <div class="row mx-auto mt-2 align-items-center" id="row-one">
        <!-- col for select -->
        <div class="col p-5">
          <h3 class="text-center mb-3">Advanced Search</h3>
          <SearchComponent />
        </div>
      </div>
      <!-- /row top -->
      <!-- row bottom -->
      <!-- create ul to show search results -->
      <div class="row mx-auto mt-2 align-items-center" id="row-two">
        <div class="col p-5">
          <h3 class="text-center mb-3">Search Results</h3>
          <ul>
            <li v-for="gm in store.gameMastersResults" :key="gm.id">
              <p>{{ gm }}</p>
              <!-- create card for each gm -->
              <div class="card d-flex flex-md-row">
                <div class="card-header"><img :src="gm.profile_img ? gm.profile_img : '/img/generic-avatar.jpg'"
                    class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ gm.user.name }}</h5>
                  <h6>Game Systems:
                    <span v-for="(system, index) in gm.game_systems" :key="index">
                      {{ system.name }}{{ index < gm.game_systems.length - 1 ? ', ' : '' }} </span>
                  </h6>
                  <h6>Max players: {{ gm.max_players }}</h6>
                  <p class="card-text">{{ gm.game_description }}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
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

#row-one {
  border: 2px solid $contrast-color;
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
</style>
