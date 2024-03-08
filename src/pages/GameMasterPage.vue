<script>
import ReviewsComponent from '../components/ReviewsComponent.vue';
import GmCardComponent from '../components/GmCardComponent.vue';
import store from '../store/store.js';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      msg: 'Summon the Lorekeeper',
      formData: {
        text: null,
        name: null,
        email: null,
      }
    };
  },
  components: {
    ReviewsComponent,
    GmCardComponent,
  },
  methods: {
    postMessage() {
      const data = {
        game_master_id: store.selectedGameMaster.id,
        text: this.formData.text,
        name: this.formData.name,
        email: this.formData.email
      }
      axios.post(this.store.api.baseURL + this.store.api.apiUrls.messages, data).then(response => {
        console.log('inviato!')
      }).catch(error => {
        console.error(error)
      })
    }
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
      <div class="my-3 container text-start">
        <button type="submit">Back to Search</button>
      </div>
    </div>
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
