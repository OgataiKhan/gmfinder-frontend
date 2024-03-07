<script>
import ButtonBackTopComponent from './ButtonBackTopComponent.vue';
export default {
  name: 'FooterBottom',
  components: {
    ButtonBackTopComponent,
  },
};
</script>

<template>
  <div class="container d-flex justify-content-between align-items-center">
    <div class="logo">
      <img src="/img/logo.png" alt="logo" />
    </div>
    <div>
      <ButtonBackTopComponent />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;

.logo {
  width: 65px;
  height: 65px;
}

.logo img {
  width: 100%;
}

button {
  background-color: $contrast-color;
  color: $light-color;
  border: 1px solid $contrast-color;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: $light-color;
  color: $contrast-color;
  border-color: $contrast-color;
}
</style>
