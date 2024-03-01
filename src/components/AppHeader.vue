<script>


export default {
  name: 'AppHeader',
};

</script>

<template>
  <header>
    <div class="container">
      Header
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;


header {
  background-color: $primary-color;
  padding: 20px 0;
  width: 100%;
  color: $light-color;
}
</style>