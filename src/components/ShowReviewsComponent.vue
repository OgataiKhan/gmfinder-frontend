<script>

import { DateTime } from 'luxon';
import store from '../store/store.js';
import axios from 'axios';

export default {
    name: 'ShowReviewsComponent',
    data() {
        return {
            store,
            reviews: {}
        }
    },
    methods: {
        formatLocalDate(dateStr) {
            return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATE_MED);
        },

        nextPage() {
            //api call to fetch next page of reviews

        }
    },
    mounted() {
        //api call to fetch reviews

        axios
            .get(
                this.store.api.baseURL +
                this.store.api.apiUrls.game_masters +
                '/' +
                //get the slug from the url
                this.$route.query.gameMaster
            )
            .then((response) => {
                this.reviews = response.data.reviews.data;
                console.log(this.reviews);
            })
            .catch((error) => {
                console.log(error);
            });
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
    </div>
    <!-- //button for next page -->
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary" @click="nextPage">Next</button>
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