# Axe Speed Config

The Tree Simulator's growth speed scales with the type of axe placed in the axe slot. You can customize these multipliers in the config file.

## File Location

```
config/resourcestrees/axe.json
```

This file is created automatically on first launch with default values.

## Format

```json
{
  "values": {
    "minecraft:wooden_axe": 1.0,
    "minecraft:stone_axe": 2.0,
    "minecraft:iron_axe": 3.0,
    "minecraft:golden_axe": 6.0,
    "minecraft:diamond_axe": 4.0,
    "minecraft:netherite_axe": 5.0
  }
}
```

## Default Values

| Axe | Multiplier | Effect on Growth Time |
|---|---|---|
| Wooden Axe | 1.0× | Base speed (e.g. 1200 ticks) |
| Stone Axe | 2.0× | Half the time (e.g. 600 ticks) |
| Iron Axe | 3.0× | One-third the time (e.g. 400 ticks) |
| Golden Axe | 6.0× | One-sixth the time (e.g. 200 ticks) |
| Diamond Axe | 4.0× | One-quarter the time (e.g. 300 ticks) |
| Netherite Axe | 5.0× | One-fifth the time (e.g. 240 ticks) |

## How Multipliers Work

The Tree Simulator calculates `maxGrowTicks` as:

```
maxGrowTicks = ticksToGrow / axeMultiplier
```

A multiplier of `0.0` (or omitting the entry) means that axe type provides **no speed bonus** — the Tree Simulator won't work without a valid axe that has a non-zero multiplier.

## Adding Modded Axes

You can add any axe item from other mods by using its registry name:

```json
{
  "values": {
    "minecraft:iron_axe": 3.0,
    "minecraft:netherite_axe": 5.0,
    "mymod:titanium_axe": 8.0
  }
}
```

::: warning
Only items that are an instance of `AxeItem` will be accepted. Entries with invalid registry names or non-axe items are silently skipped.
:::
