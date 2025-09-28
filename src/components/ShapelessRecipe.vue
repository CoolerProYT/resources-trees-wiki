<script setup>
import CraftingGui from "@/components/CraftingGui.vue";

const props = defineProps({
    recipe: {
        type: Object,
        required: true
    }
});

const ingredients = [...props.recipe.ingredients];
const result = props.recipe.result.id.replaceAll("resourcestrees:", "mod:");
const resultCount = props.recipe.result.count;

for (let i = props.recipe.ingredients.length; i < 9; i++) {
    ingredients.push("");
}
</script>

<template>
    <CraftingGui
        :slot_1="ingredients[0]"
        :slot_2="ingredients[1]"
        :slot_3="ingredients[2]"
        :slot_4="ingredients[3]"
        :slot_5="ingredients[4]"
        :slot_6="ingredients[5]"
        :slot_7="ingredients[6]"
        :slot_8="ingredients[7]"
        :slot_9="ingredients[8]"
        :output="result"
        :output_count="resultCount"
    />
</template>

<style scoped>

</style>