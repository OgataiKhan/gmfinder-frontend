<script>
import ReviewsComponent from '../components/ReviewsComponent.vue';
import GmCardComponent from '../components/GmCardComponent.vue';
import store from '../store/store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            msg: 'Contact Game Master',
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
            <form @submit.prevent="sendMessage">
                <div class="mb-3">
                    <label for="userEmailAddress" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="userEmailAddress"
                        placeholder="Enter your email address" v-model="contactForm.name" />
                </div>
                <div class="mb-3">
                    <label for="msgText" class="form-label">Your message</label>
                    <textarea class="form-control" id="msgText" rows="3" v-model="contactForm.message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
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
        margin-top: 100px;
    }
}
</style>
