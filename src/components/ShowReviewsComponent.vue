<script>

import { DateTime } from 'luxon';
import store from '../store/store.js';

export default {
    name: 'ShowReviewsComponent',
    data() {
        return {
            store,
        }
    },
    methods:{
        formatLocalDate(dateStr) {
      return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATE_MED);
    },
    }
}


</script>

<template>

    <div class="container py-5">
        <h3 class="mb-4">Reviews ({{ store.selectedGameMaster.reviews ? store.selectedGameMaster.reviews.length :
            'No Reviews' }})</h3>
        <ul class="card p-4 mb-4 reviews">
            <li v-for="review in store.selectedGameMaster.reviews" class="review card p-4 mb-4 ">
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