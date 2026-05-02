# KubeJS Integration

::: warning NeoForge Only
KubeJS integration is only available on **NeoForge**. Fabric does not have KubeJS support.
:::

ResourcesTrees provides a KubeJS plugin that allows registering custom Resources Sapling and Leaves blocks directly from startup scripts.

## Requirements

- NeoForge mod loader
- KubeJS mod installed

## What the Plugin Provides

| Feature | Supported |
| --- | --- |
| Register custom Resources Sapling block | ✅ |
| Register custom Resources Leaves block | ✅ |
| Auto-generate sapling crafting recipe | ✅ |
| Auto-generate block models | ✅ |
| Auto-generate item definitions (with tint) | ✅ |
| Auto-generate loot tables | ✅ |
| Custom Tree Simulator drop tables | ❌ Use datapack |
| Custom fragment crafting recipes | ❌ Use datapack |

## Quick Start

```js
StartupEvents.registry('block', event => {
    event.create('oak_sapling', 'resourcestrees:resources_sapling_block')
        .treeGrower('oak')
        .leaves('kubejs:oak_leaves')
        .base('minecraft:oak_sapling')
        .copyPropertiesFrom(Blocks.OAK_SAPLING);

    event.create('oak_leaves', 'resourcestrees:resources_leaves_block')
        .sapling("kubejs:oak_sapling")
        .copyPropertiesFrom(Blocks.OAK_LEAVES);
});
```

Both blocks are registered under the `kubejs` namespace.

## Textures Required

You must supply textures in your KubeJS assets directory:

| File | Purpose |
| --- | --- |
| `kubejs/assets/kubejs/textures/block/<name>.png` | Base sapling or leaves texture |
| `kubejs/assets/kubejs/textures/block/<name>_layer1.png` | Sapling tint overlay (grayscale/white silhouette) |

The `_layer1` texture is what gets tinted at runtime by the resource type color. The base texture is rendered unmodified.

## Generated Assets

The KubeJS plugin automatically generates:

- Block state JSON
- Block model JSON (referencing the `resourcestrees:block/cross_tinted` parent for saplings)
- Item model JSON
- Item definition JSON (with `resourcestrees:resources_type_tint`)
- Loot table JSON (`shears_or_silk_touch_only_drop` for leaves)

## Creative Tab

All KubeJS-registered Resources Sapling and Leaves blocks are automatically included in the ResourcesTrees creative tab for every registered resource type.

## Detailed Reference

- [Custom Saplings](/kubejs/custom-saplings) — full API reference for `resources_sapling_block`
- [Custom Leaves](/kubejs/custom-leaves) — full API reference for `resources_leaves_block`
- [Limitations](/kubejs/limitations) — known limitations and workarounds
