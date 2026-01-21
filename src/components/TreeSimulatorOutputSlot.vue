<template>
    <div class="relative w-10 h-10 xs:h-12 xs:w-12 md:w-16 md:h-16 bg-[#8B8B8B] border-2 border-[#FFFFFF] border-t-[#373737] border-l-[#373737] group">
        <div class="bucket-container relative">
            <img v-if="drop.output.id.startsWith('minecraft:')"
                 :src="'https://coolerpromc.com/minecraft/item/' + drop.output.id.replaceAll(':','__') + '.png'"
                 class="w-full h-full object-contain"
            >
            <img v-else-if="drop.output.id !== ''" :src="getImageSrc(drop.output.id)" class="w-full h-full object-contain">

            <!-- Tooltip -->
            <div v-if="drop.output.id !== '' && !('components' in props.drop.output)" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap text-center">
                <p class="font-semibold">{{ drop.output.id.replaceAll('minecraft:', '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
                <p>Output Chance: {{ drop.chance * 100 }} %</p>
            </div>
            <div v-else-if="drop.output.id !== '' && ('components' in props.drop.output)" class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap text-center">
                <p class="font-semibold">{{ drop.output.id.replaceAll('minecraft:', '').replaceAll('resourcestrees:', props.drop.output.components["resourcestrees:resources_type"].replace('resourcestrees:', '')).replace(/_/g, ' ').replace('leaf', ' leaf').replace('resources', '').replace(/\b\w/g, l => l.toUpperCase()) }}</p>
                <p>Output Chance: {{ drop.chance * 100 }} %</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = import.meta.glob('@/assets/img/textures/*.png', { eager: true });

const props = defineProps({
    drop: {
        type: Object,
        required: true,
    }
})

const getImageSrc = (item) => {
    const hasComponent = "components" in props.drop.output;
    let fileName;

    if (hasComponent) {
        fileName = item.replaceAll(':', '__') + "__{type__'"  + props.drop.output.components["resourcestrees:resources_type"].replace(':', '__') + "'}.png";
    }
    else{
        fileName = item.replaceAll('mod:', 'resourcestrees__') + '.png';
    }
    return images[`/src/assets/img/textures/${fileName}`]?.default || '';
};
</script>