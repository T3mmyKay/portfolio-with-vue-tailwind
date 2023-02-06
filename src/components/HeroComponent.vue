<template>
    <div class="bg-gradient-to-b from-indigo-200 via-white to-white w-full">
        <NavComponent/>
        <div v-motion-slide-top>
            <div class="container flex justify-between items-end flex-wrap md:flex-nowrap md:gap-x-12 mx-auto px-8 lg:px-24 w-full pb-12 pt-12">
                <div class="w-full space-y-3 lg:space-y-6 lg:w-6/12 xl:w-8/12">
                    <div class="font-bold text-4xl md:text-5xl"><span class="text-light-blue">Hello,</span> <span
                            class="text-theme">I'm</span>
                    </div>
                    <h3 class="font-bold text-5xl md:text-6xl font-poppins text-gray-900">Komolafe t3mmy</h3>
                    <div class="font-bold text-4xl"><span class="text-theme">Expert Web</span> <span
                            class="text-white"
                            style="-webkit-text-stroke: 1px #5959FF">Developer</span>
                    </div>
                    <p class="font-medium text-xs text-slate-900">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Magni, qui!</p>
                    <button class="bg-pink-400 transition hover:scale-110 duration-300 ease-in-out hover:bg-pink-300 py-4 px-6 text-xs font-semibold text-white rounded-md text-center">
                        Portfolio
                    </button>
                </div>
                <div class="w-full lg:w-6/12 xl:w-4/12">
                    <img alt="image" class="w-full object-cover md:object-top" src="/images/Saly-10.png">
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import NavComponent from "./NavComponent.vue";

</script>

<style scoped>

</style>