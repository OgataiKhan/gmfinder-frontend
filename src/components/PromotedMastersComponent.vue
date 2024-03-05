<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
//import store
import store from '../store/store.js';
//import axios
import axios from 'axios';
export default {
    name: 'PromotedMastersComponent',
    data() {
        return {
            title: 'Featured Masters of the Realm',
            masters: [], // store the masters data from the API
            store,
            currentPage: 1, // store the current page number
        }
    },
    methods: {

        //api call to get masters
        getMasters() {
            axios.get(this.store.api.baseURL + this.store.api.apiUrls.game_masters, { params: { page: this.currentPage } })
                .then(response => {
                    console.log(response);
                    this.masters = response.data.results.data;
                    console.log(this.masters);
                })
                .catch(error => {
                    console.log(error);
                })
        },

        // Function to display the next set of masters
        next() {
            // If there are more masters to display, increment the visibleStartIndex
            if (this.visibleStartIndex + 4 < this.masters.length) {
                this.visibleStartIndex += 4;
            } else {
                this.visibleStartIndex = 0; // Loop back to start if at the end
            }
        },
        // Function to display the previous set of masters
        prev() {
            //if there are more masters to display, decrement the visibleStartIndex
            if (this.visibleStartIndex - 4 >= 0) {
                this.visibleStartIndex -= 4;
            } else {
                this.visibleStartIndex = this.masters.length - 4; // Loop back to end if at the start
            }
        }
    },
    created() {
        // Call the getMasters function when the component is mounted
        this.getMasters();
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
                    <div class="col-md-6 col-lg-3" v-for="master in 4" :key="master.id">
                        <!-- Display master info here -->
                        <div class="card p-3 master-card">
                            <img src="../assets/img/generic-avatar.webp" alt="Master Image" class="img-fluid">
                            <h3 class="text-center mt-1">Great Wizard</h3>
                            <p>Description of my skills</p>
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
    top: 45%;
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
</style>