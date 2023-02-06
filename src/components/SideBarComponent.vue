<template>
    <div class="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 transition-all duration-500 xl:hidden"
         :class="{'invisible opacity-0':!status.isOpen.value}"
         id="sidebar_wrapper" @click.self="status.toggle()">
        <div class="fixed top-0 w-72 h-full bg-white/30 bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-sm flex flex-col transition-all duration-500 text-light-blue"
             :class="{'-left-80':!status.isOpen.value,'left-0':status.isOpen.value}"
             id="sidebar">
            <div class="lg:hidden">
                <div class="mt-6">
                    <a href="#"
                       class="flex px-4 py-1 items-center font-bold text-lg hover:text-blue-700 transition uppercase">
                        Overview
                    </a>
                </div>
                <div class="mt-6">
                    <a href="#"
                       class="flex px-4 py-1 items-center font-bold text-lg hover:text-blue-700 transition uppercase">
                        About
                    </a>
                </div>
                <div class="mt-6">
                    <a href="#"
                       class="flex px-4 py-1 items-center font-bold text-lg hover:text-blue-700 transition uppercase">
                        Services
                    </a>
                </div>
                <div class="mt-6">
                    <a href="#"
                       class="flex px-4 py-1 items-center font-bold text-lg hover:text-blue-700 transition uppercase">
                        Portfolio
                    </a>
                </div>
                <div class="mt-6">
                    <a href="#"
                       class="flex px-4 py-1 items-center font-bold text-lg hover:text-blue-700 transition uppercase">
                        Contact
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { useGlobalState } from "../store/sidebartoggler.js";


const status = useGlobalState();

</script>

<style scoped>

</style>