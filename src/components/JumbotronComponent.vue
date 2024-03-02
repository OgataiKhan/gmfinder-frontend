<script>
import JumbotronSearchComponent from './JumbotronSearchComponent.vue';
export default {
    name: 'JumbotronComponent',
    data() {
        return {
            msg: 'This is a jumbotron component!'
        }
    },
    components: {
        JumbotronSearchComponent
    }
};
</script>

<template>
    <div class="jumbotron col container">
        <h1>{{ msg }}</h1>
        <JumbotronSearchComponent />
    </div>
</template>

<style scoped lang="scss">
.jumbotron {
    background-color: #6e99c4;
    padding: 2rem 1rem;
    height: 300px;
}
</style>