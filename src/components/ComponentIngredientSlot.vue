<template>
    <div class="relative w-10 h-10 xs:h-12 xs:w-12 md:w-16 md:h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
        <div class="bucket-container relative">
            <img v-if="typeof item === 'string' && item.startsWith('minecraft:')"
                 :src="'https://coolerpromc.com/minecraft/item/' + item.replaceAll(':','__') + '.png'"
                 class="w-full h-full object-contain"
            >
            <img v-else-if="item !== '' && typeof item === 'object'"
                 :src="getImageSrc(item)"
                 class="w-full h-full object-contain">

            <!-- Tooltip -->
            <div v-if="item !== '' && typeof item === 'string'" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                <p>{{ item.replaceAll('resourcestrees:', '').replaceAll('minecraft:', '').replaceAll('mod:', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
            </div>
            <div v-else-if="item !== '' && typeof item === 'object'" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap text-center">
                <p class="font-semibold">{{ item.items.replaceAll('minecraft:', '').replaceAll('resourcestrees:', item.components["resourcestrees:resources_type"].replace('resourcestrees:', '')).replace(/_/g, ' ').replace('leaf', ' leaf').replace('resources', '').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = import.meta.glob('@/assets/img/textures/*.png', { eager: true });

const props = defineProps({
    item: {
        type: [Object, String],
        required: true,
    }
})

const getImageSrc = (item) => {
    const fileName = item.items.replaceAll(':', '__') + "__{type__'"  + item.components["resourcestrees:resources_type"].replace(':', '__') + "'}.png";
    return images[`/src/assets/img/textures/${fileName}`]?.default || '';
};
</script>