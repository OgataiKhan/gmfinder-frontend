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


      <!-- send message -->
      <div class="mt-3 text-center mb-3">
        <h3>Dispatch Your Scroll to {{ store.selectedGameMaster.user.name }}</h3>
      </div>
      <div class="col-8 mx-auto form-div">
        <form @submit.prevent="sendMessage">
          <div class="d-flex justify-content-between">
            <div class="my-4 col-5">
              <label for="userEmailAddress" class="form-label">Thy Name</label>
              <input type="text" class="form-control" id="userName" placeholder="Enter your name"
                v-model="formData.name" />
            </div>
            <div class="my-4 col-5">
              <label for="userEmailAddress" class="form-label">Raven-Email Address</label>
              <input type="email" class="form-control" id="userEmailAddress" placeholder="Enter your email address"
                v-model="formData.email" />
            </div>
          </div>
          <div class="mb-3">
            <label for="msgText" class="form-label">Thy Missive</label>
            <textarea class="form-control" id="msgText" rows="3" v-model="formData.text"></textarea>
          </div>
          <div class="py-3 d-flex">
            <button type="submit" class="mx-auto" @click.prevent="postMessage">Send Forth Thy Scroll</button>
          </div>
        </form>
      </div>



      <!-- Reviews -->
      <ReviewsComponent />
    </div>
    <div v-else class="text-center">
      <h1>Game Master not found</h1>
      <router-link :to="{ name: 'advanced-search' }" class="nav-link mt-3"><button class="btn-voi-orange">Go Back
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
