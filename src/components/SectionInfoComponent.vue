<script>

export default {
    name: 'SectionInfoComponent',
    data() {
        return {
            title: 'Welcome to the Dragons Realm!',
            description: 'This is a place where you can find the best masters of the realm to guide you through your journey. You can also become a master and share your knowledge with others.',
        }
    }
};
</script>

<template>
    <section class="section-info">
        <div class="title p-3">
            <h3 class="text-center">{{ title }} </h3>
        </div>
        <div class="container">
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="card">
                        <img src="../assets/img/startgroup.webp" alt="Start your group image" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Start Your Group</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                            <a href="#" class="btn">Find a Master</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">{{ title }}</h2>
                            <p class="card-text">{{ description }}</p>
                            <a href="#" class="btn btn-primary">Find a Master</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="twitter-featured">
                        <h3>Featured on Twitter</h3>
                        <p>Check out our latest tweets and follow us on Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;
@use "../scss/helpers/mixins" as *;

.card {
    background-color: $light-color-card;

    a {
        @include primary-button($contrast-color, $light-color, $light-color);

        &:hover {
            border-color: $contrast-color !important;
        }
    }
}
</style>