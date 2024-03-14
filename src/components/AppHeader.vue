<script>
import store from '../store/store.js';
export default {
  name: 'AppHeader',
  data() {
    return {
      store,
    };
  },
  methods: {
    //clear search results when search link is clicked
    clearResults() {
      this.store.gameMastersResults = [];
      this.store.selectedGameSystem = '';
      this.store.currentPage = 1;

    },
  },
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <!-- navbar -->
      <nav class="navbar navbar-expand-lg text-center flex-grow-1">
        <div class="container-fluid">
          <!-- logo -->
          <div class="logo pt-2">
            <router-link :to="{ name: 'home' }" class="text-decoration-none">
              <img src="/img/logo.png" alt="logo" /></router-link>
          </div>
          <!-- /logo -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" id="header-button"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0 gap-3">
              <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link" @click="clearResults">Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="nav-link">Games</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="nav-link">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="nav-link">Contact</a>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'advanced-search' }" class="nav-link"
                  @click="clearResults">Search</router-link>
              </li>
              <li class="nav-item">
                <a :href="store.api.baseURL + 'login'" class="nav-link" id="nav-link">My Account</a>
              </li>
              <li class="nav-item">
                <a :href="store.api.baseURL + 'register'" class="nav-link" id="nav-link">Sign Up</a>
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
  width: 85px;
  height: 85px;
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
}

#nav-link:hover {
  cursor: pointer;
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
