<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="essences">
                <span class="text-4xl font-bold">Essences</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Essences are item that use to craft saplings, nothing special.
                    </p>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="obtaining">
                <span class="text-4xl font-bold">Obtaining</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Essences can be obtained by:
                    </p>
                    <div class="grid 2xl:grid-cols-2">
                        <ShapelessRecipe v-for="recipe in recipeList" :recipe="recipe.content" />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#essences" :class="{'text-blue-400': activeSection === 'essences'}">Essences</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#obtaining" :class="{'text-blue-400': activeSection === 'obtaining'}">Obtaining</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import endEssence from '@/assets/recipe/end_essence.json'
import fireEssence from '@/assets/recipe/fire_essence.json'
import natureEssence from '@/assets/recipe/nature_essence.json'
import waterEssence from '@/assets/recipe/water_essence.json'
import ShapelessRecipe from "@/components/ShapelessRecipe.vue";
import TreeSimulatorOutputSlot from "@/components/TreeSimulatorOutputSlot.vue";
import ComponentShapedRecipe from "@/components/ComponentShapedRecipe.vue";

const activeSection = ref(null);

const sections = ['essences', 'obtaining'];

let observer;

const recipes = import.meta.glob('@/assets/recipe/*_essence.json', { eager: true })
const recipeList = Object.entries(recipes).map(([path, mod]) => ({
    type: path.split("/").pop().replace(".json", ''),
    content: mod.default
}));

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, options);

    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>