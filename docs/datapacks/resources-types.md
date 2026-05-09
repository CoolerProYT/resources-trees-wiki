# Custom Resource Types

You can add your own resource types by dropping JSON files into the config directory. No coding required.

## File Location

```
config/resourcestrees/resources_type/<name>.json
```

The **filename** (without `.json`) is used as the type's unique identifier. The `name` field inside the JSON must match.

The directory is created automatically on first launch.

## JSON Format

```json
{
  "name": "ruby",
  "material": "minecraft:redstone",
  "color": -3342336,
  "weight": 4,
  "saplingDropChance": 0.1,
  "leafDropChance": 0.2,
  "treeSimulatorTicks": 1400
}
```

### Fields

| Field | Description |
|---|---|
| `name` | Unique identifier. Must match the filename. |
| `material` | Item registry name used to craft the sapling. Prefix with `#` for an item tag. |
| `color` | ARGB integer tint color applied to leaves, sapling, and leaf fragment. |
| `weight` | No longer used (deprecated). |
| `saplingDropChance` | Chance (0.0–1.0) a sapling drops when leaves decay or are broken. |
| `leafDropChance` | Chance (0.0–1.0) a leaf fragment drops from a leaves block. |
| `treeSimulatorTicks` | Ticks per growth cycle in the Tree Simulator. Lower = faster. |

## Using an Item Tag as Material

Prefix the tag path with `#` to use an item tag:

```json
{
  "name": "wood",
  "material": "#minecraft:logs",
  "color": -7508381
}
```

## Color Conversion

The `color` field is an **ARGB integer** (signed 32-bit). To convert from a hex color:

```
#RRGGBB → 0xFF + RR + GG + BB as a signed int
```

For example, `#CC0000` (dark red) = `0xFFCC0000` = `-3342336` as a signed int.

You can calculate it in Java: `(int) 0xFFCC0000`

Or use an online signed 32-bit int converter.

## Example: Ruby

`config/resourcestrees/resources_type/ruby.json`

```json
{
  "name": "ruby",
  "material": "minecraft:redstone",
  "color": -3342336,
  "saplingDropChance": 0.1,
  "leafDropChance": 0.2,
  "treeSimulatorTicks": 1400
}
```

This creates:
- `ruby_oak_sapling`, `ruby_birch_sapling`, … (one per tree type)
- `ruby_oak_leaves`, `ruby_birch_leaves`, …
- `ruby_leaf_fragment`

All tinted with the specified red color.

