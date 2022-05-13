import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'amfe-flexible';
import './assets/style/index.scss';
import { setupPlugins } from './plugins';

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router).mount('#app')
app.use(setupPlugins)
