<script>
export default {
  name: 'FooterBottom',
};
</script>

<template>
  <div class="container d-flex justify-content-between align-items-center">
    <div class="logo">
      <img
        src="/img/dungeons_and_dragons_logo_by_floodgrunt-d6my4z8.png"
        alt=""
      />
    </div>
    <div>
      <button type="reset" class="btn btn-primary text-uppercase">
        back to top
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/helpers/variables' as *;
.logo {
  width: 65px;
  height: 65px;
}

.logo img {
  width: 100%;
}

button {
  background-color: $contrast-color;
  border: none;
  color: black;
}

button:hover {
  background-color: $contrast-color;
}
</style>
