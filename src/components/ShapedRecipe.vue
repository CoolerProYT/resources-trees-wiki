<script setup>
import CraftingGui from "@/components/CraftingGui.vue";

const props = defineProps({
    recipe: {
        type: Object,
        required: true
    }
});

const key = {
    ...Object.fromEntries(
        Object.keys(props.recipe.key).map(item => [
            item,
            props.recipe.key[item].replaceAll("resourcestrees_", "mod:")
        ])
    ),
    air: ""
};

const pattern = props.recipe.pattern.flatMap(row => row.split('')).map(item => item.replaceAll(" ", "air"));
const result = props.recipe.result.id.replaceAll("resourcestrees:", "mod:");
const resultCount = props.recipe.result.count;
</script>

<template>
    <CraftingGui
        :slot_1="key[pattern[0]]"
        :slot_2="key[pattern[1]]"
        :slot_3="key[pattern[2]]"
        :slot_4="key[pattern[3]]"
        :slot_5="key[pattern[4]]"
        :slot_6="key[pattern[5]]"
        :slot_7="key[pattern[6]]"
        :slot_8="key[pattern[7]]"
        :slot_9="key[pattern[8]]"
        :output="result"
        :output_count="resultCount"
    />
</template>

<style scoped>

</style>