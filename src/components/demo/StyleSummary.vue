<script setup lang="ts">
import Button from '../basic/Button.vue'

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

// interface ButtonStyle {
//   type: 'primary' | 'default' | 'dashed' | 'text' | 'link'| 'btn01' |
//   name: string
// }

const buttonStyles = [
  { type: 'primary', name: '主要按钮' },
  { type: 'dashed', name: '虚线按钮' },
  { type: 'text', name: '文字按钮' },
  { type: 'link', name: '链接按钮' },
  { type: 'btn01', name: '按钮 01' },
  { type: 'btn02', name: '按钮 02' },


]
</script>

<template>
  <div class="style-summary" v-if="activeTab === 'button'">
    <h1>常用样式</h1>
    <div class="button-grid">
      <div class="button-item" v-for="style in buttonStyles" :key="style.type">
        <Button :type="style.type" size="middle">
          
          {{ style.name }}
        </Button>
        <span class="style-name"  @click="copyToClipboard(style.name)">{{ style.name }}</span>
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

.style-name {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}
</style>
