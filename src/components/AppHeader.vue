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
            <router-link :to="{ name: 'home' }" class="link"
              ><strong>Home</strong></router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'game-master' }" class="link"
              ><strong>Game Master</strong></router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'message-success' }" class="link"
              ><strong>Message</strong></router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'error' }" class="link"
              ><strong>Error</strong></router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'advanced-search' }"
              id="button"
              class="btn"
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
  padding-left: 0;
}

.link {
  text-decoration: none;
  color: white;
}

.link:hover {
  color: $contrast-color;
}

#button {
  background-color: $light-color;
  color: $primary-color;
  border: 1px solid $light-color;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}

#button:hover {
  background-color: $contrast-color;
  color: $light-color;
  border-color: $contrast-color;
}
</style>
