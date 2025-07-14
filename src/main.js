// import './bootstrap';
import { createApp } from 'vue'
import App from './App.vue'


import router from './router'

// VUETIFY
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// MDI/FONT
import '@mdi/font/css/materialdesignicons.css'

import { createPinia } from 'pinia'

const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.mount('#app')
