<script>

import { DateTime } from 'luxon';
import store from '../store/store.js';
import axios from 'axios';

export default {
    name: 'ShowReviewsComponent',
    data() {
        return {
            store,
            reviews: {},
            currentPage: 1,
            nextPageUrl: null,
        }
    },
    methods: {
        formatLocalDate(dateStr) {
            return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATE_MED);
        },

        fetchReviews() {
            let url;
            if (this.nextPageUrl) {
                // If nextPageUrl is set, use it for the API call
                url = this.nextPageUrl;
            } else {
                // Otherwise, construct the URL for the first page
                url = this.store.api.baseURL + this.store.api.apiUrls.game_masters + '/' + this.$route.query.gameMaster;
            }
            axios
                .get(
                    url
                )
                .then((response) => {
                    this.nextPageUrl = response.data.reviews.next_page_url;
                    this.currentPage = response.data.reviews.current_page;
                    this.lastPage = response.data.reviews.last_page;
                    this.prevPageUrl = response.data.reviews.prev_page_url;
                    this.reviews = response.data.reviews.data;
                    console.log(this.reviews);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.fetchReviews(); // Now fetchReviews uses nextPageUrl if set
            }
        },

        prevPage() {
            if (this.prevPageUrl) { // Check if there's a previous page available
                this.nextPageUrl = this.prevPageUrl; // Set the nextPageUrl to the prevPageUrl
                this.fetchReviews(); // Fetch the "previous" page, which is now set as nextPageUrl
            }
        },
    },
    mounted() {
        //api call to fetch reviews

        this.fetchReviews();
    }

}
</script>

<template>
    <div class="container py-5">
        <h3 class="mb-4">Reviews ({{ store.selectedGameMaster.reviews ? store.selectedGameMaster.reviews.length :
            'No Reviews' }})</h3>
        <ul class="card p-4 mb-4 reviews">
            <li v-for="review in reviews" class="review card p-4 mb-4 ">
                <div class="d-flex justify-content-between">
                    <h5 class="col-auto">{{ review.name }}</h5>
                    <span>{{ formatLocalDate(review.created_at) }}</span>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ review.text }}</p>
                </div>
            </li>
        </ul>
        <!-- navigation buttons -->
        <div class="d-flex">
            <button class="me-auto" @click="prevPage" v-if="currentPage > 1">Previous</button>
            <button class="ms-auto" @click="nextPage" v-if="currentPage < lastPage">Next</button>
        </div>
    </div>

</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.review {
    background-color: $light-color-card;

    h5 {
        color: $contrast-color;
    }
}
</style>