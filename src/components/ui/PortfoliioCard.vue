<template>
    <div class="shadow-2xl col-span-1">
        <img alt="work"
             class="w-full h-full object-cover transform hover:scale-110 transition duration-500 cursor-pointer"
             :src="`/images/${img}`">
    </div>
</template>

<script setup>
defineProps(['img'])
</script>

<style scoped>

</style>