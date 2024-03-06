<script>
import JumbotronSearchComponent from './JumbotronSearchComponent.vue';
export default {
    name: 'JumbotronComponent',
    data() {
        return {
            msg: 'Find Your Guide to Adventure!'
        }
    },
    components: {
        JumbotronSearchComponent
    }
};
</script>

<template>
    <div class="jumbotron d-flex align-items-center">
        <JumbotronSearchComponent />
    </div>
</template>

<style scoped lang="scss">
.jumbotron {
    padding: 1rem 1rem;
    height: 400px;
    //background image
    background-image: url('../assets/img/jumbotron-image.jpeg');
    background-size: cover;
    background-position: center;
}
</style>