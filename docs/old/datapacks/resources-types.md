# Custom Resource Types

You can add your own resource types by creating a datapack.

## File Location

```
{datapack_root}/<namespace>/resourcestrees/resources_type/{resource_name}.json
```

The **filename** (without `.json`) is used as the type's unique identifier.

## JSON Format

::: code-group
```json [ruby.json]
{
  "material": "minecraft:redstone",
  "color": -3342336,
  "weight": 4,
  "saplingDropChance": 0.1,
  "leafDropChance": 0.2,
  "treeSimulatorTicks": 1400
}
```
:::

### Fields

| Field | Description                                                                                                                                        |
|---|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `material` | Item registry name used to craft the sapling. Prefix with `#` for an item tag. (This field does not have any actual usage in version below 26.1.2) |
| `color` | ARGB integer tint color applied to leaves, sapling, and leaf fragment.                                                                             |
| `weight` | No longer used (deprecated).                                                                                                                       |
| `saplingDropChance` | Chance (0.0–1.0) a sapling drops when leaves decay or are broken.                                                                                  |
| `leafDropChance` | Chance (0.0–1.0) a leaf fragment drops from a leaves block.                                                                                        |
| `treeSimulatorTicks` | Ticks per growth cycle in the Tree Simulator. Lower = faster.                                                                                      |

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

`{datapack_root}/<namespace>/resourcestrees/resources_type/ruby.json`

```json
{
  "material": "minecraft:redstone",
  "color": -3342336,
  "saplingDropChance": 0.1,
  "leafDropChance": 0.2,
  "treeSimulatorTicks": 1400
}
```

## Id/Key of Resources Type

To use resources type nbt/components in ItemStack (recipes), you need to know the key of it.

::: code-group
``` [1.20.1 (NBT)]
type
```

``` [1.21.1+ (Component)]
resourcestrees:resources_type
```
:::

## Value of Resources Type

The value of resources type is used to define which type to use for a recipe input/output.

Here are all the default resources type:

| Resource Type ID             |
| ---------------------------- |
| `resourcestrees:stone`       |
| `resourcestrees:coal`        |
| `resourcestrees:iron`        |
| `resourcestrees:copper`      |
| `resourcestrees:gold`        |
| `resourcestrees:lapis`       |
| `resourcestrees:emerald`     |
| `resourcestrees:diamond`     |
| `resourcestrees:obsidian`    |
| `resourcestrees:amethyst`    |
| `resourcestrees:netherite`   |
| `resourcestrees:wood`        |
| `resourcestrees:quartz`      |
| `resourcestrees:prismarine`  |
| `resourcestrees:glowstone`   |
| `resourcestrees:redstone`    |
| `resourcestrees:deepslate`   |
| `resourcestrees:dirt`        |
| `resourcestrees:fire`        |
| `resourcestrees:nether`      |
| `resourcestrees:end`         |
| `resourcestrees:nature`      |
| `resourcestrees:water`       |
| `resourcestrees:ice`         |
| `resourcestrees:bee`         |
| `resourcestrees:slime`       |
| `resourcestrees:sculk`       |
| `resourcestrees:skeleton`    |
| `resourcestrees:spider`      |
| `resourcestrees:chicken`     |
| `resourcestrees:cow`         |
| `resourcestrees:rabbit`      |
| `resourcestrees:squid`       |
| `resourcestrees:turtle`      |
| `resourcestrees:blaze`       |
| `resourcestrees:breeze`      |
| `resourcestrees:nether_star` |
| `resourcestrees:ender_pearl` |
| `resourcestrees:shulker`     |
| `resourcestrees:dye`         |
| `resourcestrees:gunpowder`   |
| `resourcestrees:ghast`       |
| `resourcestrees:pig`         |
| `resourcestrees:sheep`       |
| `resourcestrees:fish`        |
| `resourcestrees:zombie`      |
