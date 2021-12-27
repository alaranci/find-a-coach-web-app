import { createApp } from 'vue';
import router from './router';
import { store } from './store';

createApp({}).use(router).use(store).mount('#app');
