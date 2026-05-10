# Resource Types

Every resource type defines what material a tree produces, its leaf/sapling drop chances, and how fast it grows in the Tree Simulator.

## Built-in Resource Types

| Name | Material | Tree Simulator Ticks | Sapling Drop Chance | Leaf Fragment Drop Chance |
|---|---|---|---|---|
| `stone` | Cobblestone | 800 | 12.5% | 25% |
| `coal` | Coal Block | 1000 | 12.5% | 25% |
| `iron` | Iron Block | 1200 | 12.5% | 25% |
| `copper` | Copper Block | 1200 | 12.5% | 25% |
| `gold` | Gold Block | 1200 | 12.5% | 25% |
| `lapis` | Lapis Block | 1200 | 12.5% | 25% |
| `emerald` | Emerald Block | 1400 | 12.5% | 25% |
| `diamond` | Diamond Block | 1600 | 10% | 20% |
| `obsidian` | Obsidian | 1200 | 12.5% | 25% |
| `amethyst` | Amethyst Block | 800 | 12.5% | 25% |
| `netherite` | Netherite Block | 1800 | 7.5% | 15% |
| `wood` | Any Log (tag) | 800 | 12.5% | 25% |
| `quartz` | Quartz Block | 800 | 12.5% | 25% |
| `prismarine` | Prismarine | 800 | 12.5% | 25% |
| `glowstone` | Glowstone | 800 | 12.5% | 25% |
| `redstone` | Redstone Block | 1000 | 12.5% | 25% |
| `deepslate` | Deepslate | 800 | 12.5% | 25% |
| `dirt` | Dirt | 800 | 12.5% | 25% |
| `fire` | Fire Essence | 800 | 12.5% | 25% |
| `nether` | Netherrack | 800 | 12.5% | 25% |
| `end` | End Essence | 800 | 12.5% | 25% |
| `nature` | Nature Essence | 800 | 12.5% | 25% |
| `water` | Water Essence | 800 | 12.5% | 25% |
| `ice` | Ice | 800 | 12.5% | 25% |
| `bee` | Bee Essence | 1200 | 12.5% | 25% |
| `slime` | Slime Block | 1200 | 12.5% | 25% |
| `sculk` | Sculk Essence | 1400 | 12.5% | 25% |
| `skeleton` | Skeleton Essence | 1200 | 12.5% | 25% |
| `spider` | Spider Essence | 1200 | 12.5% | 25% |
| `chicken` | Chicken Essence | 1200 | 12.5% | 25% |
| `cow` | Cow Essence | 1200 | 12.5% | 25% |
| `rabbit` | Rabbit Essence | 1200 | 12.5% | 25% |
| `squid` | Squid Essence | 1200 | 12.5% | 25% |
| `turtle` | Turtle Essence | 1200 | 12.5% | 25% |
| `blaze` | Blaze Essence | 1200 | 12.5% | 25% |
| `breeze` | Breeze Essence | 1200 | 12.5% | 25% |
| `nether_star` | Nether Star | 2000 | 12.5% | 25% |
| `ender_pearl` | Ender Pearl | 1400 | 12.5% | 25% |
| `shulker` | Shulker Shell | 1400 | 12.5% | 25% |
| `dye` | Dye Essence | 800 | 12.5% | 25% |
| `gunpowder` | Gunpowder | 1200 | 12.5% | 25% |
| `ghast` | Ghast Essence | 1200 | 12.5% | 25% |
| `pig` | Pig Essence | 1200 | 12.5% | 25% |
| `sheep` | Sheep Essence | 1200 | 12.5% | 25% |
| `fish` | Fish Essence | 1200 | 12.5% | 25% |
| `zombie` | Zombie Essence | 1200 | 12.5% | 25% |

## Built-in Tree Types

Each resource type above combines with all 8 tree shapes:

| Tree Type | Grower | Log Used |
|---|---|---|
| `oak` | Oak | Oak Log |
| `spruce` | Spruce | Spruce Log |
| `birch` | Birch | Birch Log |
| `jungle` | Jungle | Jungle Log |
| `acacia` | Acacia | Acacia Log |
| `dark_oak` | Dark Oak | Dark Oak Log |
| `cherry` | Cherry | Cherry Log |
| `pale_oak` | Pale Oak | Pale Oak Log |

This results in **47 × 8 = 376** unique saplings and leaves by default.

## Adding Custom Resource Types

See [Custom Resources Types](/datapacks/resources-types) for how to add your own via datapacks.
