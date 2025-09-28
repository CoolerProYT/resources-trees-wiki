<script setup>
defineProps({
    id: String,
    name: String,
    activeSection: String,
    isSub: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <p class="my-1.5 hover:text-blue-300" :class="{'ms-3' : isSub}">
        <a :href="'#' + id" :class="{'text-blue-400': activeSection === id}">{{ name }}</a>
    </p>
</template>