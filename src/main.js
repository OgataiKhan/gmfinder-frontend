import { createApp } from 'vue';
// Import custom CSS
import './scss/style.scss';
// Import Bootstrap's JS
import * as bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router/router';
import store from './store/vuexstore';

createApp(App).use(router).use(store).mount('#app');
