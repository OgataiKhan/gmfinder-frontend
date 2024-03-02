<script>
export default {
    name: 'PromotedMastersComponent',
    data() {
        return {
            msg: 'This is a promoted masters component!',
            slides: [
                {
                    img: 'https://placehold.co/600x400',
                    caption: 'First slide',
                    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                },
                {
                    img: 'https://placehold.co/600x400',
                    caption: 'Second slide',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    img: 'https://placehold.co/600x400',
                    caption: 'Third slide',
                    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                },
                {
                    img: 'https://placehold.co/600x400',
                    caption: 'Fourth slide',
                    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
                }
            ],

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
    <div class="promoted-masters container">
        <h1>{{ msg }}</h1>


        <!-- <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" v-for="(slide, idx) in slides" :key="'indicator-' + idx"
                    data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="idx" :class="{ active: idx === 0 }"
                    :aria-label="'Slide ' + (idx + 1)"></button>
            </div>
            <div class="carousel-inner">
                <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                    <img :src="slide.img" class="d-block w-100" :alt="slide.label">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ slide.caption }}</h5>
                        <p>{{ slide.text }}</p>
                    </div>
                </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->

        <div>
            <div class="masters-grid container">
                <div class="row g-3">
                    <div class="col-lg-3" v-for="master in visibleMasters" :key="master.id">
                        <!-- Display master info here -->
                        <div class="card p-3">
                            <h3>{{ master.name }}</h3>
                            <p>{{ master.description }}</p>
                        </div>
                        <!-- Add more master details here -->
                    </div>
                </div>
            </div>
            <div class="navigation-controls">
                <button @click="prev">Prev</button>
                <button @click="next">Next</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>