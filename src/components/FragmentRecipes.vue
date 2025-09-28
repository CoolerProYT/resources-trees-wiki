<script setup>
import ComponentShapedRecipe from "@/components/ComponentShapedRecipe.vue";
import ComponentIngredientShapedRecipe from "@/components/ComponentIngredientShapedRecipe.vue";

const recipes = import.meta.glob('@/assets/recipe/fragment_crafting/*.json', { eager: true })
const recipeList = Object.entries(recipes).map(([path, mod]) => ({
    type: path.split("/").pop().replace(".json", ''),
    content: mod.default
}));
</script>

<template>
    <ComponentIngredientShapedRecipe v-for="recipe in recipeList" :recipe="recipe.content" />
</template>

<style scoped>

</style>