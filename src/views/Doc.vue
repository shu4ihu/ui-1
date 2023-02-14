<template>
    <div>
        <Topnav/>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { inject ,Ref} from 'vue';
import Topnav from '../components/Topnav.vue'
const asideVisible = inject<Ref<boolean>>('asideVisible')
</script>

<style lang="scss" scoped>
.content{
    aside{
        width: 260px;
        height: auto;
        padding: 16px;
        overflow-x: hidden;
        overflow-y: scroll;
        border-right: 1px solid #e8e8e8;
        margin-top: 75px;
        padding-bottom: 32px;
        box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
        h2{
            margin-bottom: 4px;
            font-weight: 700;
        }
        ol{
            li{
                padding: 4px 0;
                font-size: 14px;
            }
        }
    }
    @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
    }
}
</style>