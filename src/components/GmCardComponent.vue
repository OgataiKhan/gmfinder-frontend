<script>
import store from "../store/store.js";
// Import Luxon
import { DateTime } from "luxon";
import axios from 'axios';

export default {
  name: "GmCardComponent",

  data() {
    return {
      store,
      formData: {
        rating_id: null,
      },
      ratingSuccess: false,
    };
  },

  props: {
    gm: {
      type: Object,
      required: true,
    },
    gmShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goToGmMessagePage(slug) {
      this.$router.push({ name: "message-gamemaster", params: { slug } });
    },
    formatLocalDate(dateStr) {
      return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATE_MED);
    },
    postRating() {
      const data = {
        rating_id: this.formData.rating_id,
        game_master_id: store.selectedGameMaster.id,
      };

      axios.post(this.store.api.baseURL + this.store.api.apiUrls.ratings, data)
        .then(response => {
          console.log('Selected gm', store.selectedGameMaster.id);
          console.log('Rating selected', this.formData.rating_id);


          this.ratingSuccess = true;
          console.log("Rating submitted successfully", response.data);
          // Reset formData
          this.formData.rating_id = null;
        })
        .catch(error => {
          console.error("Error submitting review", error);
        });
    },
  },
};
</script>

<template>
  <!-- create card for each gm -->
  <div class="card d-flex flex-md-row">
    <div class="card-header border-bottom-0">
      <img :src="gm.profile_img
        ? this.store.api.baseURL +
        this.store.api.apiUrls.storage +
        gm.profile_img
        : '/img/generic-avatar.jpg'
        " class="card-img-top" alt="profile pic" />
      <!-- button to send msg, route to GmMessagePage -->
      <div class="card-button mt-4 text-center" v-if="gmShow">
        <button @click="goToGmMessagePage(store.selectedGameMaster.slug)" class="w-100">
          Send Message
        </button>
        <!-- select to give rating -->
        <div class="my-3 text-start">
          <form>
            <label for="rating">Rate this GM</label>
            <select name="rating" id="rating" v-model="formData.rating_id" class="form-select w-100 input-focus-orange">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div class="py-3 d-flex">
              <button type="submit" class="mx-auto" @click.prevent="postRating">
                Send Rating
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="text-center text-md-start">
        <h4 class="card-title">{{ gm.user.name }} <span v-if="gm.has_future_promotion"> <i
              class="bi bi-stars"></i></span></h4>
      </div>
      <hr />
      <div>
        <h6>Game Systems</h6>
        <p>
          <span v-for="(system, index) in gm.game_systems" :key="index">
            {{ system.name
            }}{{ index < gm.game_systems.length - 1 ? ", " : "" }} </span>
        </p>
      </div>
      <div>
        <h6>Location</h6>
        <p>{{ gm.location }}</p>
      </div>
      <div>
        <h6>Max Players</h6>
        <p>{{ gm.max_players }}</p>
      </div>
      <div>
        <h6>Average Rating</h6>
        <p>{{ gm.average_rating === 0 ? 'None yet' : gm.average_rating }}</p>
      </div>
      <div class="gm-show" v-if="gmShow">
        <div>
          <h6>Availability</h6>
          <p v-html="gm.is_available
        ? 'Available <span style=\'color:green;\'>●</span>'
        : 'Not Available <span style=\'color:red;\'>●</span>'
        "></p>
        </div>
        <div>
          <h6>Campaign Description</h6>
          <p>{{ gm.game_description }}</p>
        </div>
        <div>
          <h6>Game Master Since</h6>
          <p>{{ formatLocalDate(gm.created_at) }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- ////create card for each gm -->
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;
@use "../scss/helpers/mixins" as *;

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

  .bi-stars {
    color: #38bebe;
  }
}
</style>
