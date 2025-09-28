<script setup>
import TreeSimulatorGui from "@/components/TreeSimulatorGui.vue";

const recipes = import.meta.glob('@/assets/recipe/tree_simulator/*.json', { eager: true })
const recipeList = Object.entries(recipes).map(([path, mod]) => ({
    type: path.split("/").pop().replace(".json", ''),
    content: mod.default
}));
</script>

<template>
    <TreeSimulatorGui v-for="recipe in recipeList" :input="recipe.content.tree.id.replace('resourcestrees', 'mod')" :component="recipe.content.tree.components['resourcestrees:resources_type']" :outputs="recipe.content.drops"/>
</template>

<style scoped>

</style>