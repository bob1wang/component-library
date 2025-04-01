<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import Button from '../components/basic/Button.vue'
import StyleSummary from '../components/demo/StyleSummary.vue'
import ComponentDemo from '../components/demo/ComponentDemo.vue'
import ComponentApi from '../components/demo/ComponentApi.vue'

type TabType = 'button' | 'input' | 'select'
const activeTab: Ref<TabType> = ref('button')
const tabs = ['button', 'input', 'select'] as const

const getButtonType = (tab: TabType) => computed(() => 
  activeTab.value === tab ? 'btn01-primary' : 'btn02-default'
)
</script>

<template>
  <div class="component-library">
    <h1>微径组件库</h1>

    <div class="component-nav">
      <Button 
        v-for="tab in tabs" 
        :key="tab"
        :type="getButtonType(tab).value"
        @click="activeTab = tab"
      >
        {{ tab}}
      </Button>
    </div>

    <!-- 常用组件样式展示区域 -->
    <StyleSummary :activeTab="activeTab" />

    <!-- 组件演示区域 -->
    <div class="demo-section">
      <ComponentDemo :activeTab="activeTab" />
    </div>

    <!-- API文档区域 -->
    <div class="api-section">
      <ComponentApi :activeTab="activeTab" />
    </div>
  </div>
</template>

<style scoped>
.component-library {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: var(--theme-color);
  margin-bottom: 2rem;
  text-align: center;
}

.component-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.api-section,
.demo-section {
  padding: 1.5rem;
}
</style>
