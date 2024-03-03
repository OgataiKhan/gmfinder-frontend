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

<style scoped lang="scss"></style>
