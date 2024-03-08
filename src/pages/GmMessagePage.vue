<script>

import store from '../store/store.js';

export default {
    name: 'GmMessageComponent',
    data() {
        return {
            store,
            msg: 'Summon the Lorekeeper',
            contactForm: {
                name: '',
                message: '',
            },
        };
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
};
</script>

<template>
    <div class="mt-3 text-center mb-3">
        <h3>Dispatch Your Scroll to {{ store.selectedGameMaster.user.name }}</h3>
    </div>
    <div class="col-8 mx-auto form-div">
        <form @submit.prevent="sendMessage">
            <div class="d-flex justify-content-between">
                <div class="my-4 col-5">
                    <label for="userEmailAddress" class="form-label">Thy Name</label>
                    <input type="text" class="form-control" id="userName" placeholder="Enter your name"
                        v-model="contactForm.name" />
                </div>
                <div class="my-4 col-5">
                    <label for="userEmailAddress" class="form-label">Raven-Email Address</label>
                    <input type="email" class="form-control" id="userEmailAddress"
                        placeholder="Enter your email address" v-model="contactForm.name" />
                </div>
            </div>
            <div class="mb-3">
                <label for="msgText" class="form-label">Thy Missive</label>
                <textarea class="form-control" id="msgText" rows="3" v-model="contactForm.message"></textarea>
            </div>
            <div class="py-3 d-flex">
                <button type="submit" class="mx-auto">Send Forth Thy Scroll</button>
            </div>
        </form>

    </div>
    <div class="mt-4">
        <button type="submit">Back to Results</button>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.form-div {
    background-image: url('../assets/img/vintage-grunge.jpg');
    background-size: cover;
    background-position: center;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    color: $light-color;
}
</style>