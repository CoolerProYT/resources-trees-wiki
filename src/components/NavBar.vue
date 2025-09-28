<template>
    <div class="w-full py-3 flex items-center justify-between">
        <div class="flex items-center px-2 md:px-6">
            <button @click="$emit('toggleSidebar')" class="lg:hidden text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
            <router-link class="flex items-center ps-3 lg:ps-0" to="/Home">
                <img :src="logo" alt="logo" class="size-8">
                <span class="font-semibold text-xs xs:text-lg md:text-2xl ms-2">Resources Trees Wiki</span>
            </router-link>
        </div>
        <div class="px-2 md:px-6">
            <a href="https://coolerpromc.com/" class="hover:text-blue-400 text-xs xs:text-sm md:text-lg">Back To Main Page</a>
        </div>
    </div>
</template>

<script setup>
import logo from "@/assets/img/resources_trees.png";
</script>