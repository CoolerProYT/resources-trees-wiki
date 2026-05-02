# Axe Speed Config

The axe speed config controls how much each axe type speeds up the Tree Simulator harvest cycle.

## Config File

The config file is located at:

```
config/resourcestrees/axe.json
```

The file is created automatically on first launch with default values. If the file does not exist, all axe multipliers use their built-in defaults.

## Config Options

### Axe Multipliers

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `minecraft:wooden_axe` | Double | `1.0` | Speed multiplier for Wooden Axe |
| `minecraft:stone_axe` | Double | `2.0` | Speed multiplier for Stone Axe |
| `minecraft:iron_axe` | Double | `3.0` | Speed multiplier for Iron Axe |
| `minecraft:golden_axe` | Double | `6.0` | Speed multiplier for Golden Axe |
| `minecraft:diamond_axe` | Double | `4.0` | Speed multiplier for Diamond Axe |
| `minecraft:netherite_axe` | Double | `5.0` | Speed multiplier for Netherite Axe |

### Formula

```
actualTicks = treeSimulatorTicks / multiplier
```

A multiplier of `1.0` means no change. A multiplier of `4.0` means the simulator runs 4× faster with that axe.

## Config File

`axe.json`

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

## Adding Modded Axes

To add a multiplier for a modded axe, add its item ID as a new key:

```json
{
  "values": {
    "minecraft:wooden_axe": 1.0,
    "minecraft:stone_axe": 2.0,
    "minecraft:iron_axe": 3.0,
    "minecraft:golden_axe": 6.0,
    "minecraft:diamond_axe": 4.0,
    "minecraft:netherite_axe": 5.0,
    "somemod:titanium_axe": 8.0
  }
}
```

::: warning Validation
Only items that are instances of `AxeItem` are accepted. If an invalid item ID is added, it will be skipped with a console warning and stripped from the file on the next save:

```
Warning: 'somemod:not_an_axe' is not a valid AxeItem
```
:::

## Multiplier of 0.0

If an axe is assigned a multiplier of `0.0`, it is treated as invalid and the simulator will not operate with that axe in the slot.

This can be used to effectively **blacklist** certain axes from working in the simulator.

## Reloading

The config is loaded once at server/game startup. A **full restart** is required to apply any changes to the config file.
