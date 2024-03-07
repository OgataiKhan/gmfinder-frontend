<script>
export default {
  name: 'ButtonBackTopComponent',
  data() {
    return {
      active: false,
    };
  },
  // aggiunta del metodo allo scroll di window
  mounted() {
    window.addEventListener('scroll', this.setScroll);
  },

  methods: {
    // imposta i pixel scrollati
    setScroll() {
      this.active = window.scrollY;
    },
    // fa ritornare la pagina in cima
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<template>
  <button class="scroll-to-top" v-if="active" @click="scrollToTop">
    <span class="arrow-up"><strong>Back To Top</strong></span>
  </button>
</template>

<style lang="scss" scoped>
@use '../scss/helpers/variables' as *;

.scroll-to-top {
  z-index: 999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
