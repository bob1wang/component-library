# 微径组件库(Vue3)

### 组件使用说明：

1、前置条件：

- 1、将style文件夹复制到项目中
- 2、在main.ts/main.js中引用

```ts
import './styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

```

2、组件使用：

- 直接将需要使用的组件复制到项目中（components文件夹中）
- 在页面中引用并使用

```vue
<script setup lang="ts">
import Button from '../basic/Button.vue'

const props = defineProps<{
  activeTab: 'button' | 'input' | 'select'
}>()

interface ButtonStyle {
  type: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  name: string
}

const buttonStyles: ButtonStyle[] = [
  { type: 'primary', name: '主要按钮' },
  { type: 'dashed', name: '虚线按钮' },
  { type: 'text', name: '文字按钮' },
  { type: 'link', name: '链接按钮' },

]
</script>

<template>
  <div class="style-summary" v-if="activeTab === 'button'">
    <h1>按钮样式</h1>
    <div class="button-grid">
      <div class="button-item" v-for="style in buttonStyles" :key="style.type">
        <Button :type="style.type" size="middle">
          {{ style.name }}
        </Button>
        <span class="style-name">{{ style.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
lor: var(--text-color-secondary);
}
</style>

```

