# Limitations

This page documents known limitations of the KubeJS integration.

## Platform

::: danger NeoForge Only
The KubeJS plugin is NeoForge exclusive. Fabric does not support KubeJS integration. Custom blocks on Fabric require a companion mod.
:::

## Known Limitations

### No Custom Fragment Crafting Recipes

Shaped crafting recipes that use `ResourcesTypeIngredient` (typed leaf fragment ingredient) cannot be added through KubeJS at this time.

**Workaround:** Use datapack.

---

### No Custom Tree Simulator Drop Tables via Script

Tree Simulator recipes must be added as [JSON datapack recipes](/datapacks/tree-simulator-recipes). KubeJS recipe scripting for the `tree_simulator` type is not currently supported.

**Workaround:** Add `resourcestrees:tree_simulator` recipes as JSON files in `data/<namespace>/recipe/`.

---

### Modded Tree Growers May Have Issues

When using a tree grower from a third-party mod that use custom TreeGrower (e.g., Biomes O' Plenty), it might not work at all if they pass null value to vanilla TreeGrower.

**Workaround:** Use vanilla tree grower keys (`oak`, `spruce`, etc.) for guaranteed compatibility.

:::info
I have implemented some compatibility code for BOP TreeGrower, but there is still some issue on trunk placement, Resources Leaves will replace the trunk.
:::

---

### Textures Are Not Auto-Generated

The plugin generates models and item definitions but does **not** create textures. You must supply:

| File | Required For |
| --- | --- |
| `kubejs/assets/kubejs/textures/block/<name>.png` | Base texture |
| `kubejs/assets/kubejs/textures/block/<name>_layer1.png` | Sapling tint overlay |

If `_layer1` is missing, the sapling will render without the resource type tint overlay.

---

### Restart Required After Script Changes

`StartupEvents.registry` runs at game/server startup. Changing the registration script requires a **full game restart** — `/reload` is not sufficient.