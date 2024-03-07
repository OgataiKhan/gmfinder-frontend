<script>
import store from '../store/store.js';
//import axios
import axios from 'axios';
export default {
    name: 'SearchComponent',
    data() {
        return {
            store,
            validationError: false,
        };
    },
    // methods
    methods: {
        searchGm(gameSystem = this.store.selectedGameSystem, page = this.store.currentPage) {
            console.log('STO CERCANDO UN GM');
            console.log('selected game:' + gameSystem);
            if (gameSystem) {
                //set validation error to false
                this.validationError = false;
                //api call to fetch game masters with selected game system
                axios
                    .get(this.store.api.baseURL + this.store.api.apiUrls.game_masters, {
                        params: { key: gameSystem, page: page },
                    })
                    .then((response) => {
                        // Store game masters in store
                        this.store.gameMastersResults = response.data.results.data;
                        //update total results
                        this.store.totalResults = response.data.results.total;
                        //update last page
                        this.store.lastPage = Math.ceil(this.store.totalResults / 10);
                        // Emit an event with the response data
                        this.$emit('dataReceived', response.data);
                        //redirect to advanced search page
                        this.$router.push({
                            name: 'advanced-search',
                            query: { gameSystem: gameSystem, page: page },
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                this.validationError = true;
            }
        },
    },
    watch: {
        '$route.query.gameSystem'(newVal) {
            if (newVal) {
                this.searchGm(newVal, this.$route.query.page);
            }
        },

        '$route.query.page'(newVal) {
            if (newVal) {
                this.searchGm(this.store.selectedGameSystem, newVal);
            }
        },
    },
    //call api to fetch options
    mounted() {
        //call api to fetch game options
        axios
            .get(this.store.api.baseURL + this.store.api.apiUrls.game_systems)
            .then((response) => {
                this.store.gameSystems = response.data.results;
            })
            .catch((error) => {
                console.log(error);
            });

        //if query is present, call searchGm
        if (this.$route.query.gameSystem) {
            this.searchGm(this.$route.query.gameSystem, this.$route.query.page);
            this.store.selectedGameSystem = this.$route.query.gameSystem;
        } else {
            //if the query is not present, clear the gameMastersResults
            this.store.gameMastersResults = [];
            this.store.selectedGameSystem = '';
        }
    },
};
</script>

<template>
    <form @submit.prevent="searchGm(store.selectedGameSystem)"
        class="d-flex flex-column flex-md-row align-items-center w-75 mx-auto">
        <select class="form-select mt-0 my-select" aria-label="Default select example"
            v-model="store.selectedGameSystem">
            <option disabled value="">Select a Game System</option>
            <option v-for="game in store.gameSystems" :value="game.id">
                {{ game.name }}
            </option>
        </select>
        <!-- Validation Message -->
        <div v-if="validationError" class="me-auto validation-alert">
            Please select a game system
        </div>
        <!-- submit button -->
        <button type="submit" class="mx-auto ms-md-3 mt-4 mt-md-0">Search</button>
    </form>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;

.validation-alert {
    color: $danger-color;
    font-size: 0.6rem;
    margin: 0;
}
</style>
