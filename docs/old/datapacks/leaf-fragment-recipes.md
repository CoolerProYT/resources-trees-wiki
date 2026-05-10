# Leaf Fragment Recipes

Crafting recipes for leaf fragments to resources (e.g. diamond, iron, dirt, etc.) need to be added for new resources type, otherwise it will be useless. You can also add another leaf fragment to resources recipe for existing resources type.

## Adding a Recipe

To provide a crafting recipe for leaf fragments to resources, place a strict shaped recipe JSON at:

```
data/resourcestrees/recipe/fragment_crafting/<resources_type_name>_fragment_to_<resources_name>.json
```

For example, to add `amethyst_fragment_to_amethyst_shard`:

```
data/resourcestrees/recipe/fragment_crafting/amethyst_fragment_to_amethyst_shard.json
```

### Example JSON

::: code-group

```json [1.20.1 - Forge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "type": "forge:partial_nbt",
      "item": "resourcestrees:leaf_fragment",
      "nbt": "{type:\"resourcestrees:amethyst\"}"
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": 6,
    "item": "minecraft:amethyst_shard"
  },
  "show_notification": true
}
```

```json [1.21.1 - NeoForge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "resourcestrees:amethyst"
      }
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": 6,
    "id": "minecraft:amethyst_shard"
  }
}
```

```json [1.21.1 - Fabric]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "fabric:type": "resourcestrees:resources_type",
      "base": {
        "item": "resourcestrees:leaf_fragment"
      },
      "components": {
        "resourcestrees:resources_type": "resourcestrees:amethyst"
      }
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": 6,
    "id": "minecraft:amethyst_shard"
  }
}
```

```json [1.21.1+ Forge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "type": "resourcestrees:resources_type",
      "components": {
        "resourcestrees:resources_type": "resourcestrees:amethyst"
      },
      "items": "resourcestrees:leaf_fragment",
      "strict": true
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": 6,
    "id": "minecraft:amethyst_shard"
  }
}
```

```json [1.21.2+ - NeoForge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "neoforge:ingredient_type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "resourcestrees:amethyst"
      }
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": 6,
    "id": "minecraft:amethyst_shard"
  }
}
```

```json [1.21.2+ - Fabric]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "fabric:type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "resourcestrees:amethyst"
      }
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": 6,
    "id": "minecraft:amethyst_shard"
  }
}
```
:::

Strict Shaped Recipe use standard Minecraft shaped recipe JSON format. The recipe must follow the usual `minecraft:crafting_shaped` type but with stricter checking for components.