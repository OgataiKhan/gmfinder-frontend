<script>

import store from '../store/store.js';
import axios from 'axios';

export default {
    props: ['slug'],
    name: 'GmMessageComponent',
    data() {
        return {
            store,
            msg: 'Summon the Lorekeeper',
            formData: {
                text: null,
                name: null,
                email: null,
            }
        };
    },
    methods: {
        postMessage() {
            const data = {
                game_master_id: store.selectedGameMaster.id,
                text: this.formData.text,
                name: this.formData.name,
                email: this.formData.email
            }
            axios.post(this.store.api.baseURL + this.store.api.apiUrls.messages, data).then(response => {
                console.log('inviato!')
            }).catch(error => {
                console.error(error)
            })
        },

        fetchGameMasterData() {
            //make API call to fetch game master details
            axios
                .get(
                    this.store.api.baseURL +
                    this.store.api.apiUrls.game_masters +
                    '/' +
                    this.slug
                )
                .then((response) => {
                    // Store the fetched game master in the store
                    this.store.selectedGameMaster = response.data.result;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
    mounted() {
        this.fetchGameMasterData();
        console.log(this.store.selectedGameMaster);
        console.log(this.slug);
    },
};
</script>

<template>
    <div v-if="store.selectedGameMaster">
        <!-- send message -->
        <div class="mt-3 text-center mb-3">
            <h3>Dispatch Your Scroll to {{ store.selectedGameMaster.user.name }}</h3>
        </div>
        <div class="col-8 mx-auto form-div">
            <form @submit.prevent="sendMessage">
                <div class="d-flex justify-content-between">
                    <div class="my-4 col-5">
                        <label for="userEmailAddress" class="form-label">Thy Name</label>
                        <input type="text" class="form-control" id="userName" placeholder="Enter your name"
                            v-model="formData.name" />
                    </div>
                    <div class="my-4 col-5">
                        <label for="userEmailAddress" class="form-label">Raven-Email Address</label>
                        <input type="email" class="form-control" id="userEmailAddress"
                            placeholder="Enter your email address" v-model="formData.email" />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="msgText" class="form-label">Thy Missive</label>
                    <textarea class="form-control" id="msgText" rows="3" v-model="formData.text"></textarea>
                </div>
                <div class="py-3 d-flex">
                    <button type="submit" class="mx-auto" @click.prevent="postMessage">Send Forth Thy Scroll</button>
                </div>
            </form>
        </div>
        <div class="mt-4">
            <button type="submit">Back to Results</button>
        </div>
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