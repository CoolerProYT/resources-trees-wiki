# Tree Simulator Recipes

The Tree Simulator uses custom `tree_simulator` recipes to determine what a sapling produces and how long it takes to grow.

## Auto-Generation

By default, a Tree Simulator recipe is **automatically generated** for every registered resource sapling. You do not need to create these files unless you want to customize the outputs.

The auto-generated recipe produces:

| Output | Chance | Min Rolls | Max Rolls |
|---|---|---|---|
| Log (matching tree type) | 30% | 1 | 1 |
| Leaf Fragment | 100% | 1 | 1 |
| Leaf Fragment (bonus) | `leafDropChance × 0.5` | 1 | 4 |
| Sapling (same type) | `saplingDropChance` | 1 | 1 |

## Custom Recipe Format

To override the recipe for a specific sapling, place a JSON file at:

```
data/resourcestrees/recipe/tree_simulator/<sapling_name>.json
```

For example, to customize the `iron_oak_sapling` recipe:

```
data/resourcestrees/recipe/tree_simulator/iron_oak_sapling.json
```

### JSON Format

```json
{
  "type": "resourcestrees:tree_simulator",
  "tree": {
    "id": "resourcestrees:iron_oak_sapling",
    "count": 1
  },
  "ticksToGrow": 1200,
  "drops": [
    {
      "output": {
        "id": "minecraft:iron_ingot",
        "count": 1
      },
      "chance": 0.5,
      "minRolls": 1,
      "maxRolls": 3
    },
    {
      "output": {
        "id": "resourcestrees:iron_leaf_fragment",
        "count": 1
      },
      "chance": 1.0,
      "minRolls": 1,
      "maxRolls": 1
    }
  ]
}
```

### Fields

| Field | Description |
|---|---|
| `type` | Always `"resourcestrees:tree_simulator"` |
| `tree` | The sapling item this recipe applies to (matched by item + components) |
| `ticksToGrow` | Base ticks per cycle (before axe multiplier). Lower = faster. |
| `drops` | List of output entries (see below) |

### Drop Entry Fields

| Field | Description |
|---|---|
| `output` | The item to produce (uses `ItemStackTemplate` format: `id` + optional `count` and components) |
| `chance` | Probability (0.0–1.0) this drop occurs per roll |
| `minRolls` | Minimum number of times to attempt this drop per harvest |
| `maxRolls` | Maximum number of times to attempt this drop per harvest |

The actual rolls per harvest = `random.nextInt(maxRolls - minRolls + 1) + minRolls`.

## Viewing Recipes In-Game

If JEI is installed, Tree Simulator recipes are visible in the **Tree Simulator** recipe category. Click the Tree Simulator block in JEI to browse all recipes.
