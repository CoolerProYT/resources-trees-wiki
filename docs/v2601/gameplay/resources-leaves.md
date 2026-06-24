# Resource Leaves

Resource Leaves are the leaves that grow on resource trees. They drop Leaf Fragments and occasionally a new sapling when broken or when they decay naturally.

## Naming Convention

Leaves follow the naming pattern:

```
<resource_type>_<tree_type>_leaves
```

Examples:
- `iron_oak_leaves`
- `diamond_birch_leaves`

## Drop Behavior

When resource leaves break or decay (without Silk Touch or Shears), they can drop:

| Drop | Condition |
|---|---|
| **Sapling** | Random chance based on `saplingDropChance` (default 12.5%) |
| **Leaf Fragment** | Random chance based on `leafDropChance` (default 25%) |
| **Leaf Fragment (bonus)** | Additional roll at `leafDropChance × 0.5` (default 12.5%) |

### Silk Touch / Shears

Breaking resource leaves with Shears or a Silk Touch tool drops the leaves block itself instead of fragments.

## Color Tinting

Resource leaves are tinted using the ARGB color defined in the resource type. This gives each tree a unique visual appearance without requiring separate textures.

## Flammability

Resource leaves are flammable (same as vanilla leaves):
- **Flammability:** 60
- **Fire spread speed:** 30
