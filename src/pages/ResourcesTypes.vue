<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="resourcesTypes">
                <span class="text-4xl font-bold">Resources Types</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Resources Types are the core of this mod, every saplings, leaf fragment, and leaves are depending on resources types.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="default">
                <span class="text-4xl font-bold">Default Types</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Here are all the resources types that come with the mod:
                    </p>
                    <UniversalTable :datas="typeList" />
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="customType">
                <span class="text-4xl font-bold">Custom Resources Type</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        You can add as many resources types to the game as you want. But it must be placed under <CodeBlock source="{datapack_folder}/resourcestrees/resources_type/{resource_name}.json" />
                    </p>
                    <UniversalTable :datas="type" />
                    <p class="text-lg text-gray-300 mt-4">
                        Example:
                    </p>
                    <MarkdownRenderer :source="format" language="json" />
                    <p class="text-lg text-gray-300 mt-4">
                        After adding you might want to add recipe for the <router-link class="text-blue-400 hover:text-blue-500" to="/Saplings#customRecipe">Saplings</router-link>,
                        <router-link class="text-blue-400 hover:text-blue-500" to="/LeafFragment#customRecipe">Leaf Fragment to resources</router-link>, or
                        <router-link class="text-blue-400 hover:text-blue-500" to="/TreeSimulator#customRecipe">Tree Simulator</router-link>.
                        As mentioned in <router-link class="text-blue-400 hover:text-blue-500" to="/TreeSimulator#usage">Tree Simulator</router-link> page,
                        if custom resources types is added without tree simulator recipe defined, it will automatically generate a default recipe for it.
                    </p>
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="resourcesTypes" :active-section="activeSection" name="Resources Types" />
                <AnchorLink id="default" :active-section="activeSection" name="Default Types" />
                <AnchorLink id="customType" :active-section="activeSection" name="Custom Resources Type" />
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

const sections = ['resourcesTypes', 'default', 'customType'];

const types = import.meta.glob('@/assets/resources_type/*.json', { eager: true });
const typeList = Object.entries(types).map(([path, mod]) => ({
    type: path.split("/").pop().replace(".json", ''),
    material: mod.material,
    color: mod.color,
    saplingDropChance: mod.saplingDropChance,
    leafDropChance: mod.leafDropChance,
    weight: mod.weight,
    treeSimulatorTicks: mod.treeSimulatorTicks,
}));

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

const type = [
    { key: "color", value: "-6543440", description: "ARGB color value of the resources type, converted from hexadecimal such as FFA3C4B1, you can use online converter to convert" },
    { key: "leafDropChance", value: "0.5", description: "Chance for leaf fragment to drop when breaking resources leaves, from 0.0 - 1.0" },
    { key: "material", value: "minecraft:amethyst_block", description: "Item Id of the material item for the resources type, but this is currently useless for custom types, defined for datagen purpose only" },
    { key: "saplingDropChance", value: "0.25", description: "Chance for sapling to drop when breaking resources leaves, from 0.0 - 1.0" },
    { key: "treeSimulatorTicks", value: "1200", description: "Processing time that Tree Simulator will use if recipe for the resource sapling is not defined." },
    { key: "weight", value: "5", description: "This field is outdated and will be remove in future. There is no usage for this field since v1.3.0" },
];

const format =
`{
  "color": -6543440,
  "leafDropChance": 0.25,
  "material": "minecraft:amethyst_block",
  "saplingDropChance": 0.125,
  "treeSimulatorTicks": 800,
  "weight": 5
}`
</script>