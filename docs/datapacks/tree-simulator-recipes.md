# Tree Simulator Recipes

Custom Tree Simulator drop tables can be added via datapack using the `resourcestrees:tree_simulator` recipe type.

## When to Use

The Tree Simulator has a **built-in fallback** that generates a default drop table for any sapling+type combination without an explicit recipe. Use a custom recipe when you want:

- Different drop items or different chances/amounts
- Completely custom outputs for your resource type
- A different `ticksToGrow` for a specific sapling+type combination

## File Location

```
data/<namespace>/recipe/<name>.json
```

## Recipe Format

```json
{
  "type": "resourcestrees:tree_simulator",
  "tree": {
    "id": "<sapling_item_id>",
    "components": {
      "resourcestrees:resources_type": "<type_key>"
    }
  },
  "drops": [
    {
      "output": {
        "id": "<item_id>"
      },
      "chance": <float 0.0–1.0>,
      "minRolls": <int>,
      "maxRolls": <int>
    }
  ],
  "ticksToGrow": <int>
}
```

## Fields

### `tree`

An `ItemStackTemplate` that must match the sapling in the input slot exactly, including the `resources_type` data component.

### `drops`

A list of drop entries. Each entry is rolled independently per harvest cycle.

| Field | Type | Description |
| --- | --- | --- |
| `output` | ItemStackTemplate | The item to produce. Can include data components. |
| `chance` | Float | Probability this drop fires on each roll. |
| `minRolls` | Integer | Minimum roll attempts per harvest. |
| `maxRolls` | Integer | Maximum roll attempts per harvest. |

### `ticksToGrow`

Overrides the type's default `treeSimulatorTicks` for this specific sapling+type combination. The axe multiplier is still applied on top.

## Example: Iron Oak Tree

`data/mypack/recipe/tree_simulator/iron_oak.json`

```json
{
  "type": "resourcestrees:tree_simulator",
  "tree": {
    "id": "resourcestrees:resources_oak_sapling",
    "components": {
      "resourcestrees:resources_type": "resourcestrees:iron"
    }
  },
  "drops": [
    {
      "output": { "id": "minecraft:iron_ingot" },
      "chance": 0.6,
      "minRolls": 1,
      "maxRolls": 3
    },
    {
      "output": { "id": "minecraft:raw_iron" },
      "chance": 0.4,
      "minRolls": 1,
      "maxRolls": 2
    },
    {
      "output": {
        "id": "resourcestrees:leaf_fragment",
        "components": {
          "resourcestrees:resources_type": "resourcestrees:iron"
        }
      },
      "chance": 1.0,
      "minRolls": 1,
      "maxRolls": 1
    },
    {
      "output": {
        "id": "resourcestrees:resources_oak_sapling",
        "components": {
          "resourcestrees:resources_type": "resourcestrees:iron"
        }
      },
      "chance": 0.125,
      "minRolls": 1,
      "maxRolls": 1
    }
  ],
  "ticksToGrow": 1200
}
```

## Example: Custom Type

For a custom `mymod:ruby` type on a spruce sapling:

```json
{
  "type": "resourcestrees:tree_simulator",
  "tree": {
    "id": "resourcestrees:resources_spruce_sapling",
    "components": {
      "resourcestrees:resources_type": "mymod:ruby"
    }
  },
  "drops": [
    {
      "output": { "id": "mymod:ruby_shard" },
      "chance": 0.5,
      "minRolls": 1,
      "maxRolls": 4
    },
    {
      "output": { "id": "minecraft:spruce_log" },
      "chance": 0.8,
      "minRolls": 2,
      "maxRolls": 5
    }
  ],
  "ticksToGrow": 1500
}
```

## Recipe Priority

1. The simulator first checks the loaded recipe registry for a matching `tree_simulator` recipe.
2. If no match is found, it falls back to the built-in default formula.

Custom recipes always take priority over the fallback.

## Default Fallback Formula

| Drop | Chance | Min Rolls | Max Rolls |
| --- | --- | --- | --- |
| Log (type-matched) | 50% | 1 | 4 |
| Leaf Fragment | 100% | 1 | 1 |
| Leaf Fragment (bonus) | `leafDropChance` | 1 | 4 |
| Resources Sapling | `saplingDropChance` | 1 | 1 |
| Stick | 10% | 1 | 2 |
| Apple | 5% | 1 | 1 |
