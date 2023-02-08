import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory,createRouter } from 'vue-router'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Test},
        {path:'/test2',component:Test2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
