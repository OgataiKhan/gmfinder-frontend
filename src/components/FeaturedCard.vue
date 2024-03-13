<script>
import store from "../store/store.js";

export default {
    props: ['gm'],
    data() {
        return {
            store
        };
    },
    methods: {
        selectGm() {
            this.$emit('select', this.gm);
        }
    }
};
</script>

<template>
    <div class="col col-md-6 col-lg-3 d-flex flex-column align-items-center">
        <router-link :to="{ name: 'game-master' }" class="nav-link flex-grow-1 d-flex" @click="selectGm">
            <div class="card d-flex flex-column">
                <div class="img-container flex-grow-1">
                    <img :src="gm.profile_img
            ? store.api.baseURL + store.api.apiUrls.storage + gm.profile_img
            : '/img/generic-avatar.jpg'
            " class="card-img-top" alt="profile pic" />
                </div>
                <div class="card-body">
                    <h4>{{ gm.user.name }}</h4>
                    <p>
                        <span v-for="(system, index) in gm.game_systems.slice(0, 2)" :key="index">
                            {{ system.name }}{{ index < 1 ? ", " : "" }} </span>
                    </p>
                </div>
            </div>
        </router-link>
    </div>

</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.img-container {
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>