import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'ResourcesTrees Wiki',
    description: 'Wiki for Minecraft Mod - ResourcesTrees',
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: '/logo.png'}],
    ],

    themeConfig: {
        logo: '/logo.png',
        siteTitle: 'ResourcesTrees Wiki',
        nav: [
            {component: 'VersionSwitcher'}
        ],
        sidebar: {
            '/': [
                {
                    text: 'Mod Information',
                    items: [
                        {text: 'Getting Started', link: '/gameplay/getting-started'},
                        {text: 'Resources Types', link: '/gameplay/resources-types-list'},
                        {text: 'Resources Saplings', link: '/gameplay/resources-saplings'},
                        {text: 'Resources Leaves', link: '/gameplay/resources-leaves'},
                        {text: 'Leaf Fragments', link: '/gameplay/leaf-fragments'},
                        {text: 'Tree Simulator', link: '/gameplay/tree-simulator'},
                        {text: 'Essence Items', link: '/gameplay/essence-items'},
                    ],
                },
                {
                    text: 'Configurations',
                    items: [
                        {text: 'Common Config', link: '/config/axe-config'},
                    ],
                },
                {
                    text: 'For Pack Developers',
                    items: [
                        {text: 'Custom Resources Types', link: '/datapacks/resources-types'},
                        {text: 'Custom Tree Types', link: '/datapacks/tree-types'},
                        {text: 'Custom Grower Types', link: '/datapacks/grower-types'},
                        {text: 'Tree Simulator Recipes', link: '/datapacks/tree-simulator-recipes'},
                        {text: 'Sapling Recipes', link: '/datapacks/sapling-recipes'},
                        {text: 'Leaf Fragment Recipes', link: '/datapacks/leaf-fragment-recipes'},
                        {text: 'Tags', link: '/datapacks/tags'},
                    ],
                },
                {
                    text: 'For Mod Developers',
                    items: [
                        {text: 'Plugin API', link: '/developer/plugin-api'},
                    ],
                },
            ],
            '/v2601/': [
                {
                    text: 'Mod Information',
                    items: [
                        {text: 'Getting Started', link: '/v2601/gameplay/getting-started'},
                        {text: 'Updating Old Versions', link: '/v2601/gameplay/updating'},
                        {text: 'Resources Types', link: '/v2601/gameplay/resources-types-list'},
                        {text: 'Resources Saplings', link: '/v2601/gameplay/resources-saplings'},
                        {text: 'Resources Leaves', link: '/v2601/gameplay/resources-leaves'},
                        {text: 'Leaf Fragments', link: '/v2601/gameplay/leaf-fragments'},
                        {text: 'Tree Simulator', link: '/v2601/gameplay/tree-simulator'},
                        {text: 'Essence Items', link: '/v2601/gameplay/essence-items'},
                    ],
                },
                {
                    text: 'Configurations',
                    items: [
                        {text: 'Common Config', link: '/v2601/config/axe-config'},
                    ],
                },
                {
                    text: 'For Pack Developers',
                    items: [
                        {text: 'Custom Resources Types', link: '/v2601/datapacks/resources-types'},
                        {text: 'Custom Tree Types', link: '/v2601/datapacks/tree-types'},
                        {text: 'Tree Simulator Recipes', link: '/v2601/datapacks/tree-simulator-recipes'},
                        {text: 'Sapling Recipes', link: '/v2601/datapacks/sapling-recipes'},
                        {text: 'Leaf Fragment Recipes', link: '/v2601/datapacks/leaf-fragment-recipes'},
                        {text: 'Tags', link: '/v2601/datapacks/tags'},
                    ],
                },
                {
                    text: 'For Mod Developers',
                    items: [
                        {text: 'Plugin API', link: '/v2601/developer/plugin-api'},
                    ],
                },
            ],
            '/old/': [
                {
                    text: 'Mod Information',
                    items: [
                        {text: 'Getting Started', link: '/old/gameplay/getting-started'},
                        {text: 'Resources Types', link: '/old/gameplay/resources-types-list'},
                        {text: 'Resources Saplings', link: '/old/gameplay/resources-saplings'},
                        {text: 'Resources Leaves', link: '/old/gameplay/resources-leaves'},
                        {text: 'Leaf Fragments', link: '/old/gameplay/leaf-fragments'},
                        {text: 'Tree Simulator', link: '/old/gameplay/tree-simulator'},
                        {text: 'Essence Items', link: '/old/gameplay/essence-items'},
                    ],
                },
                {
                    text: 'Configurations',
                    items: [
                        {text: 'Axe Speed Config', link: '/old/config/axe-config'},
                    ],
                },
                {
                    text: 'For Pack Developers',
                    items: [
                        {text: 'Custom Resources Types', link: '/old/datapacks/resources-types'},
                        {text: 'Sapling Types', link: '/old/datapacks/sapling-types'},
                        {text: 'Tree Simulator Recipes', link: '/old/datapacks/tree-simulator-recipes'},
                        {text: 'Sapling Recipes', link: '/old/datapacks/sapling-recipes'},
                        {text: 'Leaf Fragment Recipes', link: '/old/datapacks/leaf-fragment-recipes'},
                    ],
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/CoolerProYT/Resources-Trees'},
            {
                icon: 'discord',
                link: 'https://discord.gg/hvFfqsqQm8',
            },
        ],

        footer: {
            message: 'Released under the All Rights Reserved License.',
            copyright: 'Copyright © 2024 CoolerProMC',
        },

        search: {
            provider: 'local',
        },

        editLink: {
            pattern: 'https://github.com/CoolerProMC/resourcestrees-wiki/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },

        lastUpdated: {
            text: 'Last updated',
        },
    },
})
