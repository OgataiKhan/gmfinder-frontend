<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
export default {
    name: 'PromotedMastersComponent',
    data() {
        return {
            title: 'Featured Masters of the Realm',
            masters: [

                {
                    id: 1,
                    name: 'Master 1',
                    description: 'This is the first master',
                    // Add more master details here
                },
                {
                    id: 2,
                    name: 'Master 2',
                    description: 'This is the second master',
                    // Add more master details here
                },
                {
                    id: 3,
                    name: 'Master 3',
                    description: 'This is the third master',
                    // Add more master details here
                },
                {
                    id: 4,
                    name: 'Master 4',
                    description: 'This is the fourth master',
                    // Add more master details here
                },
                {
                    id: 5,
                    name: 'Master 5',
                    description: 'This is the fifth master',
                    // Add more master details here
                },
                {
                    id: 6,
                    name: 'Master 6',
                    description: 'This is the sixth master',
                    // Add more master details here
                },
                {
                    id: 7,
                    name: 'Master 7',
                    description: 'This is the seventh master',
                    // Add more master details here
                },
                {
                    id: 8,
                    name: 'Master 8',
                    description: 'This is the eighth master',
                    // Add more master details here
                },
                {
                    id: 9,
                    name: 'Master 9',
                    description: 'This is the ninth master',
                    // Add more master details here
                },
                {
                    id: 10,
                    name: 'Master 10',
                    description: 'This is the tenth master',
                    // Add more master details here
                },
                {
                    id: 11,
                    name: 'Master 11',
                    description: 'This is the eleventh master',
                    // Add more master details here
                },
                {
                    id: 12,
                    name: 'Master 12',
                    description: 'This is the twelfth  master',
                    // Add more master details here
                },
                {
                    id: 13,
                    name: 'Master 13',
                    description: 'This is the thirteenth  master',
                    // Add more master details here
                },
                {
                    id: 14,
                    name: 'Master 14',
                    description: 'This is the fourteenth  master',
                    // Add more master details here
                },
                {
                    id: 15,
                    name: 'Master 15',
                    description: 'This is the fifteenth master',
                    // Add more master details here
                },
                {
                    id: 16,
                    name: 'Master 16',
                    description: 'This is the sixteenth master',
                    // Add more master details here
                },
            ],
            visibleStartIndex: 0, // index of the first master to display
        }
    },
    computed: {
        // returns the masters that should be displayed, in this case 4 masters
        //we use a computed property because it will be recalculated whenever the visibleStartIndex changes
        visibleMasters() {
            return this.masters.slice(this.visibleStartIndex, this.visibleStartIndex + 4);
        }
    },
    methods: {
        // Function to display the next set of masters
        next() {
            // If there are more masters to display, increment the visibleStartIndex
            if (this.visibleStartIndex + 4 < this.masters.length) {
                this.visibleStartIndex += 4;
            } else {
                this.visibleStartIndex = 0; // Loop back to start if at the end
            }
        },
        // Function to display the previous set of masters
        prev() {
            //if there are more masters to display, decrement the visibleStartIndex
            if (this.visibleStartIndex - 4 >= 0) {
                this.visibleStartIndex -= 4;
            } else {
                this.visibleStartIndex = this.masters.length - 4; // Loop back to end if at the start
            }
        }
    },
};
</script>

<template>
    <div class="promoted-masters">
        <div class="title p-3">
            <h3 class="text-center">{{ title }}</h3>
        </div>
        <div class="masters-container">
            <div class="masters-grid container">
                <div class="row g-3">
                    <div class="col-md-6 col-lg-3" v-for="master in visibleMasters" :key="master.id">
                        <!-- Display master info here -->
                        <div class="card p-3 master-card">
                            <img src="../assets/img/generic-avatar.webp" alt="Master Image" class="img-fluid">
                            <h3 class="text-center mt-1">{{ master.name }}</h3>
                            <p>{{ master.description }}</p>
                        </div>
                        <!-- Add more master details here -->
                    </div>
                </div>
            </div>
            <div class="navigation-controls d-flex justify-content-between">
                <button @click="prev">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <button @click="next">
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.title {
    background-color: $primary-color;
    color: $light-color;
}

.masters-container {
    background-color: $primary-color;
    position: relative;
}

.master-card {
    background-color: $light-color;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.navigation-controls {
    position: absolute;
    top: 45%;
    left: 0;
    width: 100%;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .bi {
        cursor: pointer;
        z-index: 99;
        color: $contrast-color;
        font-size: 3.5rem;
        font-weight: bold;
    }
}
</style>