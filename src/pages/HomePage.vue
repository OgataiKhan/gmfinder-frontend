<script>
//import jumbotron component
import JumbotronComponent from '../components/JumbotronComponent.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App HOME PAGE!'
        }
    },
    components: {
        JumbotronComponent
    }
};

</script>

<template>
    <div class="home flex-grow-1">
        <h1>{{ msg }}</h1>
        <JumbotronComponent />
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.home {
    background-color: $light-color;

    h1 {
        color: $primary-color;
        margin-top: 100px;
    }
}
</style>