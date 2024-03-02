<script>
export default {
    name: 'PromotedMastersComponent',
    data() {
        return {
            msg: 'This is a promoted masters component!'
        }
    }
};
</script>

<template>
    <div class="promoted-masters">
        <h1>{{ msg }}</h1>
        <div class="row">
            <div class="col">
                <div class="card">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a card with supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>