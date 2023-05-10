import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss'
const app = createApp(App)

// import vuex
import store from './store/index'

// plug-in vuex store
app.use(store)

app.mount('#app')