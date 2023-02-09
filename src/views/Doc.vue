<template>
    <div>
        <Topnav/>
        <div class="content">
            <aside>边栏</aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Topnav from '../components/Topnav.vue'
</script>

<style lang="scss" scoped>
.content{
    padding-top: 80px;
}
</style>