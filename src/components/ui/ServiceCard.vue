<template>
    <div class="bg-white shadow-lg rounded-xl flex p-8 flex-col align-items-center justify-center gap-y-3">
        <div class="mx-auto md:mx-0 sm:pl-20">
            <h3 class="mx-auto font-bold text-md text-navy-blue">{{ title }}</h3>
            <div class="bg-theme mt-0 w-[3ch] h-0.5 rounded-sm"></div>
        </div>
        <div class="flex gap-x-8 items-center justify-between flex-col sm:flex-row">
            <img alt=""
                 class="h-24 w-24 rounded-full object-cover bg-gray-100 p-3"
                 :src="`/images/${img}`">

            <p class="text-sm font-medium text-light-blue">{{ description}}</p>
        </div>
    </div>

</template>

<script setup>
defineProps(['title','img','description'])
</script>

<style scoped>

</style>