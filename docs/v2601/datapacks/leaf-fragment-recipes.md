# Leaf Fragment Recipes

Leaf Fragment to Resources recipe can be added with any recipe type. But the default one for all built-in recipe is using `strict_shaped` recipe, it use the exact same format as ShapedRecipe but with stricter checking.

## Basic Example

Everything is same with vanilla ShapedRecipe except the type is replaced with `resourcestrees:strict_shaped`.

```json5
{
  "type": "resourcestrees:strict_shaped",
  "category": "misc",
  "key": {
    "A": "resourcestrees:bee_leaf_fragment"
  },
  "pattern": [
    "AAA",
    "A A",
    "AAA"
  ],
  "result": {
    "count": 8,
    "id": "minecraft:honey_block"
  }
}
```