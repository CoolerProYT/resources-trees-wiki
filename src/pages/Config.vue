<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="config">
                <span class="text-4xl font-bold">Config</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The only config in this mod is for defining speed multiplier for Tree Simulator based on axe used.
                    </p>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="format">
                <span class="text-4xl font-bold">Config Format</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        You can add any valid axe and speed to the json config under <CodeBlock source="config/resourcestrees/axe.json" />
                    </p>
                    <UniversalTable :datas="format" />
                    <p class="text-lg text-gray-300 mt-4">
                        Example:
                    </p>
                    <MarkdownRenderer :source="example" language="json" />
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="config" :active-section="activeSection" name="Config" />
                <AnchorLink id="format" :active-section="activeSection" name="Config Format" />
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
import AnchorLink from "@/components/AnchorLink.vue";
import UniversalTable from "@/components/UniversalTable.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const activeSection = ref(null);

const sections = ['config', 'default', 'customType'];
let observer;

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

const format = [
    { field: "key", example: "minecraft:diamond_axe", description: "The item id of the axe." },
    { field: "value", example: "4.0", description: "A double value as multiplier, the result of the tree simulator total process time will be treeSimulatorTicks of the resource type divide by this value." },
];

const example =
`{
  "values": {
    "minecraft:stone_axe": 2.0,
    "minecraft:golden_axe": 6.0,
    "minecraft:diamond_axe": 4.0,
    "minecraft:iron_axe": 3.0,
    "minecraft:netherite_axe": 5.0,
    "minecraft:wooden_axe": 1.0
  }
}`
</script>