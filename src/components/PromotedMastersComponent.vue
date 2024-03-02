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
            ]
        }
    },
};
</script>

<template>
    <div class="promoted-masters">
        <h1>{{ msg }}</h1>
        <!-- <div class="row">
            <div class="col col-lg-4">
                <div class="card">
                    <img src="https://placehold.co/600x400" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a card with supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div> -->
        <div id="carouselExampleCaptions" class="carousel slide">
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
        </div>
    </div>
</template>

<style scoped lang="scss"></style>