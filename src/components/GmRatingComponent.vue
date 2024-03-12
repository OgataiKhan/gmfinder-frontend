<script>
export default {
  name: "GmRatingComponent",
  data() {
    return {
      rating: 0,
      hoverIndex: 0,
    };
  },
  computed: {
    shields() {
      return [1, 2, 3, 4, 5];
    },
  },
  methods: {
    getShieldClass(shield) {
      if (this.hoverIndex >= shield) {
        return "bi-shield-fill"; // Filled shield class
      } else if (!this.hoverIndex && this.rating >= shield) {
        return "bi-shield-fill";
      } else {
        return "bi-shield"; // Empty shield class
      }
    },
    setHover(index) {
      this.hoverIndex = index;
    },
    setRating(index) {
      this.rating = index;
      this.$emit("rating-selected", this.rating);
    },
  },
};
</script>

<template>
  <div class="shield-rating d-flex justify-content-center">
    <i
      v-for="shield in shields"
      :key="shield"
      class="bi"
      :class="getShieldClass(shield)"
      @mouseover="setHover(shield)"
      @mouseleave="setHover(0)"
      @click="setRating(shield)"
    ></i>
  </div>
</template>

<style scoped lang="scss">
.bi {
  cursor: pointer;
  font-size: 1.5em;
  color: #800020;
}
</style>
