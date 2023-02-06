<template>
    <div class="w-full bg-navy-blue">
        <div v-motion-slide-visible-left>
            <div class="container mx-auto px-8 lg:px-24 w-full py-12">
                <div class="flex items-stretch justify-between md:gap-x-16 lg:gap-x-30 xl:gap-x-48 flex-wrap md:flex-nowrap">
                    <div class="container w-full">
                        <h3 class="mb-0 text-white font-bold text-3xl pt-8">Send a Message</h3>
                        <div class="bg-pink-400 mt-0 w-[8ch] h-1.5 rounded-sm mb-16"></div>

                        <form class="grid grid-cols-2 gap-5 mb-7" id="contact-form">
                            <input class="w-full block bg-gray-300 font-normal transition ease-in-out duration-300 rounded-md p-3 border border-stone-500 focus:text-gray-700 focus:bg-white focus:outline-purple-outline focus:outline-none"
                                   type="text"/>
                            <input class="w-full block bg-gray-300 font-normal transition ease-in-out duration-300 rounded-md p-3 border border-stone-500 focus:text-gray-700 focus:bg-white focus:outline-purple-outline focus:outline-none"
                                   type="text"/>
                            <input class="w-full block bg-gray-300 font-normal transition ease-in-out duration-300 rounded-md p-3 border border-stone-500 focus:text-gray-700 focus:bg-white focus:outline-purple-outline focus:outline-none"
                                   type="text"/>
                            <input class="w-full block bg-gray-300 font-normal transition ease-in-out duration-300 rounded-md p-3 border border-stone-500 focus:text-gray-700 focus:bg-white bg-gray-300 focus:outline-purple-outline focus:outline-none"
                                   type="text"/>
                            <textarea ref="textarea"
                                      class="col-span-2 w-full h-40 resize-none block bg-gray-300 font-normal transition ease-in-out duration-300 rounded-md p-3 border border-stone-500 focus:outline-purple-outline focus:outline-none focus:text-gray-700"></textarea>
                        </form>
                        <button class="bg-btn-color py-4 px-8 text-center font-bold text-medium rounded-md transition duration-300 ease-in-out hover:scale-110 hover:bg-pink-300"
                                form="contact-form"
                                type="submit">Send
                        </button>
                    </div>

                    <div class="container w-full">
                        <h3 class="mb-0 text-white font-bold text-3xl pt-8">Contact us</h3>
                        <div class="bg-pink-400 mt-0 w-[8ch] h-1.5 rounded-sm mb-16"></div>

                        <div class="space-y-4">
                            <div class="flex gap-x-8 items-center">
                                <svg class="w-6 h-6 border-1 rounded-full inline fill-svg-bg" fill="none"
                                     stroke="currentColor"
                                     stroke-width="1.5"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                                <div class="text-center font-medium text-lg text-whitish tracking-wider">08130534710
                                </div>
                            </div>
                            <div class="flex gap-x-8 items-center">
                                <svg class="w-6 h-6 border-1 rounded-full inline fill-svg-bg" fill="none"
                                     stroke="currentColor"
                                     stroke-width="1.5"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                                <div class="text-center font-medium text-lg text-whitish tracking-wider">
                                    temmyk7@gmail.com
                                </div>
                            </div>
                            <div class="flex gap-x-8 items-center">
                                <svg class="w-6 h-6 border-1 rounded-full inline fill-svg-bg" fill="none"
                                     stroke="currentColor"
                                     stroke-width="1.5"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>

                                <div class="w-[25ch] font-medium text-lg text-whitish tracking-wider">No. 24 BOVAS
                                    filling
                                    station, FUTA south gate Akure, Ondo State.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>

</style>