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
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
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
