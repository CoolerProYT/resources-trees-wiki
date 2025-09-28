<template>
    <div class="relative w-10 h-10 xs:h-12 xs:w-12 md:w-16 md:h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
        <div class="bucket-container relative">
            <img v-if="item.startsWith('minecraft:')"
                 :src="'https://coolerpromc.com/minecraft/item/' + item.replaceAll(':','__') + '.png'"
                 class="w-full h-full object-contain"
            >
            <img v-else-if="item.startsWith('#minecraft:logs')"
                 src="https://coolerpromc.com/minecraft/item/minecraft__oak_log.png"
                 class="w-full h-full object-contain"
            >
            <img v-else-if="item !== ''"
                 :src="getImageSrc(item)"
                 class="w-full h-full object-contain">

            <!-- Output Count -->
            <div v-if="output_count != null" class="absolute inset-y-3 xs:inset-y-5 md:inset-y-7" :class="output_count > 9 ? 'inset-x-3 xs:inset-x-4 md:inset-x-4' : 'inset-x-6 xs:inset-x-8 md:inset-x-10'">
                <p class="text-xl xs:text-2xl md:text-4xl minecraft-font">{{ output_count }}</p>
            </div>

            <!-- Tooltip -->
            <div v-if="item !== ''" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                <p>{{ item.replaceAll('resourcestrees:', '').replaceAll('minecraft:', '').replaceAll('mod:', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = import.meta.glob('@/assets/img/textures/*.png', { eager: true });

const getImageSrc = (item) => {
    const fileName = item.replaceAll('resourcestrees:', 'resourcestrees__').replaceAll('mod:', 'resourcestrees__') + '.png';
    return images[`/src/assets/img/textures/${fileName}`]?.default || '';
};
</script>

<script>
export default {
    props: ['item', 'output_count'],
}
</script>