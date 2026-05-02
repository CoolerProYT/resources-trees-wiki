<template>
  <div class="rt-info-box" :class="`rt-info-box--${type}`">
    <div class="rt-info-box__icon">{{ icons[type] }}</div>
    <div class="rt-info-box__content">
      <strong v-if="title" class="rt-info-box__title">{{ title }}</strong>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'info' }, // info | tip | warning | danger | neoforge | fabric
  title: String,
})
const icons = {
  info: 'ℹ️',
  tip: '💡',
  warning: '⚠️',
  danger: '🚫',
  neoforge: '🔥',
  fabric: '🧵',
  kubejs: '📜',
  datapack: '📦',
}
</script>

<style scoped>
.rt-info-box {
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  border-left: 4px solid;
  margin: 1.2em 0;
  font-family: 'Crimson Pro', serif;
  font-size: 1rem;
  line-height: 1.65;
}
.rt-info-box__icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
.rt-info-box__title { display: block; font-family: 'Cinzel', serif; font-size: 0.82rem; letter-spacing: 0.04em; margin-bottom: 4px; }

.rt-info-box--info    { background: rgba(74,127,168,0.1); border-color: #4a7fa8; }
.rt-info-box--tip     { background: rgba(74,103,65,0.12); border-color: #6b9b5e; }
.rt-info-box--warning { background: rgba(201,168,76,0.08); border-color: #c9a84c; }
.rt-info-box--danger  { background: rgba(168,74,74,0.1); border-color: #a84a4a; }
.rt-info-box--neoforge { background: rgba(224,119,60,0.1); border-color: #e0773c; }
.rt-info-box--fabric  { background: rgba(176,200,232,0.1); border-color: #b0c8e8; }
.rt-info-box--kubejs  { background: rgba(232,192,106,0.08); border-color: #e8c06a; }
.rt-info-box--datapack { background: rgba(143,196,126,0.08); border-color: #8fc47e; }
</style>
