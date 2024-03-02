<script>

import ReviewsComponent from '../components/ReviewsComponent.vue';

export default {
    data() {
        return {
            msg: "Contact Game Master",
            gameMaster: {
                name: "John Doe",
                rating: 5,
                games: "Fantasy campaigns"
            },
            contactForm: {
                name: '',
                message: ''
            }
        };
    },
    components: {
        ReviewsComponent
    },
    methods: {
        sendMessage() {
            // Here handle the form submission.
            console.log('Form Data:', this.contactForm);

            // After sending the message, clear the form fields
            this.contactForm.name = '';
            this.contactForm.message = '';
        }
    }
}
</script>


<template>
    <div class="game-master-page flex-grow-1">
        <div class="container p-2 mb-3">


            <h1>{{ msg }}</h1>

            <!-- Game Master Information Section -->
            <div class="game-master-info">
                <h2>Game Master Information</h2>
                <p><strong>Name:</strong> {{ gameMaster.name }}</p>
                <p><strong>Average Rating:</strong> {{ gameMaster.rating }} </p>
                <p><strong>Games:</strong> {{ gameMaster.games }}</p>
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="sendMessage">
                <div class="mb-3">
                    <label for="userEmailAddress" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="userEmailAddress" placeholder="Enter your email address"
                        v-model="contactForm.name">
                </div>
                <div class="mb-3">
                    <label for="msgText" class="form-label">Your message</label>
                    <textarea class="form-control" id="msgText" rows="3" v-model="contactForm.message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <ReviewsComponent />
        </div>
    </div>
</template>
  

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;
@use "../scss/helpers/mixins" as *;

.game-master-page {
    text-align: center;
    background-color: $light-color;

    h1 {
        color: $primary-color;
        margin-top: 100px;
    }
}
</style>