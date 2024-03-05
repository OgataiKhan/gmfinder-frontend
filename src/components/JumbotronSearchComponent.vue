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
    }
};
</script>

<template>
    <div class="jumbotron-search col">
        <h3 class="text-center">{{ msg }}</h3>
        <!-- select element -->
        <form action="">
            <select class="form-select" aria-label="Default select example" v-model="selectedGame">
                <option disabled value="">Select a Game System</option>
                <option v-for="game in games" :key="game.id" :value="game.id">{{ game.name }}</option>
            </select>
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