<script setup>
const props = defineProps({
    datas: {
        type: Array,
        required: true
    },
})
const allKeys = [...new Set(props.datas.flatMap(obj => Object.keys(obj)))];
</script>

<template>
    <div class="relative overflow-x-auto mt-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead class="text-xs uppercase bg-zinc-700 text-gray-400">
            <tr>
                <th v-for="key in allKeys" :key="key" scope="col" class="px-3 md:px-6 py-3">
                    {{ key }}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(data, index) in datas" :key="index" class="border-b bg-zinc-800 border-zinc-700">
                <td v-for="key in allKeys" :key="key" class="px-3 md:px-6 py-4">
                    {{ data[key] ?? '-' }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>