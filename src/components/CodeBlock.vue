<script setup>
const props = defineProps({
    source: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <code class="bg-gray-800 text-gray-200 px-1 rounded">{{ source }}</code>
</template>

<style scoped>

</style>