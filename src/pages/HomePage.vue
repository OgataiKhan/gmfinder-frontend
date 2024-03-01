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
    <div class="home">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped>
.home {
    text-align: center;
}
</style>