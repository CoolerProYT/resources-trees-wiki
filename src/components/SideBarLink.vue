<template>
    <router-link :to="path" class="block hover:bg-zinc-800 px-3 py-2 my-1.5 cursor-pointer rounded w-full" :class="{'bg-zinc-700': $route.path.startsWith(path)}">
        <span class="text-xl font-semibold w-full">{{text}}</span>
    </router-link>
</template>

<script>
export default {
    props: ["path", "text"],
}
</script>