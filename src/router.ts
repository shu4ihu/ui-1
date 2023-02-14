import { createWebHashHistory,createRouter } from 'vue-router'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import Switch from './components/Switch.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'switch',component:Switch}
        ]}
    ]
})
router.afterEach(()=>{
    console.log('路由切换了')
})