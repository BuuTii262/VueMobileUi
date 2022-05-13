import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router';
import 'amfe-flexible';
import './assets/style/index.scss';
import { setupPlugins } from './plugins';

// createApp(App).use(router).mount('#app')

const app = createApp(App)
setupRouter(app)
app.use(setupPlugins)

console.log(import.meta.env.VITE_APP_NAME)
