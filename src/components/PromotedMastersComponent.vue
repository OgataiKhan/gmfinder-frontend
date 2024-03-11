<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
//import store
import store from '../store/store.js';
//import axios
import axios from 'axios';
import GmCardComponent from './GmCardComponent.vue';
export default {
    name: 'PromotedMastersComponent',

    components: {
        GmCardComponent,
    },

    data() {
        return {
            title: 'Featured Masters of the Realm',
            featuredMasters: [], // store the masters data from the API
            store,
            currentPage: 1, // store the current page number
        }
    },
    methods: {

        //api call to get masters
        getFeaturedMasters() {
            //get list of gm where promotion is active
            axios.get(this.store.api.baseURL + this.store.api.apiUrls.featured, {
                params: {
                    page: this.currentPage
                }
            })
                .then(response => {
                    console.log('Featured masters', response.data);
                    this.featuredMasters = response.data.results.data;
                    console.log('Featured masters', this.featuredMasters);
                })
                .catch(error => {
                    console.error('Error fetching promoted masters', error);
                });
        },

        // Function to display the next set of masters
        next() {
            // Check if currentPage is within bounds
            if (this.currentPage < this.featuredMasters.length) {
                // Call api to get the results of the next page
                this.getFeaturedMasters(this.currentPage++);
            }
            console.log('Current page', this.currentPage);
        },
        // Function to display the previous set of masters
        prev() {
            // Check if currentPage is greater than 1
            if (this.currentPage > 1) {
                // Call api to get the results of the previous page
                this.getFeaturedMasters(this.currentPage--);
            }
            console.log('Current page', this.currentPage);
        }
    },
    created() {
        // Call the getMasters function when the component is mounted
        this.getFeaturedMasters();
    }
};
</script>

<template>
    <div class="promoted-masters">
        <div class="title p-3">
            <h3 class="text-center">{{ title }}</h3>
        </div>
        <div class="masters-container pb-3">
            <div class="masters-grid container">
                <div class="row g-3">
                    <div class="col-md-6 col-lg-3" v-for="gm in featuredMasters">
                        <div class="card">
                            <img :src="gm.profile_img
                ? this.store.api.baseURL +
                this.store.api.apiUrls.storage +
                gm.profile_img
                : '/img/generic-avatar.jpg'
                " class="" alt="profile pic" />
                            <div class="card-body">
                                <h4>{{ gm.user.name }}</h4>
                                <p>
                                    <span v-for="(system, index) in gm.game_systems" :key="index">
                                        {{ system.name
                                        }}{{ index < gm.game_systems.length - 1 ? ", " : "" }} </span>
                                </p>
                            </div>
                        </div>
                        <!-- Add more master details here -->
                    </div>
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

.masters-container {
    background-color: $primary-color;
    position: relative;
}

.master-card {
    background-color: $light-color;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
}
</style>