# Sapling Recipes

Crafting recipes for resource saplings are **not automatically generated** for all registered resource type + saplings combinations in this version. You need to add recipes for every sapling + resources types you added.

## Adding a Recipe

To provide a crafting recipe for a specific sapling and resources type, place a shaped recipe JSON at:

```
data/resourcestrees/recipe/saplings/<sapling_name>.json
```

For example, to add `diamond_oak_sapling`:

```
data/resourcestrees/recipe/saplings/diamond_oak_sapling.json
```

### Example JSON

::: code-group

```json [1.20.1]
{
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "key": {
    "A": {
      "item": "minecraft:diamond_block"
    },
    "B": {
      "item": "minecraft:oak_sapling"
    }
  },
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "result": {
    "count": 1,
    "item": "resourcestrees:resources_oak_sapling",
    "nbt": "{type:\"resourcestrees:diamond\"}"
  },
  "show_notification": true
}
```

```json [1.21.1]
{
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "key": {
    "A": {
      "item": "minecraft:diamond_block"
    },
    "B": {
      "item": "minecraft:oak_sapling"
    }
  },
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "result": {
    "components": {
      "resourcestrees:resources_type": "resourcestrees:diamond"
    },
    "count": 1,
    "id": "resourcestrees:resources_oak_sapling"
  }
}
```

```json [1.21.2+]
{
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "key": {
    "A": "minecraft:diamond_block",
    "B": "minecraft:oak_sapling"
  },
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "result": {
    "components": {
      "resourcestrees:resources_type": "resourcestrees:diamond"
    },
    "count": 1,
    "id": "resourcestrees:resources_oak_sapling"
  }
}
```
:::

Use standard Minecraft shaped recipe JSON format. The recipe must follow the usual `minecraft:crafting_shaped` or `minecraft:crafting_shapeless` type.