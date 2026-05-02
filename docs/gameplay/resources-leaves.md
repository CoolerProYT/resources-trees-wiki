# Resources Leaves

Resources Leaves are the blocks that form the canopy of a Resources tree. They drop [Leaf Fragments](/gameplay/leaf-fragments) on decay and are tinted to the color of their resource type.

## Variants

| Block ID | Corresponding Sapling |
| --- | --- |
| `resourcestrees:resources_oak_leaves` | Resources Oak Sapling |
| `resourcestrees:resources_spruce_leaves` | Resources Spruce Sapling |
| `resourcestrees:resources_birch_leaves` | Resources Birch Sapling |
| `resourcestrees:resources_jungle_leaves` | Resources Jungle Sapling |
| `resourcestrees:resources_acacia_leaves` | Resources Acacia Sapling |
| `resourcestrees:resources_dark_oak_leaves` | Resources Dark Oak Sapling |
| `resourcestrees:resources_cherry_leaves` | Resources Cherry Sapling |
| `resourcestrees:resources_pale_oak_leaves` | Resources Pale Oak Sapling |

## Drop Behavior

### Natural Decay or Broken Without Silk Touch / Shears

| Drop | Condition |
| --- | --- |
| Leaf Fragment (primary) | `random < leafDropChance` |
| Leaf Fragment (secondary) | `random < leafDropChance / 2` |
| Resources Sapling | `random < saplingDropChance / 2` |

### Shears or Silk Touch

Drops the **leaves block** with its resource type component intact. No fragments are produced.

::: tip Silk Touch Leaves
Leaves collected with Silk Touch or Shears can be re-placed as decorative blocks and retain their resource type and tint color.
:::

## Loot Table

The loot table for all Resources Leaves is set to `shears_or_silk_touch_only_drop`. All other drop logic (fragments, saplings) is handled in code by the block's `getDrops()` method.

## Visual Appearance

Resources Leaves use a `BlockTintSource` (`resourcestrees:resources_type_tint`) that reads the `ResourcesTypesBlockEntity` and returns the type's color value. If no type is assigned, the block renders with a white tint.

Item tinting uses `ResourcesTypeTintSource`, a custom `ItemTintSource` registered as `resourcestrees:resources_type_tint`.

## Block Entity

Each placed Resources Leaves block has a `ResourcesTypesBlockEntity` synchronized to clients:

```json
{
  "type": "resourcestrees:diamond"
}
```

## Tags

Resources Leaves are registered in:

- `minecraft:leaves` block tag

All Resources Leaves are **compostable** with a 30% chance.

## Flammability

| Property | Value |
| --- | --- |
| Flammability | 60 |
| Fire Spread Speed | 30 |

Both values match vanilla leaves.
