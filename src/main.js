import { createApp } from 'vue';
// Import custom CSS
import './scss/style.scss';
// Import Bootstrap's JS
import * as bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router/router';

createApp(App).use(router).mount('#app');
