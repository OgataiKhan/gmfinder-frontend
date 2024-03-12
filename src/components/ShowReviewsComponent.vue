<script>

import store from '../store/store.js';

export default {
    name: 'ShowReviewsComponent',
    data() {
        return {
            store,
        }
    },
}


</script>

<template>


    <div class="container py-5">
        <div v-if="store.selectedGameMaster.reviews.length > 1">
            <h3 class="mb-4 ms-3">Reviews ({{ store.selectedGameMaster.reviews.length }})</h3>
        <ul class="card p-4 mb-4 reviews">
            <li v-for="review in store.selectedGameMaster.reviews" class="review card p-4 mb-4 ">
                <div class="row justify-content-between">
                    <h5 class="col-auto">{{ review.name }}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">{{ review.text }}</p>
                </div>
            </li>
        </ul>
        </div>
        <div class=" text-center" v-else>
            <h3>Currently no reviews</h3>
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