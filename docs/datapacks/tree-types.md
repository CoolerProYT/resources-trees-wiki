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