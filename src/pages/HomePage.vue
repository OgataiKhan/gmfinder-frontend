<script>

export default {
    name: 'HomePage',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App HOME PAGE!'
        }
    }
};

</script>

<template>
    <div class="home flex-grow-1">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.home {
    text-align: center;
    background-color: $light-color;
}
</style>