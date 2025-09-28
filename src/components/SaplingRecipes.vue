<script setup>
import ComponentShapedRecipe from "@/components/ComponentShapedRecipe.vue";

const recipes = import.meta.glob('@/assets/recipe/saplings/*.json', { eager: true })
const recipeList = Object.entries(recipes).map(([path, mod]) => ({
    type: path.split("/").pop().replace(".json", ''),
    content: mod.default
}));
</script>

<template>
    <ComponentShapedRecipe v-for="recipe in recipeList" :recipe="recipe.content" />
</template>

<style scoped>

</style>