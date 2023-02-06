<template>
    <div class="w-full bg-slate-100">
        <div class="container mx-auto px-8 lg:px-24 w-full py-16">
            <p class="text-navy-blue text-4xl font-bold text-center">Portfolio</p>
            <div class="bg-theme mt-0 w-[7ch] h-1.5 rounded-md mb-7 mx-auto"></div>
            <p class="text-gray-700 text-sm text-center align-middle break-words mx-auto max-w-[90ch]">Lorem ipsum dolor
                sit
                amet, consectetur adipisicing elit. Reiciendis, veniam! Lorem ipsum dolor sit amet, consectetur
                adipisicing
                elit. Adipisci culpa deleniti dolorem, doloribus ea error fugit.</p>


            <div v-motion-pop-visible>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto pt-16 place-items-stretch place-content-center gap-9">
                    <PortfoliioCard v-for="(image,index) in portfolio_images" :key="index" :img="image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import PortfoliioCard from "./ui/PortfoliioCard.vue";
import { portfolio_images } from "../store/portfolio.js";
import { onMounted } from "vue";

onMounted(() => {
    console.log(portfolio_images)
})
</script>

<style scoped>

</style>