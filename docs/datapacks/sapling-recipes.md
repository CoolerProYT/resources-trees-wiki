# Sapling Recipes

Crafting recipes for resource saplings are **automatically generated** for all registered resource type + tree type combinations. You can override individual recipes if needed.

## Default Recipe Pattern

The auto-generated sapling recipe uses a `+` (cross) pattern:

```
 M 
MSM
 M 
```

- `M` = The resource type's material item (or any item matching its tag)
- `S` = The original vanilla sapling for the tree type

This produces 1 resource sapling.

## Overriding a Recipe

To provide a custom crafting recipe for a specific sapling, place a shaped recipe JSON at:

```
data/resourcestrees/recipe/saplings/<sapling_name>.json
```

For example, to customize `diamond_oak_sapling`:

```
data/resourcestrees/recipe/saplings/diamond_oak_sapling.json
```

### Example JSON

```json
{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "DDD",
    "DSD",
    "DDD"
  ],
  "key": {
    "D": {
      "item": "minecraft:diamond"
    },
    "S": {
      "item": "minecraft:oak_sapling"
    }
  },
  "result": {
    "id": "resourcestrees:diamond_oak_sapling",
    "count": 1
  }
}
```

Use standard Minecraft shaped recipe JSON format. The recipe must follow the usual `minecraft:crafting_shaped` or `minecraft:crafting_shapeless` type.

::: tip Recipe Book Category
Auto-generated sapling recipes are placed in the **Misc** crafting book category.
:::
