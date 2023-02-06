<template>
    <HeroComponent/>
    <main>

        <AboutComponent id="about"/>
        <ServicesComponent id="services"/>
        <PortfolioComponent id="portfolio"/>
        <ContactComponent id="contact"/>
        <Teleport to="#sidebar">
            <SideBarComponent/>
        </Teleport>
        <FooterComponent/>
    </main>
</template>


<script setup>

import HeroComponent from "./components/HeroComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ServicesComponent from "./components/ServicesComponent.vue";
import PortfolioComponent from "./components/PortfolioComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import SideBarComponent from "./components/SideBarComponent.vue";
import { useGlobalState } from "./store/sidebartoggler.js";
import { useMediaQuery, useTitle } from "@vueuse/core";
import { onMounted } from "vue";

const state = useGlobalState();

let isMedScreen = useMediaQuery('(min-width: 768px)')

const checkScreenSize = () => {
    if (isMedScreen.value) {
        state.isOpen.value = false;
    }
}

window.onresize = checkScreenSize;
checkScreenSize();
onMounted(() => {
    useTitle('My Portfolio')
})
</script>
