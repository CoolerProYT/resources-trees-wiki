<template>
    <router-link :to="path" class="block hover:bg-gray-900 px-3 py-2 my-1.5 cursor-pointer rounded w-full" :class="{'bg-gray-800': $route.path.startsWith(path)}">
        <span class="text-xl font-semibold w-full">{{text}}</span>
    </router-link>
</template>

<script>
export default {
    props: ["path", "text"],
}
</script>