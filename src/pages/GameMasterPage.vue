<script>

export default {
    name: 'GameMasterPage',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App Game Master Page!'
        }
    }
};

</script>

<template>
    <div class="game-master-page flex-grow-1">
        <h1>{{ msg }}</h1>
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