<script>
import store from '../store/store.js';
import axios from 'axios';
export default {
  name: 'ReviewsComponent',
  data() {
    return {
      msg: 'Write your review!',
      store,
      formData: {
        text: null,
        name: null,
        email: null,
      },
      reviewSuccess: false,
    };
  },
  methods: {
    sendReview() {
      const data = {
        game_master_id: store.selectedGameMaster.id,
        text: this.formData.text,
        name: this.formData.name,
        email: this.formData.email,
      };
      axios
        .post(this.store.api.baseURL + this.store.api.apiUrls.reviews, data)
        .then((response) => {
          //empty the form data
          this.formData.text = null;
          this.formData.name = null;
          this.formData.email = null;
          this.reviewSuccess = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    reviewReset() {
      this.reviewSuccess = false;
    },
  },
};
</script>

<template>
  <div v-if="store.selectedGameMaster">
    <!-- send message -->
    <div class="col-8 mx-auto form-div" v-if="!reviewSuccess">
      <div>
        <h3 class="pt-2">{{ msg }}</h3>
      </div>
      <form @submit.prevent="sendReview">
        <div>
          <div class="py-2">
            <label for="userName" class="form-label">Thy Name</label>
            <input type="text" class="form-control input-focus-orange" id="userName" placeholder="Enter your name"
              v-model="formData.name" minlength="3" maxlength="100" required />
          </div>
          <div class="py-2">
            <label for="userEmailAddress" class="form-label">Raven-Email Address</label>
            <input type="email" class="form-control input-focus-orange" id="userEmailAddress"
              placeholder="Enter your email address" required v-model="formData.email" />
          </div>
        </div>
        <div class="py-2">
          <label for="msgText" class="form-label">Thy Missive</label>
          <textarea class="form-control input-focus-orange" id="msgText" rows="3" v-model="formData.text" required
            minlength="2"></textarea>
        </div>
        <div class="py-3 d-flex">
          <button type="submit" class="mx-auto" @click.prevent="sendReview">
            Send your Review
          </button>
        </div>
      </form>
    </div>
    <!-- if message success is true -->
    <div class="col-8 mx-auto form-div" v-else>
      <h3 class="text-center">Your review has been sent!</h3>
      <div class="mt-4 d-flex justify-content-center">
        <button type="submit" @click="reviewReset">Send Another Review</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
