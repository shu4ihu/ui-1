<template>
    <div>
        <Topnav/>
        <section class="content">
            <router-link to="#">Home</router-link>
            <router-link to="doc">Doc</router-link>
        </section>
    </div>
</template>

<script lang="ts" setup>
import Topnav from "../components/Topnav.vue"
</script>

<style lang="scss" scoped>
.content{
    padding-top: 80px;
}
</style>