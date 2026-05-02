# Custom Saplings

Use the `resourcestrees:resources_sapling_block` builder type in `StartupEvents.registry` to register a custom Resources Sapling block.

## Builder Type

```js
event.create('<id>', 'resourcestrees:resources_sapling_block')
```

## Builder Methods

### `.treeGrower(type: string)`

Sets which tree grower is used when the sapling grows. Must be a valid key in `TreeGrower.GROWERS`. 

Here is all the vanilla TreeGrowers:
| Key | Tree Shape |
| --- | --- |
| `"oak"` | Standard oak |
| `"spruce"` | Tall spruce (supports 2×2 mega) |
| `"birch"` | Tall birch |
| `"jungle"` | Tall jungle (supports 2×2 mega) |
| `"acacia"` | Wide acacia |
| `"dark_oak"` | Wide dark oak (requires 2×2) |
| `"cherry"` | Cherry blossom |
| `"pale_oak"` | Pale oak |

### `.leaves(leavesId: string)`

Sets the companion Resources Leaves block ID. The block must be a `ResourcesLeavesBlock`.

```js
.leaves('kubejs:my_leaves')
```

### `.base(saplingId: string)`

The sapling item ID used as the center of the cross-pattern crafting recipe.

```js
.base('minecraft:oak_sapling')
```

The KubeJS plugin automatically generates a `resources_sapling` recipe that maps this sapling to your custom block. The recipe works for all registered resource types.

### `.copyPropertiesFrom(block)`

Inherits block properties (hardness, sounds, push reaction, etc.) from an existing block.

```js
.copyPropertiesFrom(Blocks.OAK_SAPLING)
```

## Full Example

```js
StartupEvents.registry('block', event => {
    event.create('my_crystal_leaves', 'resourcestrees:resources_leaves_block')
        .sapling('kubejs:my_crystal_sapling')
        .copyPropertiesFrom(Blocks.BIRCH_LEAVES);

    event.create('my_crystal_sapling', 'resourcestrees:resources_sapling_block')
        .treeGrower('birch')
        .leaves('kubejs:my_crystal_leaves')
        .base('minecraft:birch_sapling')
        .copyPropertiesFrom(Blocks.BIRCH_SAPLING);
});
```

## Resource Type Assignment

The resource type is stored in the `ResourcesTypesBlockEntity` on the placed block, set when the player places the sapling item. Your custom block works with all registered resource types automatically.

## Auto-Generated Recipe

The plugin generates this recipe automatically via `beforeRecipeLoading`:

```json
{
  "type": "resourcestrees:resources_sapling",
  "baseSapling": { "id": "minecraft:birch_sapling" },
  "resourcesSapling": { "id": "kubejs:my_crystal_sapling" }
}
```

## Block Models

The plugin generates a block model using the `resourcestrees:block/cross_tinted` parent:

```json
{
  "parent": "resourcestrees:block/cross_tinted",
  "textures": {
    "cross": "kubejs:block/my_crystal_sapling",
    "cross_tinted": "kubejs:block/my_crystal_sapling_layer1"
  }
}
```

The `cross_tinted` texture is tinted at runtime by the resource type color.

## Item Definition

The item definition applies two tint layers:

```json
{
  "model": {
    "type": "minecraft:model",
    "model": "kubejs:item/my_crystal_sapling",
    "tints": [
      { "type": "minecraft:constant", "value": -1 },
      { "type": "resourcestrees:resources_type_tint", "default": -12012264 }
    ]
  }
}
```

- Layer 0 (constant `-1`): base texture rendered without any color change
- Layer 1 (resources_type_tint): tinted by the assigned resource type color
