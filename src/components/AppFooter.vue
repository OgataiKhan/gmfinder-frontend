<script>
import FooterTop from './footer/FooterTop.vue';
import FooterBottom from './footer/FooterBottom.vue';

export default {
  name: 'AppFooter',
  components: {
    FooterTop,
    FooterBottom,
  },
};
</script>

<template>
  <footer>
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;
footer {
  background-color: $primary-color;
  padding: 10px 0;
  width: 100%;
  color: $light-color;
  margin-top: auto;
}
</style>
