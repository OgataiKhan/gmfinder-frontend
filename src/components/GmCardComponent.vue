<script>
import store from "../store/store.js";
// Import Luxon
import { DateTime } from 'luxon';

export default {
    name: "GmCardComponent",

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
        gmShow: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        selectGm(gm) {
            this.$store.selectedGameMaster = gm;
            //redirect to game master page with query params
            this.$router.push({
                name: "game-master",
                query: { gameMaster: gm.slug },
            });
        },
        formatLocalDate(dateStr) {
            return DateTime.fromISO(dateStr).toLocaleString(DateTime.DATE_MED);
        },
    },
};
</script>

<template>
    <!-- create card for each gm -->
    <div class="card d-flex flex-md-row">
        <div class="card-header border-bottom-0">
            <img :src="gm.profile_img
                ? this.store.api.baseURL +
                this.store.api.apiUrls.storage +
                gm.profile_img
                : '/img/generic-avatar.jpg'
                " class="card-img-top" alt="profile pic" />
        </div>
        <div class="card-body">
            <div class="text-center text-md-start">
                <h4 class="card-title">{{ gm.user.name }}</h4>
            </div>
            <hr />
            <div>
                <h6>
                    Game Systems
                </h6>
                <p><span v-for="(system, index) in gm.game_systems" :key="index">
                        {{ system.name
                        }}{{ index < gm.game_systems.length - 1 ? ', ' : '' }} </span>
                </p>
            </div>
            <div>
                <h6>
                    Location
                </h6>
                <p>{{ gm.location }}
                </p>
            </div>
            <div>
                <h6>
                    Max Players
                </h6>
                <p>{{ gm.max_players }}
                </p>
            </div>
            <div class="gm-show" v-if="gmShow">
                <div>
                    <h6>
                        Availability
                    </h6>
                    <p
                        v-html="gm.is_available ? 'Available <span style=\'color:green;\'>●</span>' : 'Not Available <span style=\'color:red;\'>●</span>'">
                    </p>
                </div>
                <div>
                    <h6>
                        Game Master Since
                    </h6>
                    <p>{{ gm.created_at.slice(0, 10) }}
                    </p>
                </div>
                <h6>Campaign Description</h6>
                <p>{{ gm.game_description }}</p>
            </div>
        </div>
    </div>
    <!-- ////create card for each gm -->
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;
@use "../scss/helpers/mixins" as *;

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
