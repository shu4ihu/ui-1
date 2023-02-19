<template>
    <div>
        <h1>实例1</h1>
        <Button @click="onclick"
                @mouseover="onclick"
                @focus="onclick"
                >hello</Button>
    </div>
</template>

<script lang="ts" setup>
import Button from '@/lib/Button.vue'; 
const onclick = () => {
    console.log(1)
}
</script>

<style scoped>

</style>