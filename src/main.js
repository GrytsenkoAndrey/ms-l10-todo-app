import './assets/main.css';

import { creastePinia } from "pinia";
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App).mount('#app');
app.use(createPinia());
app.mount("#app");
