# Getting Started

This page provides basic information for ResourcesTrees.

## Installation

ResourcesTrees can be downloaded on CurseForge and Modrinth.

| Platform | Link |
| --- | --- |
| CurseForge | [Download from CurseForge](https://www.curseforge.com/minecraft/mc-mods/resourcestrees) |
| Modrinth | [Download from Modrinth](https://modrinth.com/mod/resourcestrees) |

## Supported Versions

| Mod Loader              | Minecraft Version | Maintained |
|-------------------------|-------------------|------------|
| NeoForge, Fabric        | 26.1.x            | ✅          |
| NeoForge, Fabric, Forge | 1.21.11           | ❌          |
| NeoForge, Fabric, Forge | 1.21.10           | ❌          |
| NeoForge, Fabric        | 1.21.1            | ❌          |
| Forge                   | 1.20.1            | ❌         |

::: info
Version that are no longer maintained will still receive critical bug fixes.
:::

## How It Works

ResourcesTrees adds a resource-farming loop using infused trees:

1. **Craft a Resources Sapling** — place a vanilla sapling in the center of a cross pattern with a resource material in the four cardinal slots.
2. **Grow the tree** — plant on valid soil and wait, or use bone meal.
3. **Harvest Leaf Fragments** — when leaves decay or are broken (without Silk Touch/Shears), they drop colored Leaf Fragments matching the resource type.
4. **Craft resources** — use Leaf Fragments in shaped crafting recipes to produce the actual resource items.
5. **Automate** — use the [Tree Simulator](/gameplay/tree-simulator) with an axe for hands-free production.

## Crafting a Resources Sapling

Place a vanilla sapling in the **center** and the resource material in the **four cardinal slots** (top, bottom, left, right):

```
   [M]
[M][S][M]
   [M]
```

`S` = any vanilla sapling (Oak, Spruce, Birch, Jungle, Acacia, Dark Oak, Cherry, Pale Oak)  
`M` = any item that matches a registered resource type's material

The recipe automatically detects which ResourcesType the material belongs to and produces the corresponding Resources Sapling with that type applied.

::: tip
You can use item tags as material. For example, the `Wood` type uses the `#c:logs` tag — any log item will work in the cardinal slots.
:::

## Available Sapling Variants

| Sapling | Tree Shape |
| --- | --- |
| Resources Oak Sapling | Standard oak tree |
| Resources Spruce Sapling | Tall spruce (supports 2×2 mega) |
| Resources Birch Sapling | Tall birch |
| Resources Jungle Sapling | Tall jungle (supports 2×2 mega) |
| Resources Acacia Sapling | Wide acacia |
| Resources Dark Oak Sapling | **Requires 2×2 planting** |
| Resources Cherry Sapling | Cherry blossom |
| Resources Pale Oak Sapling | Pale oak |

All sapling variants support all 50+ resource types.

## Mod Compatibility

| Mod | Status | Notes |
| --- | --- | --- |
| JEI | ✅ Full support | All Tree Simulator and crafting recipes shown |
| JADE / Waila | ✅ Full support | Shows resource type name on hover |
| Tree Harvester | ✅ Supported | Harvested saplings retain resource type |
| KubeJS | ✅ NeoForge only | Register custom sapling and leaves blocks |
