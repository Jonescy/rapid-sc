import { createApp } from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).mount('#app')
