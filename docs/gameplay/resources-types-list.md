# Resources Types

This page lists all built-in resource types in ResourcesTrees.

All types are registered in the `resourcestrees:resources_type` datapack registry and can be customized or extended via datapacks. See [Custom Resources Types](/datapacks/resources-types).

## Stats Reference

| Field | Description |
| --- | --- |
| `material` | Item or tag used to craft a Resources Sapling of this type |
| `color` | ARGB hex color applied to leaves, saplings, and fragments |
| `weight` | Relative rarity weight |
| `saplingDropChance` | Chance a sapling drops from decaying leaves |
| `leafDropChance` | Chance a Leaf Fragment drops from decaying leaves |
| `treeSimulatorTicks` | Ticks per harvest cycle in the Tree Simulator (20 ticks = 1 second) |

::: info Default Values
Unless overridden, all types default to: `saplingDropChance: 0.125` (12.5%), `leafDropChance: 0.25` (25%), `treeSimulatorTicks: 1200` (60s), `weight: 5`.
:::

## Vanilla Material Types

| Type | Material | Color | Sapling Drop | Leaf Drop | Sim Ticks |
| --- | --- | --- | --- | --- | --- |
| `stone` | `minecraft:cobblestone` | `#4D4B49` | 12.5% | 25% | 800 |
| `coal` | `minecraft:coal_block` | `#000000` | 12.5% | 25% | 1000 |
| `iron` | `minecraft:iron_block` | `#B0BEC5` | 12.5% | 25% | 1200 |
| `copper` | `minecraft:copper_block` | `#D46D44` | 12.5% | 25% | 1200 |
| `gold` | `minecraft:gold_block` | `#FFD600` | 12.5% | 25% | 1200 |
| `lapis` | `minecraft:lapis_block` | `#3F51B5` | 12.5% | 25% | 1200 |
| `emerald` | `minecraft:emerald_block` | `#00C853` | 12.5% | 25% | 1400 |
| `diamond` | `minecraft:diamond_block` | `#40C4FF` | **10%** | **20%** | **1600** |
| `obsidian` | `minecraft:obsidian` | `#2E1A47` | 12.5% | 25% | 1200 |
| `amethyst` | `minecraft:amethyst_block` | `#9C27B0` | 12.5% | 25% | 800 |
| `netherite` | `minecraft:netherite_block` | `#3E3E3E` | **7.5%** | **15%** | **1800** |
| `wood` | `#c:logs` (tag) | `#8D6E63` | 12.5% | 25% | 800 |
| `quartz` | `minecraft:quartz_block` | `#F5F5F5` | 12.5% | 25% | 800 |
| `prismarine` | `minecraft:prismarine` | `#5EC8C8` | 12.5% | 25% | 800 |
| `glowstone` | `minecraft:glowstone` | `#FFF176` | 12.5% | 25% | 800 |
| `redstone` | `minecraft:redstone_block` | `#FF1744` | 12.5% | 25% | 1000 |
| `deepslate` | `minecraft:deepslate` | `#2B2B24` | 12.5% | 25% | 800 |
| `dirt` | `minecraft:dirt` | `#9B7653` | 12.5% | 25% | 800 |
| `ice` | `minecraft:ice` | `#b9e8ea` | 12.5% | 25% | 800 |

## Essence Types

These types use craftable Essence items as their material. See [Essence Items](/gameplay/essence-items) for crafting recipes.

| Type | Material | Color | Sim Ticks |
| --- | --- | --- | --- |
| `fire` | Fire Essence | `#E45323` | 800 |
| `nether` | `minecraft:netherrack` | `#511515` | 800 |
| `end` | End Essence | `#C5BE8B` | 800 |
| `nature` | Nature Essence | `#1a6e08` | 800 |
| `water` | Water Essence | `#1787D4` | 800 |
| `dye` | Dye Essence | `#72d4b3` | 800 |

## Mob Drop Types

| Type | Material | Color | Sim Ticks |
| --- | --- | --- | --- |
| `bee` | Bee Essence | `#EDC343` | 1200 |
| `slime` | `minecraft:slime_block` | `#6aa84f` | 1200 |
| `sculk` | Sculk Essence | `#041820` | 1400 |
| `skeleton` | Skeleton Essence | `#eeeeee` | 1200 |
| `spider` | Spider Essence | `#1a0c20` | 1200 |
| `chicken` | Chicken Essence | `#A1A1A1` | 1200 |
| `cow` | Cow Essence | `#543936` | 1200 |
| `rabbit` | Rabbit Essence | `#8B5A2B` | 1200 |
| `squid` | Squid Essence | `#223B4D` | 1200 |
| `turtle` | Turtle Essence | `#315410` | 1200 |
| `blaze` | Blaze Essence | `#d4ae37` | 1200 |
| `breeze` | Breeze Essence | `#d5d6ff` | 1200 |
| `ghast` | Ghast Essence | `#F9F9F9` | 1200 |
| `pig` | Pig Essence | `#F9A195` | 1200 |
| `sheep` | Sheep Essence | `#FFFFFF` | 1200 |
| `fish` | Fish Essence | `#C1A76A` | 1200 |
| `zombie` | Zombie Essence | `#3e692d` | 1200 |
| `gunpowder` | `minecraft:gunpowder` | `#414257` | 1200 |

## Rare / Endgame Types

| Type | Material | Color | Sim Ticks |
| --- | --- | --- | --- |
| `nether_star` | `minecraft:nether_star` | `#D8E0D4` | **2000** |
| `ender_pearl` | `minecraft:ender_pearl` | `#032620` | 1400 |
| `shulker` | `minecraft:shulker_shell` | `#cfc2d6` | 1400 |
