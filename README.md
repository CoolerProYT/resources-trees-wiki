# ResourcesTrees Wiki

Official documentation for the ResourcesTrees Minecraft mod.

Built with [VitePress](https://vitepress.dev/).

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
```

## Structure

```
docs/
├── .vitepress/
│   └── config.mts
├── public/
│   └── logo.png          ← add your mod logo here
├── index.md
├── changelog.md
├── gameplay/
│   ├── getting-started.md
│   ├── resources-types-list.md
│   ├── resources-saplings.md
│   ├── resources-leaves.md
│   ├── leaf-fragments.md
│   ├── tree-simulator.md
│   └── essence-items.md
├── config/
│   └── axe-config.md
├── datapacks/
│   ├── resources-types.md
│   ├── tree-simulator-recipes.md
│   └── sapling-recipes.md
└── kubejs/
    ├── overview.md
    ├── custom-saplings.md
    ├── custom-leaves.md
    └── limitations.md
```

## Logo

Add your mod logo as `docs/public/logo.png`. The home page hero and navbar both reference this file.
