<script>
import store from "../store/store.js";
// Import Luxon
import { DateTime } from "luxon";
import axios from "axios";

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
    }
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

      axios
        .post(this.store.api.baseURL + this.store.api.apiUrls.ratings, data)
        .then((response) => {
          console.log("Selected gm", store.selectedGameMaster.id);
          console.log("Rating selected", this.formData.rating_id);

          this.ratingSuccess = true;
          console.log("Rating submitted successfully", response.data);
          // Reset formData
          this.formData.rating_id = null;
        })
        .catch((error) => {
          console.error("Error submitting review", error);
        });
    },
  },
  computed: {
    shieldRating() {
      const rating = this.gm.average_rating;

      if (rating === 0) {
        return [];
      }
      // Round to the nearest half
      const roundedRating = Math.round(rating * 2) / 2;
      const shields = [];

      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(roundedRating)) {
          shields.push('full');
        } else if (i - 0.5 === roundedRating) {
          shields.push('half');
        } else {
          shields.push('empty');
        }
      }

      return shields;
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
        <!-- select to give rating -->
        <div class="my-3 text-start">
          <!-- <form>
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
          </form> -->
          <div class="d-flex justify-content-around flex-md-column bg-light border icon-container">
            <!-- review icon -->
            <div class="d-flex align-items-center p-1 flex-grow-1 justify-content-center" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasReview" aria-controls="offcanvasExample">
              <i class="bi bi-chat-left-text-fill gm-icons fs-3"></i>
              <p class="ms-2 mb-0">Write a Review</p>
            </div>
            <!-- /review icon -->
            <!-- rate icon -->
            <div class="d-flex align-items-center p-1 icon-container flex-grow-1 justify-content-center"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasReview" aria-controls="offcanvasExample">
              <i class="bi bi-shield-fill gm-icons fs-3 align-middle"></i>
              <p class="mb-0 ms-2">Rate this GM</p>
            </div>
            <!-- /rate icon -->
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center">
        <!-- card title -->
        <h4 class="card-title mb-0">
          {{ gm.user.name }}
          <span v-if="gm.has_future_promotion">
            <i class="bi bi-stars"></i></span>
        </h4>


        <!-- send message icon -->
        <div class="d-flex align-items-center px-2 msg-send" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMessage" aria-controls="offcanvasMessage">
          <p class="mb-0 me-2">Send a Message</p>
          <i class="bi bi-send-fill gm-icons fs-3"></i>

        </div>
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
        <p v-if="gm.average_rating > 0" class="shield-rating">
          <i v-for="(shield, index) in shieldRating" :key="index" class="bi" :class="{
        'bi-shield-fill': shield === 'full',
        'bi-shield-shaded': shield === 'half',
        'bi-shield': shield === 'empty',
      }">
          </i>
        </p>
        <p v-else>None yet</p>
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

  .gm-icons {
    color: $contrast-color;
    cursor: pointer;
  }

  .bi-stars {
    color: #38bebe;
  }

  .shield-rating {
    font-size: 1.5em;
    color: #800020;
  }

  .icon-container {
    cursor: pointer;
    border-radius: 5px;

    :hover {
      background-color: #f1f0eb;
      color: $primary-color;
    }
  }

  .msg-send {
    cursor: pointer;

    &:hover {
      color: $primary-color;
      background-color: #f1f0eb;
      border-radius: 5px;
    }
  }

}
</style>
