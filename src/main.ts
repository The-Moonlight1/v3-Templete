import './assets/icon/iconfont.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import components from './components/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(components)
app.mount('#app')
