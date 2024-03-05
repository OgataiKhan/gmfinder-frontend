<script>
export default {
    name: 'JumbotronSearchComponent',
    data() {
        return {
            msg: 'Find Your Guide to Adventure!',
            selectedGame: '',
            games: [
                { id: 1, name: 'Game 1' },
                { id: 2, name: 'Game 2' },
                { id: 3, name: 'Game 3' }
            ],
            validationError: false

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
    }
};
</script>

<template>
    <div class="jumbotron-search col col-md-8 col-lg-6 mx-auto">
        <h3 class="text-center mb-3">{{ msg }}</h3>
        <!-- select element -->
        <form @submit.prevent="searchGm" class="d-flex flex-column flex-md-row align-items-center">
            <select class="form-select mt-0" aria-label="Default select example" v-model="selectedGame">
                <option disabled value="">Select a Game System</option>
                <option v-for="game in games" :key="game.id" :value="game.id">{{ game.name }}</option>
            </select>
            <!-- Validation Message -->
            <div v-if="validationError" class="me-auto validation-alert">
                Please select a game system
            </div>
            <!-- submit button -->
            <button type="submit" class="mx-auto ms-md-3 mt-4 mt-md-0">Search</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.jumbotron-search {
    color: $primary-color;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 2rem 1rem;
    border-radius: 10px;

    select {
        margin-top: 20px;
    }
}

.validation-alert {
    color: $danger-color;
    font-size: 0.6rem;
    margin: 0;
}
</style>