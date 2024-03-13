<script>
import store from "../store/store.js";

export default {
    name: "EmptyCardComponent",

    data() {
        return {
            store
        };
    },
};
</script>

<template>
    <div class="col col-md-6 col-lg-3 d-flex flex-column align-items-center">
        <router-link :to="{ name: 'game-master' }" class="nav-link flex-grow-1 d-flex w-100" @click="selectGm">
            <div class="card d-flex flex-column w-100">
                <div class="img-container">
                    <img src='/img/generic-avatar.jpg' class="card-img-top" alt="profile pic" />
                </div>
                <div class="card-body flex-shrink-0">
                    <h4>Featured GM</h4>
                    <p>
                        <span>
                            Featured Game Master
                        </span>
                    </p>
                </div>
            </div>
        </router-link>
    </div>

</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.card {
    height: 400px;

}

.img-container {
    width: 100%;

    img {

        height: 300px;
        object-fit: cover;
    }
}
</style>