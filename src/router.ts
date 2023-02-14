import { createWebHashHistory,createRouter } from 'vue-router'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import Home from './views/Home.vue'
import Switch from './components/Switch.vue'
import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Tabs from './components/Tabs.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'',component:DocDemo},
            {path:'switch',component:Switch},
            {path:'button',component:Button},
            {path:'dialog',component:Dialog},
            {path:'tabs',component:Tabs}
        ]}
    ]
})
router.afterEach(()=>{
    console.log('路由切换了')
})