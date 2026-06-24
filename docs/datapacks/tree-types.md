#  Custom Tree Types

You can add your own tree types by dropping JSON files into the config directory. No coding required.

::: warning Client & Server must match
This config registers actual blocks and items, so the **client and server must use the exact same config**. If they differ, the client will fail to connect (registry mismatch) and textures/models won't load correctly. Distribute the same `config/resourcestrees` files to every player and the server.
:::

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
  "log": "minecraft:oak_log",
  "particle": 0.01,
  "ambient_leaves_block_sound_player": {
    "ambient_sound": "minecraft:block.cherry_leaves.ambient",
    "chance": 300,
    "nearby_same_leaves_required": 3
  }
}
```

### Fields

| Field | Required | Default | Description                                                                                                                                                    |
|---|---|---|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name` | ✅ | — | Unique identifier (e.g. `"oak"`, `"birch"`)                                                                                                                    |
| `treeGrowerName` | ✅ | — | Name of the [grower type](/datapacks/grower-types) used to grow this tree (e.g. `"oak"`, `"spruce"`, `"birch"`, `"jungle"`, `"acacia"`, `"dark_oak"`, `"cherry"`, `"pale_oak"`) |
| `saplingTexture` | ✅ | — | Resource location of the model/texture to use for the sapling block/item                                                                                       |
| `leavesTexture` | ✅ | — | Resource location of the model/texture to use for the leaves block/item                                                                                        |
| `originalSapling` | ✅ | — | Registry name of the vanilla sapling to copy block properties from                                                                                             |
| `originalLeaves` | ✅ | — | Registry name of the vanilla leaves to copy block properties from                                                                                              |
| `log` | ✅ | — | Registry name of the log block used as the trunk and for Tree Simulator recipe generation                                                                      |
| `particle` | ❌ | `0.01` | Per-tick chance (`0.0`–`1.0`) for the leaves block to spawn falling tinted leaf particles. Set to `0` to disable.                                              |
| `ambient_leaves_block_sound_player` | ❌ | _no sound_ | Controls the ambient rustling sound emitted by the leaves block. Omit for silent leaves. See [below](#ambient-leaves-sound).                                   |

### Ambient leaves sound

The optional `ambient_leaves_block_sound_player` object uses Minecraft's vanilla `AmbientLeavesBlockSoundPlayer` format. All of its fields are optional:

| Field | Default | Description |
|---|---|---|
| `ambient_sound` | _none_ | Sound event id played as the ambient rustle. If omitted, no sound plays. |
| `chance` | `300` | Average number of ticks between sound attempts (higher = rarer). |
| `satisfying_blocks` | _none_ | A block tag; the sound only plays when enough of these blocks are nearby. |
| `nearby_satisfying_blocks_required` | `1` | How many `satisfying_blocks` must be nearby for the sound to play. |
| `nearby_same_leaves_required` | `3` | How many of the same leaves block must be nearby for the sound to play. |

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