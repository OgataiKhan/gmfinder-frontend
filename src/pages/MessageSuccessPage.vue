<script>

export default {
    name: 'MessageSuccessPage',
    data() {
        return {
            msg: 'Message sent successfully!'
        }
    }
};

</script>

<template>
    <div class="msg-success flex-grow-1">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;

.msg-success {
    text-align: center;
    background-color: $light-color;

    h1 {
        color: $primary-color;
        margin-top: 100px;
    }
}
</style>