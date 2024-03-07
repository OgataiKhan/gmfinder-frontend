<script>
export default {
  name: 'AppHeader',
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <!-- navbar -->
      <nav class="navbar navbar-expand-md text-center flex-grow-1">
        <div class="container-fluid">
          <!-- logo -->
          <div class="logo">
            <router-link :to="{ name: 'home' }" class="text-decoration-none">
              <img
                src="/img/dungeons_and_dragons_logo_by_floodgrunt-d6my4z8.png"
                alt=""
            /></router-link>
          </div>
          <!-- /logo -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            id="header-button"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0 gap-3">
              <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link">Games</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contact</a>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'advanced-search' }" class="nav-link"
                  >Search</router-link
                >
              </li>
            </ul>
          </div>
        </div>
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

.navbar {
  background-color: $primary-color;
}

.nav-item:hover {
  background-color: $primary-color;
  filter: brightness(1.4);
  border-radius: 5px;
}

.nav-link {
  text-decoration: none;
  color: white;
  // margin-right: 10px;
}

#header-button {
  background-color: $light-color;
  color: $primary-color;
  border: 1px solid $light-color;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
}

#header-button:hover {
  background-color: $contrast-color;
  color: $light-color;
  border-color: $contrast-color;
}
</style>
