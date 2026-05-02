# Sapling Recipes

The `resourcestrees:resources_sapling` recipe type defines which vanilla sapling maps to which Resources Sapling block. This is used by the cross-pattern crafting recipe.

## When to Use

You only need this recipe type if you are:

- Registering a **new custom Resources Sapling block** via a companion mod or KubeJS.
- Mapping an additional vanilla sapling to an existing Resources Sapling block.

For custom resource **types** added via datapack, the 8 existing sapling recipes already cover all tree shapes. No new recipe is needed.

## File Location

```
data/<namespace>/recipe/<name>.json
```

## Recipe Format

```json
{
  "type": "resourcestrees:resources_sapling",
  "baseSapling": {
    "id": "<vanilla_sapling_item_id>"
  },
  "resourcesSapling": {
    "id": "<resources_sapling_block_item_id>"
  }
}
```

| Field | Description |
| --- | --- |
| `baseSapling` | The vanilla sapling placed in the center of the crafting grid. |
| `resourcesSapling` | The Resources Sapling block item produced by the recipe. |

The material in the cardinal slots is dynamically matched against all registered ResourcesTypes. No material field is needed — the recipe works for **all types** automatically.

## Built-in Recipes

The mod ships 8 built-in recipes:

| Recipe ID | Base Sapling | Resources Sapling |
| --- | --- | --- |
| `resourcestrees:saplings/resources_oak_sapling` | `minecraft:oak_sapling` | `resourcestrees:resources_oak_sapling` |
| `resourcestrees:saplings/resources_spruce_sapling` | `minecraft:spruce_sapling` | `resourcestrees:resources_spruce_sapling` |
| `resourcestrees:saplings/resources_birch_sapling` | `minecraft:birch_sapling` | `resourcestrees:resources_birch_sapling` |
| `resourcestrees:saplings/resources_jungle_sapling` | `minecraft:jungle_sapling` | `resourcestrees:resources_jungle_sapling` |
| `resourcestrees:saplings/resources_acacia_sapling` | `minecraft:acacia_sapling` | `resourcestrees:resources_acacia_sapling` |
| `resourcestrees:saplings/resources_dark_oak_sapling` | `minecraft:dark_oak_sapling` | `resourcestrees:resources_dark_oak_sapling` |
| `resourcestrees:saplings/resources_cherry_sapling` | `minecraft:cherry_sapling` | `resourcestrees:resources_cherry_sapling` |
| `resourcestrees:saplings/resources_pale_oak_sapling` | `minecraft:pale_oak_sapling` | `resourcestrees:resources_pale_oak_sapling` |

## Example: Custom Sapling Block

`data/mymod/recipe/saplings/my_crystal_sapling.json`

```json
{
  "type": "resourcestrees:resources_sapling",
  "baseSapling": {
    "id": "minecraft:birch_sapling"
  },
  "resourcesSapling": {
    "id": "mymod:my_crystal_sapling"
  }
}
```

This allows players to craft `mymod:my_crystal_sapling` (with any resource type) using a birch sapling + material cross pattern.

## KubeJS

If you registered a custom sapling via the KubeJS plugin, the recipe is **automatically generated** — you do not need to write it manually. See [KubeJS Custom Saplings](/kubejs/custom-saplings).

## Fragment Crafting Recipes

Fragment → resource shaped crafting recipes can be added via datapack using the `resourcestrees:strict_shaped` recipe type.

The ingredient key syntax differs slightly between loaders — use `neoforge:ingredient_type` on NeoForge and `fabric:type` on Fabric.

### Recipe Format

::: code-group

```json [NeoForge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "neoforge:ingredient_type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "<type_key>"
      }
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": "<int>",
    "id": "<item_id>"
  }
}
```

```json [Fabric]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "fabric:type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "<type_key>"
      }
    }
  },
  "pattern": [
    "   ",
    "AAA",
    "   "
  ],
  "result": {
    "count": "<int>",
    "id": "<item_id>"
  }
}
```

:::

### Fields

| Field | Description |
| --- | --- |
| `neoforge:ingredient_type` / `fabric:type` | Declares the custom ingredient type. Use `resourcestrees:resources_type`. |
| `base` | Must be `resourcestrees:leaf_fragment`. |
| `components."resourcestrees:resources_type"` | The resource type key this ingredient requires (e.g. `resourcestrees:amethyst`). |
| `pattern` | Standard 3×3 shaped crafting pattern. Use spaces for empty slots. |
| `result` | The output item, with optional `count`. |

### Example: Amethyst Shard (Line Pattern)

::: code-group

```json [NeoForge]
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

```json [Fabric]
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

### Example: Diamond (Cube Pattern, Custom Type)

::: code-group

```json [NeoForge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "neoforge:ingredient_type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "resourcestrees:diamond"
      }
    }
  },
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "result": {
    "count": 4,
    "id": "minecraft:diamond"
  }
}
```

```json [Fabric]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "fabric:type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": {
        "resourcestrees:resources_type": "resourcestrees:diamond"
      }
    }
  },
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "result": {
    "count": 4,
    "id": "minecraft:diamond"
  }
}
```

:::

### Multi-Type Recipe (Two Different Fragments)

You can define multiple ingredient keys using different resource types:

::: code-group

```json [NeoForge]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "neoforge:ingredient_type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": { "resourcestrees:resources_type": "resourcestrees:dirt" }
    },
    "B": {
      "neoforge:ingredient_type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": { "resourcestrees:resources_type": "resourcestrees:water" }
    }
  },
  "pattern": [
    "BA ",
    "AB ",
    "   "
  ],
  "result": {
    "count": 12,
    "id": "minecraft:clay_ball"
  }
}
```

```json [Fabric]
{
  "type": "resourcestrees:strict_shaped",
  "category": "building",
  "key": {
    "A": {
      "fabric:type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": { "resourcestrees:resources_type": "resourcestrees:dirt" }
    },
    "B": {
      "fabric:type": "resourcestrees:resources_type",
      "base": "resourcestrees:leaf_fragment",
      "components": { "resourcestrees:resources_type": "resourcestrees:water" }
    }
  },
  "pattern": [
    "BA ",
    "AB ",
    "   "
  ],
  "result": {
    "count": 12,
    "id": "minecraft:clay_ball"
  }
}
```

:::

::: tip File Location
Place your recipe files in `data/<namespace>/recipe/<name>.json` inside your datapack. Use a unique namespace to avoid conflicts with built-in recipes.
:::

::: info JEI
Custom `strict_shaped` recipes are visible in JEI. The ingredient slots will show the required fragment type. Make sure your recipe key uses the exact `resourcestrees:resources_type` component value matching the type you registered.
:::