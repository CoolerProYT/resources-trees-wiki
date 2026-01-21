<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="treeSimulator">
                <span class="text-4xl font-bold">Tree Simulator</span>
                <div class="flex gap-3">
                    <p class="text-lg text-gray-300 mt-4">
                        Tree simulator is a block that can simulate tree growth and generate resources based on the type of tree.
                    </p>
                    <div class="size-40 flex items-end bg-zinc-800 p-2 rounded">
                        <img :src="treeSimulator" alt="treeSimulator">
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="obtaining">
                <span class="text-4xl font-bold">Obtaining</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Tree simulator can be obtained by crafting it using the following recipe:
                    </p>
                    <ShapedRecipe :recipe="treeSimulatorRecipe" />
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="usage">
                <span class="text-4xl font-bold">Usage</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Tree simulator can be used to simulate tree growth and generate resources based on the type of tree. It is recipe driven, meaning you can configure what type of tree it simulates and what resources it generates.
                        Guide to add new recipes can be found at section below.
                    </p>
                    <div class="mt-3">
                        <img class="rounded" :src="treeSimulatorUsage" alt="treeSimulatorUsage">
                    </div>
                    <p class="text-lg text-gray-300 mt-4">
                        If custom resources types is added without tree simulator recipe defined, it will automatically generate a default recipe for it.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="recipes">
                <span class="text-4xl font-bold">Recipes</span>
                <div class="grid 2xl:grid-cols-2">
                    <TreeSimulatorRecipes />
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="customRecipe">
                <span class="text-4xl font-bold">Adding Custom Recipe</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        It is preferred to place your custom recipe file under <CodeBlock source="{datapack_folder}/resourcestrees/recipe/tree_simulator/{custom_recipe_file_name}.json" />
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        Tree Simulator Recipe format:
                    </p>
                    <UniversalTable :datas="recipe" />
                    <p class="text-lg text-gray-300 mt-4">
                        Drops (Output Object) format:
                    </p>
                    <UniversalTable :datas="drop" />
                    <p class="text-lg text-gray-300 mt-4">
                        ItemStack format:
                    </p>
                    <UniversalTable :datas="itemStack" />
                    <p class="text-lg text-gray-300 mt-4">
                        Data Component format:
                    </p>
                    <UniversalTable :datas="component" />
                    <p class="text-lg text-gray-300 mt-4">
                        Example:
                    </p>
                    <MarkdownRenderer :source="format" language="json" />
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#treeSimulator" :class="{'text-blue-400': activeSection === 'treeSimulator'}">Tree Simulator</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#obtaining" :class="{'text-blue-400': activeSection === 'obtaining'}">Obtaining</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#usage" :class="{'text-blue-400': activeSection === 'usage'}">Usage</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#recipes" :class="{'text-blue-400': activeSection === 'recipes'}">Recipes</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#customRecipe" :class="{'text-blue-400': activeSection === 'customRecipe'}">Adding Custom Recipe</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import treeSimulator from '@/assets/img/textures/tree_simulator.png'
import treeSimulatorUsage from '@/assets/img/tree_simulator_usage.png'
import treeSimulatorRecipe from '@/assets/recipe/tree_simulator.json'
import ShapedRecipe from "@/components/ShapedRecipe.vue";
import TreeSimulatorRecipes from "@/components/TreeSimulatorRecipes.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import UniversalTable from "@/components/UniversalTable.vue";
import CodeBlock from "@/components/CodeBlock.vue";

const activeSection = ref(null);

const sections = ['treeSimulator', 'obtaining', 'usage', 'recipes', 'customRecipe'];

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

const recipe = [
    { key: "type", value: "resourcestrees:tree_simulator", description: "The recipe type, value is strictly fixed as defined" },
    { key: "drops", value: "Array of output object, refer to table below", description: "All possible output for the recipe" },
    { key: "tickToGrow", value: "1200", description: "The required ticks for the tree to grow, can be any positive number" },
    { key: "tree", value: "Object of Item Stack", description: "Input item for the recipe, refer to table below" },
];

const drop = [
    { key: "chance", value: "1.0", description: "Change for this output item to drops, between 0.0 - 1.0" },
    { key: "maxRolls", value: "4", description: "Max roll for this output item, must be more than or equal to minRolls" },
    { key: "minRolls", value: "2", description: "Min roll for this output item, must be less than or equal to maxRolls" },
    { key: "output", value: "Object of Item Stack", description: "Output item for this drop, refer to table below" },
];

const itemStack = [
    { key: "components (1.21+) (Optional)", value: "Data Component Object", description: "To define resource type for the output stack, can accept vanilla component, refer to table below" },
    { key: "nbt (1.20.1) (Optional)", value: "{type:\\\"resourcestrees: amethyst\\\"}", description: "To define resource type for the output stack, can be any valid nbt" },
    { key: "count", value: "1", description: "Item Count of the stack" },
    { key: "id", value: "minecraft:oak_log", description: "Item id of the item, can be found by using F3+H and hover to item in game" },
];

const component = [
    { key: "resourcestrees:resources_type", value: "resourcestrees:amethyst", description: "The key can be any valid data component resourcelocation/identifier. For Resources Type, the value must be valid resource type that are defined in datapack." },
];

const format =
`{
  "type": "resourcestrees:tree_simulator",
  "drops": [
    {
      "chance": 1.0,
      "maxRolls": 4,
      "minRolls": 2,
      "output": {
        "count": 1,
        "id": "minecraft:birch_log"
      }
    },
    {
      "chance": 1.0,
      "maxRolls": 1,
      "minRolls": 1,
      "output": {
        "components": { // 1.21+
          "resourcestrees:resources_type": "resourcestrees:amethyst"
        },
        "nbt": "{type:\\"resourcestrees:amethyst\\"}" // 1.20.1
        "count": 1,
        "id": "resourcestrees:leaf_fragment"
      }
    }
  ],
  "ticksToGrow": 1200,
  "tree": {
    "components": { // 1.21+
      "resourcestrees:resources_type": "resourcestrees:amethyst"
    },
    "nbt": "{type:\\"resourcestrees:amethyst\\"}", // 1.20.1
    "count": 1,
    "id": "resourcestrees:resources_birch_sapling"
  }
}
`;
</script>