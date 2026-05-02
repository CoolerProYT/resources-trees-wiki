<template>
  <div class="rt-recipe">
    <div class="rt-recipe__title" v-if="title">{{ title }}</div>
    <div class="rt-recipe__body">
      <div class="rt-recipe__grid" v-if="type === 'crafting'">
        <div
          v-for="(slot, i) in paddedSlots"
          :key="i"
          class="rt-recipe__slot"
          :class="{ 'rt-recipe__slot--filled': slot }"
          :title="slot || ''"
        >
          <span v-if="slot" class="rt-recipe__slot-label">{{ slot }}</span>
        </div>
      </div>
      <div class="rt-recipe__arrow">➜</div>
      <div class="rt-recipe__result">
        <div class="rt-recipe__slot rt-recipe__slot--result">
          <span class="rt-recipe__slot-label">{{ result }}</span>
        </div>
        <div class="rt-recipe__count" v-if="count > 1">× {{ count }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  slots: { type: Array, default: () => [] }, // 9-element array, '' for empty
  result: String,
  count: { type: Number, default: 1 },
  type: { type: String, default: 'crafting' },
})

const paddedSlots = computed(() => {
  const arr = [...props.slots]
  while (arr.length < 9) arr.push('')
  return arr.slice(0, 9)
})
</script>

<style scoped>
.rt-recipe {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  margin: 1em 0;
}
.rt-recipe__title {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--rt-gold, #c9a84c);
  text-transform: uppercase;
  margin-bottom: 4px;
}
.rt-recipe__body {
  display: flex;
  align-items: center;
  gap: 14px;
}
.rt-recipe__grid {
  display: grid;
  grid-template-columns: repeat(3, 40px);
  grid-template-rows: repeat(3, 40px);
  gap: 3px;
}
.rt-recipe__slot {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  color: var(--vp-c-text-2);
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
  padding: 2px;
  line-height: 1.2;
}
.rt-recipe__slot--filled {
  background: rgba(107,155,94,0.1);
  border-color: rgba(107,155,94,0.3);
  color: var(--vp-c-text-1);
}
.rt-recipe__slot--result {
  width: 48px;
  height: 48px;
  background: rgba(201,168,76,0.1);
  border-color: rgba(201,168,76,0.3);
  font-size: 0.7rem;
}
.rt-recipe__arrow {
  font-size: 1.2rem;
  color: var(--vp-c-text-3);
}
.rt-recipe__result {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.rt-recipe__count {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  color: var(--rt-gold, #c9a84c);
}
.rt-recipe__slot-label {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 36px;
  text-align: center;
}
</style>
