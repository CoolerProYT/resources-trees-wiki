# Resources Saplings

Resources Saplings are standard sapling blocks infused with a resource type via data components. They behave like their vanilla counterparts in every way, but grow trees with [Resources Leaves](/gameplay/resources-leaves) that drop [Leaf Fragments](/gameplay/leaf-fragments).

## Crafting

Place a vanilla sapling in the center and the resource material in the four cardinal slots:

```
   [M]
[M][S][M]
   [M]
```

The recipe automatically detects which ResourcesType matches the material. One recipe format covers all types — there is no need for separate recipes per type.

## Variants

| Block ID | Base Sapling | Tree Type |
| --- | --- | --- |
| `resourcestrees:resources_oak_sapling` | `minecraft:oak_sapling` | Oak |
| `resourcestrees:resources_spruce_sapling` | `minecraft:spruce_sapling` | Spruce |
| `resourcestrees:resources_birch_sapling` | `minecraft:birch_sapling` | Birch |
| `resourcestrees:resources_jungle_sapling` | `minecraft:jungle_sapling` | Jungle |
| `resourcestrees:resources_acacia_sapling` | `minecraft:acacia_sapling` | Acacia |
| `resourcestrees:resources_dark_oak_sapling` | `minecraft:dark_oak_sapling` | Dark Oak |
| `resourcestrees:resources_cherry_sapling` | `minecraft:cherry_sapling` | Cherry |
| `resourcestrees:resources_pale_oak_sapling` | `minecraft:pale_oak_sapling` | Pale Oak |

## Placement Rules

Resources Saplings follow the same placement rules as their vanilla counterparts.

::: warning Dark Oak
`resources_dark_oak_sapling` **requires a 2×2 arrangement** to grow, just like vanilla Dark Oak. All four saplings in the 2×2 must be the same resource type.
:::

## Growing

- Grows naturally over time via random ticks.
- Supports **bone meal** to force growth.
- When grown, all leaves in the resulting tree are automatically assigned the resource type.
- Mega trees (2×2 Spruce and Jungle) are supported.

## Block Entity

Each placed Resources Sapling has an invisible `ResourcesTypesBlockEntity` that stores the resource type:

```json
{
  "type": "resourcestrees:iron"
}
```

This data is synchronized to clients so the tint color renders correctly. When you mine a sapling, the item retains the resource type via an item data component.

## Tags

Resources Saplings are registered in:

- `minecraft:saplings` block tag
- `minecraft:saplings` item tag

All Resources Saplings are **compostable** with a 30% chance.

## Item Data Component

The resource type is stored on items as:

```
resourcestrees:resources_type = "resourcestrees:<type_name>"
```

This component is used by recipes, the Tree Simulator, and the tinting system to identify the type.
