<template>
    <li class="transition ease-in-out duration-300 hover:scale-110">
        <a class="text-navy-blue capitalize text-base font-medium hover:text-purple"
           :href=link>{{ title }}</a>
    </li>
</template>

<script setup>
defineProps(['link', 'title'])
</script>

<style scoped>

</style>