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
      contactForm: {
        name: '',
        message: '',
      },
    };
  },
  components: {
    ReviewsComponent,
    GmCardComponent,
  },
  methods: {
    sendMessage() {
      // Here handle the form submission.
      console.log('Form Data:', this.contactForm);

      // After sending the message, clear the form fields
      this.contactForm.name = '';
      this.contactForm.message = '';
    },
  },
  mounted() {
    // Fetch the game master details from the store
    // and display them in the game master information section.

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
          //console log
          console.log('Game Master:', this.store.selectedGameMaster);
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
      <!-- Contact Form -->
      <div class="mt-3 text-center mb-3">
        <h3>Dispatch Your Scroll to {{ store.selectedGameMaster.user.name }}</h3>
      </div>
      <div class="col-8 mx-auto form-div">
        <form @submit.prevent="sendMessage">
          <div class="d-flex justify-content-between">
            <div class="my-4 col-5">
              <label for="userEmailAddress" class="form-label">Thy Name</label>
              <input type="text" class="form-control" id="userName" placeholder="Enter your name"
                v-model="contactForm.name" />
            </div>
            <div class="my-4 col-5">
              <label for="userEmailAddress" class="form-label">Raven-Email Address</label>
              <input type="email" class="form-control" id="userEmailAddress" placeholder="Enter your email address"
                v-model="contactForm.name" />
            </div>
          </div>
          <div class="mb-3">
            <label for="msgText" class="form-label">Thy Missive</label>
            <textarea class="form-control" id="msgText" rows="3" v-model="contactForm.message"></textarea>
          </div>
          <div class="py-3 d-flex">
            <button type="submit" class="mx-auto">Send Forth Thy Scroll</button>
          </div>
        </form>

      </div>
      <div class="mt-4">
        <button type="submit">Back to Results</button>
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

.form-div {
  background-image: url('../assets/img/vintage-grunge.jpg');
  background-size: cover;
  background-position: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  color: $light-color;
}
</style>
