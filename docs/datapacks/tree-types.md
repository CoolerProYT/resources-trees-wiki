#  Custom Tree Types

You can add your own tree types by dropping JSON files into the config directory. No coding required.

## Custom Tree Types

Place JSON files in:

```
config/resourcestrees/tree_type/<name>.json
```

### JSON Format

```json
{
  "name": "oak",
  "treeGrowerName": "oak",
  "saplingTexture": "resourcestrees:block/oak_sapling",
  "leavesTexture": "resourcestrees:block/oak_leaves",
  "originalSapling": "minecraft:oak_sapling",
  "originalLeaves": "minecraft:oak_leaves",
  "log": "minecraft:oak_log"
}
```

### Fields

| Field | Description                                                                                                                                                    |
|---|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name` | Unique identifier (e.g. `"oak"`, `"birch"`)                                                                                                                    |
| `treeGrowerName` | Must match a key in Minecraft's `TreeGrower.GROWERS` map (e.g. `"oak"`, `"spruce"`, `"birch"`, `"jungle"`, `"acacia"`, `"dark_oak"`, `"cherry"`, `"pale_oak"`) |
| `saplingTexture` | Resource location of the model/texture to use for the sapling block/item                                                                                       |
| `leavesTexture` | Resource location of the model/texture to use for the leaves block/item                                                                                        |
| `originalSapling` | Registry name of the vanilla sapling to copy block properties from                                                                                             |
| `originalLeaves` | Registry name of the vanilla leaves to copy block properties from                                                                                              |
| `log` | Registry name of the log block used as the trunk and for Tree Simulator recipe generation                                                                      |

::: warning Block and Item Models
Client items and block states are generated automatically. However, you may need to provide **block model** and **item model** JSON files for new tree types if the auto-generated textures don't look right. Place them in your resourcepack under:
- `assets/resourcestrees/models/block/<name>_sapling.json`
- `assets/resourcestrees/models/block/<name>_leaves.json`

This might be able to auto generate in the future version. Meanwhile, please add them manually.
:::

## Block Model & Item Model
Please manually add the block/item model manually until the mod is updated to auto generate it in runtime.

### Block Models
Place the block models file in:
```
assets/resourcestrees/models/block/
```
:::code-group
```json5 [oak_leaves.json]
{
  "parent": "minecraft:block/leaves",
  "textures": {
    "all": "resourcestrees:block/oak_leaves" // Location defined in Tree Type
  }
}
```

```json5 [oak_sapling.json]
{
  "parent": "resourcestrees:block/cross_tinted",
  "textures": {
    "cross": "resourcestrees:block/oak_sapling", // Location defined in Tree Type
    "cross_tinted": "resourcestrees:block/oak_sapling_layer1" // Location defined in Tree Type with '_layer1'= at the end
  }
}
```
:::

### Item Model
Place the block models file in:
```
assets/resourcestrees/models/item/
```
:::code-group
```json5 [oak_sapling.json]
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "resourcestrees:block/oak_sapling", // Location defined in Tree Type
    "layer1": "resourcestrees:block/oak_sapling_layer1" // Location defined in Tree Type with '_layer1'= at the end
  }
}
```
:::

## Textures
Texture is required for a new TreeType.

### Leaves texture
Place the texture files in:
```
assets/resourcestrees/textures/block/<tree_type_name>_leaves.png
```

The leaves texture need to be grayscale (black & white) because it is used for tinting based on resources type.

### Sapling texture
Two textures is needed for a sapling.

Place the texture files in:
```
assets/resourcestrees/textures/block/<tree_type_name>_sapling.png
assets/resourcestrees/textures/block/<tree_type_name>_sapling_layer1.png
```

The first texture without layer is the trunk/root texture for the sapling.

The `_layer1`texture is the leaves part of the sapling, and it needs to be grayscale (black & white) because it is used for tinting based on resources type.