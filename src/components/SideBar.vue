<template>
    <div class="bg-gray-950 w-full">
        <div class="px-2 py-2 w-full">
            <SideBarLink path="/Home" text="Home"/>
            <SideBarLink path="/TreeSimulator" text="Tree Simulator"/>
            <SideBarLink path="/Saplings" text="Saplings"/>
            <SideBarLink path="/Essences" text="Essences"/>
            <SideBarLink path="/LeafFragment" text="Leaf Fragment"/>
            <SideBarLink path="/ResourcesTypes" text="Resources Types"/>
        </div>
    </div>
</template>

<script setup>
import SideBarLink from "@/components/SideBarLink.vue";
</script>