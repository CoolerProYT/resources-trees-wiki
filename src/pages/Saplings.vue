<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="saplings">
                <span class="text-4xl font-bold">Resources Saplings</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        In this mod, there are 8 types of resources sapling (7 for version below 1.21.4, since Pale Oak is not added). Resources Saplings can be bind with all valid resources type that is in datapack.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="usage">
                <span class="text-4xl font-bold">Usage</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Resources Saplings can be planted like normal saplings, the log of the tree are same as vanilla, but the leaves will contain both vanilla and resources leaves (spawn rate is defined in datapack). When breaking resources leaves, it will drop at least one leaf fragment, and secondary fragment, saplings drop chance are defined in datapack.
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        Resources Saplings also can be used in <router-link class="text-blue-400 hover:text-blue-500" to="/TreeSimulator">Tree Simulator</router-link>.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="obtaining">
                <span class="text-4xl font-bold">Obtaining</span>
                <div class="grid 2xl:grid-cols-2">
                    <SaplingRecipes />
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="customRecipe">
                <span class="text-4xl font-bold">Adding Custom Recipe</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The information below is for shaped crafting recipe only, you can define any other custom recipe if you want to. But the output item stack object is applicable to all recipe since resources sapling need data component to work.
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        Sapling Shaped Recipe format:
                    </p>
                    <UniversalTable :datas="recipe" />
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
                    <a href="#saplings" :class="{'text-blue-400': activeSection === 'saplings'}">Resources Saplings</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#usage" :class="{'text-blue-400': activeSection === 'usage'}">Usage</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#obtaining" :class="{'text-blue-400': activeSection === 'obtaining'}">Obtaining</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#customRecipe" :class="{'text-blue-400': activeSection === 'customRecipe'}">Custom Recipe</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import SaplingRecipes from "@/components/SaplingRecipes.vue";
import UniversalTable from "@/components/UniversalTable.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const activeSection = ref(null);

const sections = ['saplings', 'usage', 'obtaining', 'customRecipe'];

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
    { key: "type", value: "minecraft:crafting_shaped", description: "The recipe type, value is strictly fixed as defined" },
    { key: "category", value: "building", description: "Any vanilla category can be accepted" },
    { key: "key", value: "{'A': \"minecraft:dirt\"}", description: "An object of key-value pair to define item for the key" },
    { key: "pattern", value: "[\n" +
            "    \" A \",\n" +
            "    \"ABA\",\n" +
            "    \" A \"\n" +
            "  ]", description: "An array with 3 index, each index accept 3 character of strings. The character must be empty or a defined key" },
    { key: "result", value: "Object of Item Stack", description: "Output item for this recipe, refer to table below" },
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
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "key": {
    "A": "minecraft:amethyst_block",
    "B": "minecraft:acacia_sapling"
  },
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "result": {
    "components": { // 1.21+
      "resourcestrees:resources_type": "resourcestrees:amethyst"
    },
    "nbt": "{type:\\"resourcestrees:amethyst\\"}", // 1.20.1
    "count": 1,
    "id": "resourcestrees:resources_acacia_sapling"
  }
}
`;
</script>