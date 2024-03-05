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
    <div class="jumbotron">
        <JumbotronSearchComponent />
    </div>
</template>

<style scoped lang="scss">
.jumbotron {
    background-color: #6e99c4;
    padding: 1rem 1rem;
    height: 300px;
}
</style>