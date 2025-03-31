<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import Button from '../components/basic/Button.vue'
import Input from '../components/basic/Input.vue'
import Select from '../components/basic/Select.vue'
import { buttonApi, inputApi, selectApi } from '../data/componentApi'
import ComponentDemo from '../components/demo/ComponentDemo.vue'
import ComponentApi from '../components/demo/ComponentApi.vue'
import StyleSummary from '../components/demo/StyleSummary.vue'

// 组件状态
const buttonType: Ref<'primary' | 'default' | 'dashed' | 'text' | 'link'> = ref('primary')
const buttonSize: Ref<'large' | 'middle' | 'small'> = ref('middle')
const buttonLoading: Ref<boolean> = ref(false)
const buttonDisabled: Ref<boolean> = ref(false)

const inputValue: Ref<string> = ref('')
const inputSize: Ref<'large' | 'middle' | 'small'> = ref('middle')
const inputType: Ref<'text' | 'password' | 'number' | 'email' | 'search'> = ref('text')
const inputDisabled: Ref<boolean> = ref(false)
const inputClearable: Ref<boolean> = ref(true)

const selectValue: Ref<string> = ref('')
const selectSize: Ref<'large' | 'middle' | 'small'> = ref('middle')
const selectDisabled: Ref<boolean> = ref(false)
const selectOptions = ref([
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3', disabled: true }
])

const activeTab: Ref<'button' | 'input' | 'select'> = ref('button')
</script>

<template>
  <div class="component-library">
    <h1>微径组件库</h1>

    <div class="component-nav">
      <Button :type="activeTab === 'button' ? 'primary' : 'default'" 
      @click="activeTab = 'button'">
        Button
      </Button>
      <Button :type="activeTab === 'input' ? 'primary' : 'default'" 
      @click="activeTab = 'input'">
        Input
      </Button>
      <!-- <Button :type="activeTab === 'select' ? 'primary' : 'default'"
        @click="activeTab = 'select'">
        Select
      </Button> -->
    </div>

    <!-- 组件样式展示区域 -->
    <StyleSummary :activeTab="activeTab" />

    <!-- 组件演示区域 -->
    <div class="demo-section">
      <!-- <h2>组件演示</h2> -->
      <ComponentDemo
        :activeTab="activeTab"
        :buttonType="buttonType"
        :buttonSize="buttonSize"
        :buttonLoading="buttonLoading"
        :buttonDisabled="buttonDisabled"
        :inputValue="inputValue"
        :inputSize="inputSize"
        :inputType="inputType"
        :inputDisabled="inputDisabled"
        :inputClearable="inputClearable"
        :selectValue="selectValue"
        :selectSize="selectSize"
        :selectDisabled="selectDisabled"
        :selectOptions="selectOptions"
        @update:buttonType="buttonType = $event"
        @update:buttonSize="buttonSize = $event"
        @update:buttonLoading="buttonLoading = $event"
        @update:buttonDisabled="buttonDisabled = $event"
        @update:inputValue="inputValue = $event"
        @update:inputSize="inputSize = $event"
        @update:inputType="inputType = $event"
        @update:inputDisabled="inputDisabled = $event"
        @update:inputClearable="inputClearable = $event"
        @update:selectValue="selectValue = $event"
        @update:selectSize="selectSize = $event"
        @update:selectDisabled="selectDisabled = $event"
      />
    </div>

    <!-- API文档区域 -->
    <div class="api-section">
      <!-- <h2>API文档</h2> -->
      <ComponentApi
        :activeTab="activeTab"
        :buttonApi="buttonApi"
        :inputApi="inputApi"
        :selectApi="selectApi"
      />
    </div>
  </div>
</template>

<style scoped>
.demo-section {
  border: 1px solid var(--border-color-base);
  border-radius: var(--border-radius-base);
  padding: 1.5rem;
}

.api-section {
  border: 1px solid var(--border-color-light);
  border-radius: var(--border-radius-base);
  padding: 1.5rem;
  background-color: var(--background-color-light);
}

h2 {
  color: var(--theme-color);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color-base);
}

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

.control-group {
  margin-bottom: 1rem;
}

.control-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

select {
  padding: 0.5rem;
  border-radius: var(--border-radius-base);
  border: 1px solid var(--border-color-base);
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
}

.api-table th,
.api-table td {
  border: 1px solid var(--border-color-base);
  padding: 0.75rem;
  text-align: left;
}

.api-table th {
  background-color: var(--background-color-light);
}

.code-block {
  background-color: var(--background-color-light);
  padding: 1rem;
  border-radius: var(--border-radius-base);
  overflow-x: auto;
}

.demo-value {
  margin-top: 1rem;
  color: var(--text-color-secondary);
}
</style>
