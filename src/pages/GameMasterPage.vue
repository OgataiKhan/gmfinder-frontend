<script>
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
        <div class="container">


            <h1>{{ msg }}</h1>

            <!-- Game Master Information Section -->
            <div class="game-master-info">
                <h2>Game Master Information</h2>
                <p><strong>Name:</strong> {{ gameMaster.name }}</p>
                <p><strong>Average Rating:</strong> {{ gameMaster.rating }} years</p>
                <p><strong>Games:</strong> {{ gameMaster.games }}</p>
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="sendMessage">
                <div class="mb-3">
                    <label for="userEmailAddress" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="userEmailAddress" placeholder="Enter your email address">
                </div>
                <div class="mb-3">
                    <label for="msgText" class="form-label">Your message</label>
                    <textarea class="form-control" id="msgText" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    </div>
</template>
  

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.game-master-page {
    text-align: center;
    background-color: $light-color;

    h1 {
        color: $primary-color;
        margin-top: 100px;
    }
}
</style>