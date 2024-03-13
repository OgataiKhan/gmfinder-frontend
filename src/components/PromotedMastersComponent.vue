<script>
import "bootstrap-icons/font/bootstrap-icons.css";
//import store
import store from "../store/store.js";
//import axios
import axios from "axios";
import FeaturedCard from "./FeaturedCard.vue";
export default {
  name
    : "PromotedMastersComponent",

  components: {
    FeaturedCard,
  },

  data() {
    return {
      title: "Featured Masters of the Realm",
      featuredMasters: [], // store the masters data from the API
      store,
      currentPage: 1, // store the current page number
      lastPage: 1, // store the last page number
    };
  },
  methods: {
    //api call to get masters
    getFeaturedMasters() {
      //get list of gm where promotion is active
      axios
        .get(this.store.api.baseURL + this.store.api.apiUrls.featured, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.featuredMasters = response.data.results.data;
          this.lastPage = response.data.results.last_page;
        })
        .catch((error) => {
          console.error("Error fetching promoted masters", error);
        });
    },

    // Function to display the next set of masters
    next() {
      // Check if currentPage is within bounds
      if (this.currentPage < this.lastPage) {
        // Call api to get the results of the next page
        this.getFeaturedMasters(this.currentPage++);
      }
      //if we are at the last page, return to first page
      else if (this.currentPage === this.lastPage) {
        this.currentPage = 1;
        this.getFeaturedMasters(this.currentPage);
      }
      console.log("Current page", this.currentPage);
    },
    // Function to display the previous set of masters
    prev() {
      // Check if currentPage is greater than 1
      if (this.currentPage > 1) {
        // Call api to get the results of the previous page
        this.getFeaturedMasters(this.currentPage--);
      }
      //if we are at the first page, return to last page
      else if (this.currentPage === 1) {
        this.currentPage = this.lastPage;
        this.getFeaturedMasters(this.currentPage);
      }
    },

    selectGm(gm) {
      this.store.selectedGameMaster = gm;
      //redirect to game master page with query params
      this.$router.push({
        name: "game-master",
        query: { gameMaster: gm.slug },
      });
    },
  },
  created() {
    // Call the getMasters function when the component is mounted
    this.getFeaturedMasters();
  },
};
</script>

<template>
  <div class="promoted-masters">
    <div class="title p-3">
      <h3 class="text-center">{{ title }}</h3>
    </div>






    <div class="masters-container pb-3">
      <div class="masters-grid container">
        <div class="row g-3 flex-column flex-md-row">
          <FeaturedCard v-for="gm in featuredMasters" :key="gm.id" :gm="gm" @select="selectGm" />
        </div>
      </div>




      <div class="navigation-controls d-flex justify-content-between">
        <button @click="prev">
          <i class="bi bi-chevron-left"></i>
        </button>
        <button @click="next">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.title {
  background-color: $primary-color;
  color: $light-color;
}

.nav-link {
  cursor: pointer;
}

.featured-card {

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }

  .featured-image {

    &hover {
      transform: scale(1.05);
      transition: transform 0.3s;
    }
  }
}

.masters-container {
  background-color: $primary-color;
  position: relative;
}

.navigation-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .bi {
    cursor: pointer;
    z-index: 99;
    color: $contrast-color;
    font-size: 3.5rem;
    font-weight: bold;
  }
}

.card {
  padding: 0.5rem;
  height: 100%;
}
</style>./PromotedMastersComponent.vue/index.js
