<template>
    <header class="py-10">
        <nav class="container flex justify-between items-center mx-auto px-8 lg:px-24 w-full">
            <NavLogo/>
            <Transition enter-active-class="duration-1000 transition ease"
                        leave-active-class="duration-1000 transition ease" leave-to-class="opacity-0"
                        enter-from-class="opacity-0">
                <ul class="hidden md:flex md:space-x-9 space-x-12">
                    <NavLink link="#" title="overview"/>
                    <NavLink link="#about" title="about"/>
                    <NavLink link="#services" title="services"/>
                    <NavLink link="#portfolio" title="portfolio"/>
                    <NavLink link="#contact" title="contact"/>
                </ul>
            </Transition>
            <NavToggler/>
        </nav>
    </header>

</template>

<script setup>
import NavLink from "./ui/NavLink.vue";
import NavToggler from "./ui/NavToggler.vue";
import NavLogo from "./ui/NavLogo.vue";

</script>

<style scoped>

</style>