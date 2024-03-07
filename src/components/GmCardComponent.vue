<script>

import store from '../store/store.js';

export default {
    name: 'GmCardComponent',

    data() {
        return {
            store,
        };
    },

    props: {
        gm: {
            type: Object,
            required: true,
        },
    },
    methods: {
        selectGm(gm) {
            this.$store.selectedGameMaster = gm;
            //redirect to game master page with query params
            this.$router.push({
                name: 'game-master',
                query: { gameMaster: gm.slug },
            });
        },
    },
}

</script>

<template>
    <!-- create card for each gm -->
    <div class="card d-flex flex-md-row">
        <div class="card-header border-bottom-0">
            <img :src="gm.profile_img
                ? gm.profile_img
                : '/img/generic-avatar.jpg'
                " class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
            <div class="text-center text-md-start">
                <h4 class="card-title">{{ gm.user.name }}</h4>
            </div>
            <hr />
            <h6>
                Game Systems:
                <span v-for="(system, index) in gm.game_systems" :key="index">
                    {{ system.name
                    }}{{ index < gm.game_systems.length - 1 ? ', ' : '' }} </span>
            </h6>
            <h6>
                Max players: <span>{{ gm.max_players }}</span>
            </h6>
            <p class="card-text">{{ gm.game_description }}</p>
        </div>
    </div>
    <!-- ////create card for each gm -->
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;
@use '../scss/helpers/mixins' as *;

.card {
    background-color: $light-color-card;

    .card-header {
        background-color: transparent;

        .card-img-top {
            border-radius: 3%;
        }

        @media (min-width: 768px) {
            .card-img-top {
                width: 12rem;
                height: 12rem;
                object-fit: cover;
            }
        }

        @media (min-width: 992px) {
            .card-img-top {
                width: 300px;
                height: 300px;
            }
        }
    }
}
</style>