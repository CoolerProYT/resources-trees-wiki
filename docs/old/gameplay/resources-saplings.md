# Resource Saplings

Resource Saplings are plantable saplings that grow into resource-producing trees.

## Crafting

Each default resource sapling is crafted by surrounding the original vanilla sapling with the resource material in a `+` (cross) pattern:

```
 M 
MSM
 M 
```

- `M` = Resource material (e.g. Iron Block for iron trees)
- `S` = Vanilla sapling (e.g. Oak Sapling)

::: tip Custom Resources Type
Crafting recipes for custom resources type may have different recipe added by the pack developer.
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
