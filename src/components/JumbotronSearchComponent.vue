<script>
import SearchComponent from './SearchComponent.vue';
export default {
    name: 'JumbotronSearchComponent',
    data() {
        return {
            msg: 'Find Your Guide to Adventure!',
        }
    },
    components: {
        SearchComponent,
    },
};
</script>

<template>
    <div class="jumbotron-search col col-md-8 col-lg-6 mx-auto">
        <h3 class="text-center mb-3">{{ msg }}</h3>
        <!-- select element -->
        <SearchComponent />
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.jumbotron-search {
    color: $primary-color;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 3rem 1rem;
    border-radius: 10px;
}
</style>