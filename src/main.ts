import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory,createRouter } from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
