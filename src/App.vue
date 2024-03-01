<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'AppComponent',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <div class="router-view">
    <router-view />
  </div>
  <AppFooter />
</template>

<style scoped></style>
