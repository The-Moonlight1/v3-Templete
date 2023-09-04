import type { App } from 'vue'
import icon from "./icon.vue"
export default {
    install(app:App){
        app.component('Icon',icon)
    }
}