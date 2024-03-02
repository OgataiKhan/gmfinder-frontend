<script>
export default {
  name: 'AppHeader',
};
</script>

<template>
  <header>
    <div
      class="container d-flex justify-content-between align-items-center py-2"
    >
      <!-- logo -->
      <div class="logo">
        <router-link :to="{ name: 'home' }" class="text-decoration-none">
          <img
            src="/img/dungeons_and_dragons_logo_by_floodgrunt-d6my4z8.png"
            alt=""
        /></router-link>
      </div>
      <!-- /logo -->
      <!-- navbar -->
      <nav class="navbar-link">
        <ul class="d-flex align-items-center gap-3">
          <!-- link navbar -->
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="text-decoration-none link text-white"
              ><strong>Home</strong></router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'game-master' }"
              class="text-decoration-none link text-white"
              ><strong>Game Master</strong></router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'message-success' }"
              class="text-decoration-none link text-white"
              ><strong>Message</strong></router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'error' }"
              class="text-decoration-none link text-white"
              ><strong>Error</strong></router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'advanced-search' }"
              class="btn bg-light px-2 py-1 rounded"
              ><strong>Search</strong></router-link
            >
          </li>
          <!-- /link navbar -->
        </ul>
      </nav>
      <!-- /navbar -->
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '../scss/helpers/variables' as *;

header {
  background-color: $primary-color;
  width: 100%;
}

/* logo */
.logo {
  width: 65px;
  height: 65px;
}

.logo img {
  width: 100%;
}
/* navbar */
.navbar-link ul {
  list-style: none;
  margin-top: 10px;
  padding-left: 0;
}
</style>
