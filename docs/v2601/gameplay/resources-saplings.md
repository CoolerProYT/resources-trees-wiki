# Resource Saplings

Resource Saplings are plantable saplings that grow into resource-producing trees. Every combination of a **Resource Type** and a **Tree Type** produces a unique sapling.

## Naming Convention

Saplings follow the naming pattern:

```
<resource_type>_<tree_type>_sapling
```

Examples:
- `iron_oak_sapling`
- `diamond_birch_sapling`
- `netherite_dark_oak_sapling`

## Crafting

Each resource sapling is crafted by surrounding the original vanilla sapling with the resource material in a `+` (cross) pattern:

```
 M 
MSM
 M 
```

- `M` = Resource material (e.g. Iron Block for iron trees)
- `S` = Vanilla sapling (e.g. Oak Sapling)

::: tip Auto-Generated Recipe
Crafting recipes are automatically generated for all sapling combinations. You can override a specific recipe by placing a JSON file at:
`data/resourcestrees/recipe/saplings/<sapling_name>.json`
:::

## Growing

Plant a resource sapling on grass or dirt just like a vanilla sapling. It will grow using the same tree structure as its tree type (oak, birch, jungle, etc.). The leaves that grow will be resource leaves matching the sapling's resource type.

## Drop Behavior

When a resource sapling's loot table is triggered (e.g. broken without Silk Touch), it drops itself. The default drop chance when generated from leaf decay is defined by the `saplingDropChance` of its resource type.

| Resource Type | Default Sapling Drop Chance |
|---|---|
| Most types | 12.5% |
| `diamond` | 10% |
| `netherite` | 7.5% |
