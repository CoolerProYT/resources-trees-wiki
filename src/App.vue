<template>
    <div class="bg-gray-950 w-full min-h-screen text-gray-50">
        <div class="sticky top-0 w-full bg-gray-900 z-100">
            <NavBar @toggleSidebar="toggleSidebar" />
        </div>
        <div class="flex">
            <div class="hidden lg:block lg:w-3/12 xl:w-2/12 border-e border-gray-400 sticky top-15 h-[calc(100vh-60px)]">
                <SideBar />
            </div>
            <div class="lg:hidden fixed inset-0 bg-black/50 z-120" v-if="showSidebar" @click.self="toggleSidebar">
                <div class="w-64 bg-gray-950 h-full shadow-lg">
                    <div class="px-6">
                        <button class="mt-4 text-white cursor-pointer text-xl" @click="toggleSidebar">X</button>
                    </div>
                    <SideBar />
                </div>
            </div>
            <div class="lg:w-9/12 xl:w-10/12 py-5 px-2 md:px-8 bg-gray-950 rounded shadow-gray-950">
                <div class="md:w-11/12 lg:w-10/12 mx-auto">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    <div>
        <Footer />
    </div>
</template>

<script>
import {defineComponent, ref} from "vue";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
    components: {Footer, NavBar, SideBar},
    setup() {
        const showSidebar = ref(false);

        const toggleSidebar = () => {
            showSidebar.value = !showSidebar.value;
        };

        return {
            showSidebar,
            toggleSidebar,
        };
    },
})
</script>

<style>

</style>