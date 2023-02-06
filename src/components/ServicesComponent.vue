<template>

    <div class="w-full bg-slate-100">
        <div class="container mx-auto px-8 lg:px-24 w-full py-16">
            <div class="uppercase font-bold text-theme text-base text-center">
                services
            </div>
            <p class="text-navy-blue text-4xl font-bold text-center">What I do</p>
            <div class="bg-theme mt-0 w-[9ch] h-1.5 rounded-sm mb-7 mx-auto"></div>
            <p class="text-gray-700 text-sm text-center align-middle break-words mx-auto max-w-[90ch]">Lorem ipsum
                dolor sit
                amet, consectetur adipisicing elit. Reiciendis, veniam! Lorem ipsum dolor sit amet, consectetur
                adipisicing
                elit. Adipisci culpa deleniti dolorem, doloribus ea error fugit.</p>

            <div v-motion-pop-visible>
                <div class="grid grid-cols-1 md:grid-cols-2 mx-auto mt-16 place-items-stretch place-content-center gap-x-8 gap-y-4">
                    <ServiceCard v-for="skill in sk" :key="skill.id" :title="skill.title" :img="skill.image"
                                 :description="skill.description"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import ServiceCard from "./ui/ServiceCard.vue";
import { skills } from "../store/skills.js";

const sk = skills;
</script>

<style scoped>

</style>