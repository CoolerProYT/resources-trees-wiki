# Custom Resources Types

Resources Types are registered in a datapack registry (`resourcestrees:resources_type`). You can add new types, override existing ones, or remove built-in types entirely through datapacks.

## File Location

```
data/<namespace>/resourcestrees/resources_type/<name>.json
```

## JSON Format

```json
{
  "material": "<item_id>",
  "color": <ARGB integer>,
  "weight": <int>,
  "saplingDropChance": <float>,
  "leafDropChance": <float>,
  "treeSimulatorTicks": <int>
}
```

## Fields

| Field | Type | Description |
| --- | --- | --- |
| `material` | String | Item ID or item tag (prefix with `#`). Used as the crafting ingredient for saplings. |
| `color` | Integer | ARGB color applied to leaves, saplings, and fragments. |
| `weight` | Integer | Relative weight (higher = more common in future worldgen contexts). |
| `saplingDropChance` | Float (0.0–1.0) | Probability a sapling drops when leaves decay. |
| `leafDropChance` | Float (0.0–1.0) | Probability a Leaf Fragment drops when leaves decay. |
| `treeSimulatorTicks` | Integer | Ticks per harvest cycle in the Tree Simulator (20 ticks = 1 second). |

### Material Field

**Single item:**

```json
"material": "minecraft:diamond"
```

**Item tag:**

```json
"material": "#c:ores/diamond"
```

### Color Field

The `color` field is a **signed ARGB integer**. To convert a hex color:

```
0xFF<RR><GG><BB>
```

For example, `#E60050` (ruby red) = `0xFFE60050` = `-1678288` as a signed integer.

You can also use online ARGB converters or the formula: `-(0x01000000 - 0x00RRGGBB)` for fully opaque colors.

## Example: Adding a Ruby Type

`data/mymod/resourcestrees/resources_type/ruby.json`

```json
{
  "material": "mymod:ruby_shard",
  "color": -1678288,
  "weight": 4,
  "saplingDropChance": 0.10,
  "leafDropChance": 0.20,
  "treeSimulatorTicks": 1500
}
```

## Example: Using a Tag as Material

`data/mypack/resourcestrees/resources_type/raw_iron.json`

```json
{
  "material": "#c:raw_materials/iron",
  "color": -5260105,
  "weight": 5,
  "saplingDropChance": 0.15,
  "leafDropChance": 0.30,
  "treeSimulatorTicks": 1100
}
```

## Example: Overriding Diamond

To make Diamond rarer, override the built-in type with the same path:

`data/mypack/resourcestrees/resources_type/diamond.json`

```json
{
  "material": "minecraft:diamond_block",
  "color": 4245717247,
  "weight": 1,
  "saplingDropChance": 0.04,
  "leafDropChance": 0.08,
  "treeSimulatorTicks": 2400
}
```

::: info Namespace Note
To override a built-in type, the file path must match exactly. The built-in types use the `resourcestrees` namespace, so your file must be at `data/resourcestrees/resourcestrees/resources_type/<name>.json` in your datapack — or simply match the same registry path.
:::

## What Gets Automatically Wired Up

Once a new type is registered:

| Feature | Status |
| --- | --- |
| Sapling crafting recipe | ✅ Auto-detected by `ResourcesSaplingRecipe` |
| Creative tab entries | ✅ All 8 sapling variants + leaves + fragments |
| Leaf Fragment drops | ✅ Automatically drops from leaves |
| Tree Simulator (default recipe) | ✅ Uses built-in fallback formula |
| JEI recipe display | ✅ Shown automatically |
| Item and block tinting | ✅ Uses the `color` field |

You do **not** need to add custom crafting recipes for fragment→resource production unless you want a non-default pattern. The sapling crafting recipe works for all types without modification.
