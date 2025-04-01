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
  type: 'btn01-primary' | 'btn02-default' | 'btn03-dashed' | 'btn04-text' | 'btn05-link' | 'btn06-round' | 'btn07-success' | 'btn08-warning' | 'btn09-danger'
  name: string
}

interface InputStyle {
  type: 'default' | 'large' | 'small' | 'disabled' | 'error'
  styleType: 'blue' | 'default' | 'round'
  name: string
}

const buttonStyles: ButtonStyle[] = [
  { type: 'btn01-primary', name: 'btn01-primary' },
  { type: 'btn03-dashed', name: 'btn03-dashed' },
  { type: 'btn04-text', name: 'btn04-text' },
  { type: 'btn05-link', name: 'btn05-link' },
  { type: 'btn06-round', name: 'btn06-round' },
  { type: 'btn07-success', name: 'btn07-success' },
  { type: 'btn08-warning', name: 'btn08-warning' },
  { type: 'btn09-danger', name: 'btn09-danger' }
]

const inputValue = ref('')
const inputStyles: InputStyle[] = [
  { type: 'default', styleType: 'default', name: 'default' },
  { type: 'default', styleType: 'blue', name: 'blue' },
  { type: 'default', styleType: 'round', name: 'round' },
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
  margin-bottom: 0;
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
