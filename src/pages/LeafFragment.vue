<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="leafFragment">
                <span class="text-4xl font-bold">Leaf Fragment</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Leaf Fragment are items dropped from resources leaves, it can be used to craft various resources.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="obtaining">
                <span class="text-4xl font-bold">Obtaining</span>
                <p class="text-lg text-gray-300 mt-4">
                    Leaf Fragment can be obtained by breaking resources leaves that generate from <router-link class="text-blue-400 hover:text-blue-500" to="/Saplings">Resources Saplings</router-link> or drops from <router-link class="text-blue-400 hover:text-blue-500" to="/TreeSimulator">Tree Simulator</router-link>.
                </p>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="usage">
                <span class="text-4xl font-bold">Usage</span>
                <div class="grid 2xl:grid-cols-2">
                    <FragmentRecipes />
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="customRecipe">
                <span class="text-4xl font-bold">Using in Custom Recipes</span>
                <p class="text-lg text-gray-300 mt-4">
                    If you want to use leaf fragment in custom recipes that need to pass ingredient instead of item stack object, we have support for that too!
                </p>
                <div class="mt-3" id="forge20">
                    <span class="text-3xl font-bold">Forge 1.20.1</span>
                    <div>
                        <MarkdownRenderer :source="forge20" language="json" />
                    </div>
                </div>
                <div class="mt-3" id="neo21">
                    <span class="text-3xl font-bold">NeoForge 1.21.1+</span>
                    <div>
                        <MarkdownRenderer :source="neo21" language="json" />
                    </div>
                </div>
                <div class="mt-3" id="fabric21">
                    <span class="text-3xl font-bold">Fabric 1.21.1+</span>
                    <div>
                        <MarkdownRenderer :source="fabric21" language="json" />
                    </div>
                </div>
                <div class="mt-3" id="forge21">
                    <span class="text-3xl font-bold">Forge 1.21.1+</span>
                    <div>
                        <MarkdownRenderer :source="forge21" language="json" />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="leafFragment" name="Leaf Fragment" :active-section="activeSection" />
                <AnchorLink id="obtaining" name="Obtaining" :active-section="activeSection" />
                <AnchorLink id="usage" name="Usage" :active-section="activeSection" />
                <AnchorLink id="customRecipe" name="Using in Custom Recipes" :active-section="activeSection" />
                <AnchorLink id="forge20" name="Forge 1.20.1" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="neo21" name="NeoForge 1.21.1+" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="fabric21" name="Fabric 1.21.1+" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="forge21" name="Forge 1.21.1+" :active-section="activeSection" :is-sub="true" />
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
import FragmentRecipes from "@/components/FragmentRecipes.vue";
import AnchorLink from "@/components/AnchorLink.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const activeSection = ref(null);

const sections = ['leafFragment', 'obtaining', 'usage', 'customRecipe', 'forge20', 'neo21', 'fabric21', 'forge21'];

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

const forge20 =
`{
  "ingredients": {
    "type": "forge:partial_nbt",
    "item": "resourcestrees:leaf_fragment",
    "nbt": "{type:\\"resourcestrees:amethyst\\"}"
   }
}
`;

const neo21 =
`{
  "ingredients": {
    "type": "neoforge:components",
    "components": {
      "resourcestrees:resources_type": "resourcestrees:amethyst"
    },
    "items": "resourcestrees:leaf_fragment",
    "strict": true
  }
}
`;

const fabric21 =
`{
  "ingredients": {
    "fabric:type": "fabric:components",
    "base": {
      "item": "resourcestrees:leaf_fragment"
    },
    "components": {
      "resourcestrees:resources_type": "resourcestrees:amethyst"
    }
  }
}
`;

const forge21 =
`{
  "ingredients": {
    "type": "resourcestrees:data_component",
    "components": {
      "resourcestrees:resources_type": "resourcestrees:amethyst"
    },
    "items": "resourcestrees:leaf_fragment",
    "strict": true
  }
}
`;
</script>