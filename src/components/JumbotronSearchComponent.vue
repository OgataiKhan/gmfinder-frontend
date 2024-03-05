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
            ]

        }
    },

    // methods
    methods: {
        searchGm() {
            console.log('searching for game master');
            //redirects to Advanced Search page with selected game
            this.$router.push({ name: 'advanced-search', params: { game: this.selectedGame } });
        }
    }
};
</script>

<template>
    <div class="jumbotron-search col">
        <h3 class="text-center mb-3">{{ msg }}</h3>
        <!-- select element -->
        <form @submit.prevent="searchGm" class="d-flex flex-column flex-md-row align-items-center">
            <select class="form-select mt-0" aria-label="Default select example" v-model="selectedGame">
                <option disabled value="">Select a Game System</option>
                <option v-for="game in games" :key="game.id" :value="game.id">{{ game.name }}</option>
            </select>
            <!-- submit button -->
            <button type="submit" class="mx-auto ms-md-3">Search</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.jumbotron-search {
    background-color: $light-color;
    padding: 2rem 1rem;

    select {
        margin-top: 20px;
    }
}
</style>