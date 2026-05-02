<template>
  <div class="rt-type-card" :style="{ '--accent': color }">
    <div class="rt-type-card__color-bar" />
    <div class="rt-type-card__body">
      <div class="rt-type-card__header">
        <span class="rt-type-card__name">{{ name }}</span>
        <span class="rt-type-card__material">{{ material }}</span>
      </div>
      <div class="rt-type-card__stats">
        <span class="rt-stat" title="Sapling Drop Chance">🌱 {{ saplingChance }}</span>
        <span class="rt-stat" title="Leaf Drop Chance">🍃 {{ leafChance }}</span>
        <span class="rt-stat" title="Tree Simulator Ticks">⏱ {{ ticks }}t</span>
        <span class="rt-stat" title="Weight">⚖ {{ weight }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  material: String,
  color: { type: String, default: '#6b9b5e' },
  saplingChance: { type: String, default: '12.5%' },
  leafChance: { type: String, default: '25%' },
  ticks: { type: [String, Number], default: 1200 },
  weight: { type: [String, Number], default: 5 },
})
</script>

<style scoped>
.rt-type-card {
  --accent: #6b9b5e;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s, box-shadow 0.2s;
}
.rt-type-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
}
.rt-type-card__color-bar {
  width: 5px;
  min-height: 60px;
  background: var(--accent);
  flex-shrink: 0;
}
.rt-type-card__body {
  padding: 10px 14px;
  flex: 1;
}
.rt-type-card__header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 6px;
}
.rt-type-card__name {
  font-family: 'Cinzel', serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
  text-transform: capitalize;
}
.rt-type-card__material {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-family: 'JetBrains Mono', monospace;
}
.rt-type-card__stats {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.rt-stat {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  background: rgba(255,255,255,0.04);
  padding: 1px 7px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.06);
  font-family: 'JetBrains Mono', monospace;
}
</style>
