<script>
export default {
    name: 'ReviewsComponent',
    data() {
        return {
            msg: 'This is the review component!',
            reviews: [
                {
                    id: 1,
                    name: 'John Doe',
                    review: 'This is a great product!',
                    rating: 5
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                    review: 'This is a great product!',
                    rating: 5
                },
                {
                    id: 3,
                    name: 'John Smith',
                    review: 'This is a great product!',
                    rating: 5
                },
                {
                    id: 4,
                    name: 'Jane Smith',
                    review: 'This is a great product!',
                    rating: 5
                }
            ],
            currentPage: 1,
            pageSize: 5
        }
    }
};
</script>

<template>
    <div class="reviews p-5">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="review in reviews" :key="review.id">
                <strong>{{ review.name }}</strong>: {{ review.review }} (Rating: {{ review.rating }})
            </li>
        </ul>
        <!-- Basic Pagination Control -->
        <nav aria-label="Page navigation" class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss"></style>