# Tree Simulator

The Tree Simulator is a block that automates tree growing and harvesting. It periodically simulates a full harvest cycle and deposits the output items directly into its output slots.

## Crafting

```
[ ][ ][ ]
[C][D][C]
[C][C][C]
```

`C` = Cyan Terracotta, `D` = Dirt

**Ingredients:** 5× Cyan Terracotta + 1× Dirt

## Interface

Open the Tree Simulator by right-clicking it.

| Slot | Description |
| --- | --- |
| Input slot (1) | Place a Resources Sapling here. Stack size is limited to 1. |
| Output slots (9) | Harvested items are deposited here automatically. |
| Axe slot (1) | Requires an axe to operate. The axe loses 1 durability per harvest cycle. |
| Progress bar | Shows growth progress toward the next harvest. |

## Operation

Each server tick the simulator checks:

1. Is there a valid Resources Sapling in the input with available output space?
2. Is the axe still intact (durability not maxed, or has `Unbreakable` component)?

If both conditions pass, the `growTicks` counter increments. When it reaches `maxGrowTicks`, a harvest fires.

### Harvest

On each harvest cycle:

- Each drop entry in the recipe is rolled independently.
- For each entry: rolls `minRolls` to `maxRolls` times, each roll has a `chance` probability of producing one item.
- Items are deposited into the first available output slot.
- The axe takes 1 durability damage.

### Default Drop Table

If no custom recipe exists for the current sapling and type, the simulator uses this default:

| Drop | Chance | Min Rolls | Max Rolls |
| --- | --- | --- | --- |
| Log (type-matched) | 50% | 1 | 4 |
| Leaf Fragment (guaranteed) | 100% | 1 | 1 |
| Leaf Fragment (bonus) | `leafDropChance` of type | 1 | 4 |
| Resources Sapling | `saplingDropChance` of type | 1 | 1 |
| Stick | 10% | 1 | 2 |
| Apple | 5% | 1 | 1 |

## Axe Speed Multiplier

The axe tier determines how fast the simulator counts ticks. The multiplier divides the base `treeSimulatorTicks`:

```
actualTicks = treeSimulatorTicks / axeMultiplier
```

Default multipliers (configurable via [Axe Speed Config](/config/axe-config)):

| Axe | Multiplier | Iron Tree (1200t base) |
| --- | --- | --- |
| Wooden Axe | 1.0× | 1200 ticks (60s) |
| Stone Axe | 2.0× | 600 ticks (30s) |
| Iron Axe | 3.0× | 400 ticks (20s) |
| Diamond Axe | 4.0× | 300 ticks (15s) |
| Netherite Axe | 5.0× | 240 ticks (12s) |
| Golden Axe | 6.0× | 200 ticks (10s) |

::: tip Unbreakable Axe
An axe with the `Unbreakable` data component never takes durability damage in the simulator, enabling indefinite operation.
:::

::: warning Axe Breaks
When an axe reaches maximum damage, it is automatically removed from the axe slot. The simulator stops until a new axe is inserted.
:::

## Automation (Hopper/Pipe)

The Tree Simulator implements `WorldlyContainer`:

| Face | Behavior |
| --- | --- |
| Top / Sides | Hoppers can insert into the **input slot** |
| Bottom | Hoppers can extract from the **output slots** |

The axe slot is not accessible via hopper automation.

## Item Renderer

While a sapling is in the input slot, it is rendered floating above the simulator block. The sapling grows in scale proportionally to the current progress.

## Block Entity Data

```json
{
  "input": [...],
  "output": [...],
  "axe": [...],
  "growTicks": 240,
  "maxGrowTicks": 400
}
```

`growTicks` and `maxGrowTicks` are synced to the client for the progress bar display.
