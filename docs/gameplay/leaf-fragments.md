# Leaf Fragments

Leaf Fragments are the primary crafting ingredient in ResourcesTrees. They drop from [Resources Leaves](/gameplay/resources-leaves) and are used to craft actual resource items.

## Obtaining

Leaf Fragments drop when Resources Leaves decay or are broken without Silk Touch or Shears.

| Source | Primary Drop | Secondary Drop |
| --- | --- | --- |
| Natural leaf decay | `random < leafDropChance` | `random < leafDropChance / 2` |
| Player break (no silk touch/shears) | `random < leafDropChance` | `random < leafDropChance / 2` |

Each resource type has its own `leafDropChance`. The default is `0.25` (25%).

## Item Name

The item name is dynamically prefixed with the type name:

| Type | Display Name |
| --- | --- |
| `iron` | Iron Leaf Fragment |
| `diamond` | Diamond Leaf Fragment |
| `netherite` | Netherite Leaf Fragment |

## Item Data Component

The resource type is stored as:

```
resourcestrees:resources_type = "resourcestrees:<type_name>"
```

Fragments from different types **do not stack with each other**, even though they share the same item ID (`resourcestrees:leaf_fragment`).

## Crafting Resources

Leaf Fragments are crafted into resources using shaped crafting recipes. The pattern varies by output item.

::: info
All fragment crafting recipes are viewable in JEI. Each slot requires a fragment of the specific resource type — fragments of the wrong type will not satisfy the recipe.
:::

### Pattern Examples

**Circle** (`AAA / A_A / AAA`) — used for: Iron Ingot, Coal, Emerald, Spider Eye, Ink Sac, etc.

**Cube** (`AAA / AAA / AAA`) — used for: Diamond, Netherite Ingot (rarer drops)

**Line** (`___ / AAA / ___`) — used for: Leather, String, Bone, Ender Pearl, etc.

**Straight** (`_A_ / _A_ / _A_`) — used for: Feather, Beef, Blaze Rod, Breeze Rod, etc.

**Circle Surrounded** (`AAA / ABA / AAA`) — used for: Stone (with Coal center), Deepslate (with Coal center)

**Two By Two** (`BA_ / AB_ / ___`) — used for: Clay Ball (Dirt + Water), Sand (Dirt + Fire), etc.

There are also many custom patterns for specific items like Nether Star, Shulker Shell, Chorus Flower, etc.

## Tips

::: tip Sorting Storage
Leaf Fragments of different types share the same item ID but different data components. Make sure your storage system supports component-based sorting to avoid mixing types in the same slot.
:::

::: tip Automation
The [Tree Simulator](/gameplay/tree-simulator) automatically generates Leaf Fragments among its outputs. For bulk fragment collection, running multiple simulators with faster axe tiers is more efficient than farming trees manually.
:::
