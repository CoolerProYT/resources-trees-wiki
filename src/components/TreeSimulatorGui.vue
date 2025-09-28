<template>
    <div class="minecraft-gui bg-[#c6c6c6] border-4 border-[#373737] border-t-[#FFFFFF] border-l-[#FFFFFF] p-2 max-w-md my-3">
        <div class="w-full bg-[#c6c6c6]">
            <div class="bg-[#C6C6C6] text-white minecraft-font text-2xl px-2 text-left">
                Tree Simulator
            </div>
            <div class="p-2">
                <div class="flex items-center justify-between">
                    <!-- Input Slot -->
                    <TreeSimulatorInputSlot :item="input" :component="component"/>

                    <!-- Arrow -->
                    <div class="relative">
                        <svg class="hidden md:block" width="85" height="45" viewBox="0 0 85 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="15" width="60" height="15" fill="#8b8b8b"/>
                            <rect x="60" width="5" height="45" fill="#8b8b8b"/>
                            <rect x="70" y="10" width="5" height="25" fill="#8b8b8b"/>
                            <rect x="75" y="15" width="5" height="15" fill="#8b8b8b"/>
                            <rect x="80" y="20" width="5" height="5" fill="#8b8b8b"/>
                            <rect x="65" y="5" width="5" height="35" fill="#8b8b8b"/>
                        </svg>
                        <svg class="md:hidden" width="40" height="45" viewBox="0 0 85 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="15" width="60" height="15" fill="#8b8b8b"/>
                            <rect x="60" width="5" height="45" fill="#8b8b8b"/>
                            <rect x="70" y="10" width="5" height="25" fill="#8b8b8b"/>
                            <rect x="75" y="15" width="5" height="15" fill="#8b8b8b"/>
                            <rect x="80" y="20" width="5" height="5" fill="#8b8b8b"/>
                            <rect x="65" y="5" width="5" height="35" fill="#8b8b8b"/>
                        </svg>
                    </div>

                    <div class="grid grid-cols-3">
                        <TreeSimulatorOutputSlot v-for="output in outputs" :drop="output" />
                        <ItemSlot v-for="ignored in empty" item="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TreeSimulatorInputSlot from "@/components/TreeSimulatorInputSlot.vue";
import TreeSimulatorOutputSlot from "@/components/TreeSimulatorOutputSlot.vue";
import ItemSlot from "@/components/ItemSlot.vue";

const props = defineProps({
    outputs: {
        type: Array,
        required: true,
    },
    input: {
        type: String,
        required: true,
    },
    component: {
        type: String,
        required: true,
    }
})

const x = 9 - props.outputs.length;
const empty = [];

for (let i = 0; i < x; i++) {
    empty.push(i);
}
</script>

<style>
@font-face {
    font-family: 'Minecraft';
    src: url('@/assets/minecraft.otf') format('truetype');
}
.minecraft-font {
    font-family: 'Minecraft';
}
</style>