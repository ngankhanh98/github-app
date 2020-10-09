import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Antd from 'ant-design-vue';
// import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false;
app.use(router).use(store).use(Antd).mount('#app')
