<script>


export default {
  name: 'AppFooter',
};

</script>

<template>
  <footer>
    <div class="container">
      Footer
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../scss/helpers/variables" as *;


footer {
  background-color: $primary-color;
  padding: 20px 0;
  width: 100%;
  color: $light-color;
}
</style>