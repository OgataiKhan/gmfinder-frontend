<script>
export default {
    name: 'JumbotronSearchComponent',
    data() {
        return {
            msg: 'This is a jumbotron search component!'
        }
    }
};
</script>

<template>
    <div class="jumbotron-search col">
        <h1>{{ msg }}</h1>
        <!-- select element -->
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.jumbotron-search {
    background-color: #0f59a3;
    padding: 2rem 1rem;

    select {
        margin-top: 20px;
    }
}
</style>