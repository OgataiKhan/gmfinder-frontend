<script>
import store from '../store/store.js';
//import axios
import axios from 'axios';
export default {
    name: 'SearchComponent',
    data() {
        return {
            store,
            selectedGame: '',
            validationError: false,
        }
    },
    // methods
    methods: {
        searchGm() {
            console.log('searching for game master');
            if (this.selectedGame) {
                //set validation error to false
                this.validationError = false;
                //redirect to advanced search page
                this.$router.push({ name: 'advanced-search', params: { game: this.selectedGame } });;
            } else {
                this.validationError = true;
            }

        }
    },
    //call api to fetch options
    mounted() {
        //call api to fetch game options
        axios.get(this.store.api.baseURL + this.store.api.apiUrls.game_systems)
            .then(response => {
                console.log('response from game systems api call:');
                this.store.gameSystems = response.data.results;
                console.log(this.store.gameSystems);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

</script>

<template>
    <form @submit.prevent="searchGm" class="d-flex flex-column flex-md-row align-items-center">
        <select class="form-select mt-0 my-select" aria-label="Default select example" v-model="selectedGame">
            <option disabled value="">Select a Game System</option>
            <option v-for="game in store.gameSystems" :value="store.gameSystems.id">{{ game.name }}</option>
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
@use "../scss/helpers/variables" as *;

.validation-alert {
    color: $danger-color;
    font-size: 0.6rem;
    margin: 0;
}
</style>
