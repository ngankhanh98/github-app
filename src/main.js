import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'

createApp(App).mount('#app', axios)
