<script setup lang="ts">
import Button from '../basic/Button.vue'
import Input from '../basic/Input.vue'
import { ref } from 'vue'

const props = defineProps<{
  activeTab: 'button' | 'input' | 'select'
}>()

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    alert('已复制到剪贴板')
  } catch (err) {
    console.error('复制失败:', err)
  }
}

interface ButtonStyle {
  type: 'primary' | 'default' | 'dashed' | 'text' | 'link' | 'round' | 'success' | 'warning' | 'danger'
  name: string
}

// interface InputStyle {
//   type: 'default' | 'large' | 'small' | 'disabled' | 'error'
//   styleType:'blue' | 'default' | 'round'
//   name: string
// }

const buttonStyles: ButtonStyle[] = [
  { type: 'primary', name: 'primary' },
  { type: 'dashed', name: 'dashed' },
  { type: 'text', name: 'text' },
  { type: 'link', name: 'link' },
  { type: 'round', name: 'round' },
  { type: 'success', name: 'success' },
  { type: 'warning', name: 'warning' },
  { type: 'danger', name: 'danger' }
]

const inputValue = ref('')
const inputStyles= [
  { type: 'default',styleType:'default', name: 'default' },
  { type: 'default',styleType:'blue', name: 'blue' },
  { type: 'default',styleType:'round', name: 'round' },
]

const testinput = (e:any)=>{
  console.log('输入的值：',e);
}

const testBlur = ()=>{
  console.log('testBlur');
  
}
</script>

<template>
  <div class="style-summary" v-if="activeTab === 'button'">
    <h1>常用样式</h1>
    <div class="button-grid">
      <div class="button-item" v-for="style in buttonStyles" :key="style.type">
        <Button :type="style.type" size="middle">
          {{ style.name }}
        </Button>
        <span class="style-name" @click="copyToClipboard(style.name)">{{ style.name }}</span>
      </div>
    </div>
  </div>

  <div class="style-summary" v-if="activeTab === 'input'">
    <h1>常用样式</h1>
    <div class="button-grid">
      <div class="button-item" v-for="style in inputStyles" :key="style.type">
        <Input 
          v-model="inputValue"
          :size="style.type === 'large' ? 'large' : style.type === 'small' ? 'small' : 'middle'"
          :styleType="style.styleType"
          :disabled="style.type === 'disabled'"
          placeholder="请输入内容"
          @input="testinput"
        />
        <span class="style-name" @click="copyToClipboard(style.name)">{{ style.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.style-summary {
  margin: 3rem auto;
  max-width: 800px;
  text-align: center;
}

h1 {
  color: var(--theme-color);
  margin-bottom: 1.5rem;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.button-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

input {
  padding: 8px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}

input.large {
  padding: 12px 16px;
  font-size: 16px;
}

input.small {
  padding: 4px 8px;
  font-size: 12px;
}

input.disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

input.error {
  border-color: #ff4d4f;
}

.style-name {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}
</style>
