<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="home">
                <span class="text-4xl font-bold">Home</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Welcome to the Resources Trees Wiki! This is official wiki for the ResourcesTrees mod for Minecraft.
                        Here you can find information about the mod, its features, and how to use them.
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        This is a mod that add resource generating by trees to Minecraft, which allows you to generate resources from trees.
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        If you have any questions or suggestions, feel free to join our Discord server or open an issue on GitHub.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 mt-3 scroll-mt-18" id="versions">
                <span class="text-4xl font-bold">Versions</span>
                <div class="mt-4">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-400">
                            <thead class="text-xs uppercase bg-zinc-700 text-gray-400">
                            <tr>
                                <th scope="col" class="px-3 md:px-6 py-3">
                                    MC Version
                                </th>
                                <th scope="col" class="px-3 md:px-6 py-3">
                                    Mod Loader
                                </th>
                                <th scope="col" class="px-3 md:px-6 py-3 text-center">
                                    Bug Fix
                                </th>
                                <th scope="col" class="px-3 md:px-6 py-3">
                                    Latest Version
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="version in versionData" class="border-b bg-zinc-800 border-zinc-700">
                                <th class="px-3 md:px-6 py-4">
                                    <span class="text-lg">{{ version.minecraftVersion }}</span>
                                </th>
                                <td class="px-3 md:px-6 py-4">
                                    <div class="flex gap-2">
                                        <img class="size-8" v-for="modLoader in version.modLoader" :src="modLoaderIcons[modLoader]" alt="modLoader">
                                    </div>
                                </td>
                                <td class="px-3 md:px-6 py-4 text-center">
                                    <span class="text-lg">{{ version.bugFix }}</span>
                                </td>
                                <td class="px-3 md:px-6 py-4">
                                    <span class="text-gray-300">{{ version.latestVersion }}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="w-full py-5 mt-3 scroll-mt-18" id="links">
                <span class="text-4xl font-bold">Links</span>
                <div class="mt-4 space-y-4 text-gray-300">
                    <div>
                        <p class="text-lg font-medium">📥 Downloads:</p>
                        <ul class="list-disc list-inside pl-4">
                            <li>
                                <a class="text-blue-400 hover:underline" href="https://www.curseforge.com/minecraft/mc-mods/resourcestrees" target="_blank">CurseForge</a>
                            </li>
                            <li>
                                <a class="text-blue-400 hover:underline" href="https://modrinth.com/mod/resourcestrees" target="_blank">Modrinth</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-lg font-medium">🔧 Installation:</p>
                        <ul class="list-disc list-inside pl-4">
                            <li>Install the correct loader (Forge, Fabric, or NeoForge)</li>
                            <li>Download the matching mod version from above</li>
                            <li>Place the <code class="bg-gray-800 text-gray-200 px-1 rounded">.jar</code> file into your Minecraft <code class="bg-gray-800 text-gray-200 px-1 rounded">/mods</code> folder</li>
                            <li>Launch the game and enjoy!</li>
                        </ul>
                    </div>
                    <div>
                        <p class="text-lg font-medium">💻 Source Code:</p>
                        <p>
                            <a class="text-blue-400 hover:underline" href="https://github.com/CoolerProYT/Resources-Trees" target="_blank">
                                GitHub Repository
                            </a>
                        </p>
                    </div>
                    <div>
                        <p class="text-lg font-medium">💬 Feedback & Support:</p>
                        <p>
                            Join our <a class="text-blue-400 hover:underline" href="https://discord.com/invite/hvFfqsqQm8" target="_blank">Discord</a> or <a class="text-blue-400 hover:underline" href="https://github.com/CoolerProYT/Resources-Trees/issues" target="_blank">open an issue on GitHub</a> if you find bugs or have suggestions.
                        </p>
                    </div>
                    <div>
                        <p class="text-lg font-medium">💖 Support the Mod:</p>
                        <p>
                            If you'd like to support the development of More Gears, consider donating! Your help is greatly appreciated.
                            <br />
                            <a class="inline-block mt-2 text-blue-400 hover:underline" href="https://buymeacoffee.com/coolerpromc" target="_blank">
                                👉 Donate via Buy Me a Coffee
                            </a>
                            <br />
                            <a class="inline-block mt-2 text-blue-400 hover:underline" href="https://github.com/sponsors/CoolerProYT" target="_blank">
                                👉 Donate via Github Sponsors
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#home" :class="{'text-blue-400': activeSection === 'home'}">Home</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#versions" :class="{'text-blue-400': activeSection === 'versions'}">Versions</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#links" :class="{'text-blue-400': activeSection === 'links'}">Links</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import forge from '@/assets/img/forge.png';
import fabric from '@/assets/img/fabric.png';
import neoforge from '@/assets/img/neoforge.png';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const modLoaderIcons = {
    forge,
    fabric,
    neoforge
}

const activeSection = ref(null);

const sections = ['home', 'versions', 'links'];

let observer;

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, options);

    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>

<script>
export default {
    data() {
        return {
            versionData: [
                {
                    minecraftVersion: "1.20.1",
                    modLoader: ["forge"],
                    bugFix: "✅",
                    latestVersion: "1.5.1"
                },
                {
                    minecraftVersion: "1.21.1",
                    modLoader: ["neoforge", "fabric"],
                    bugFix: "✅",
                    latestVersion: "1.5.0"
                },
                {
                    minecraftVersion: "1.21.10",
                    modLoader: ["neoforge", "forge", "fabric"],
                    bugFix: "✅",
                    latestVersion: "1.5.0"
                },
                {
                    minecraftVersion: "1.21.11",
                    modLoader: ["neoforge", "forge", "fabric"],
                    bugFix: "✅",
                    latestVersion: "1.5.0"
                }
            ]
        };
    }
};
</script>

