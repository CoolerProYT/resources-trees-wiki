# Tree Simulator

The Tree Simulator is a block that automates resource production. Instead of planting trees in the world, you insert a resource sapling and it simulates the tree growing and being harvested on a timer.

## Crafting

```
   
ABA
AAA
```

- `A` = Cyan Terracotta
- `B` = Dirt

## Interface

Open the Tree Simulator by right-clicking it. The GUI has:

| Slot | Purpose |
|---|---|
| **Input** (left) | Place a Resource Sapling here |
| **Axe** (middle-bottom) | Place an axe to enable and speed up production |
| **Output** (right, 9 slots) | Harvested resources appear here |

A progress arrow shows how far along the current growth cycle is.

## How Production Works

1. Insert a resource sapling into the input slot.
2. Insert an axe into the axe slot.
3. The simulator ticks. When `growTicks` reaches `maxGrowTicks`, a harvest occurs.
4. Harvest outputs are placed into the output slots.
5. The cycle resets and repeats.

If the output slots are full, production pauses until space is available.

## Default Outputs per Harvest

You can override this with a custom recipe — see [Tree Simulator Recipes](/datapacks/tree-simulator-recipes).

## Axe Speed

The axe placed in the axe slot acts as a multiplier on the growth speed. A higher multiplier means `maxGrowTicks` is divided by a larger number, so cycles complete faster.

| Axe | Default Multiplier |
|---|---|
| Wooden Axe | 1.0× |
| Stone Axe | 2.0× |
| Iron Axe | 3.0× |
| Golden Axe | 6.0× |
| Diamond Axe | 4.0× |
| Netherite Axe | 5.0× |

Axes take 1 durability damage per harvest cycle. When an axe breaks it is automatically removed. Axes with the **Unbreakable** component will never break.

::: tip Configuring Axe Speeds
You can change these multipliers in the [Axe Speed Config](/config/axe-config).
:::

## Automation

The Tree Simulator supports hopper automation:
- **Top/sides** → items enter the **input slot**
- **Bottom** → items exit the **output slots**

The axe slot cannot be automated (hopper access is restricted).
