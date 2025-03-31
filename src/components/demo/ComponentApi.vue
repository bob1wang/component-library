<script setup lang="ts">
import { buttonApi, inputApi, selectApi } from '@/data/componentApi'

const props = defineProps({
  activeTab: {
    type: String as () => 'button' | 'input' | 'select',
    required: true
  },
  buttonApi: {
    type: Object as () => typeof buttonApi,
    required: true
  },
  inputApi: {
    type: Object as () => typeof inputApi,
    required: true
  },
  selectApi: {
    type: Object as () => typeof selectApi,
    required: true
  }
})
</script>

<template>
  <div class="component-library">
    <h1>微径组件库 - API说明</h1>

    <!-- Button API 说明 -->
    <div v-if="activeTab === 'button'" class="component-demo">
      <h2>Button API</h2>

      <div class="docs-section">
        <h3>属性</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in buttonApi.props" :key="prop.prop">
              <td>{{ prop.prop }}</td>
              <td>{{ prop.description }}</td>
              <td>{{ prop.type }}</td>
              <td>{{ prop.defaultValue }}</td>
            </tr>
          </tbody>
        </table>

        <h3>事件</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in buttonApi.events" :key="event.name">
              <td>{{ event.name }}</td>
              <td>{{ event.description }}</td>
              <td>{{ event.parameters }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <div class="code-section">
        <h3>代码示例</h3>
        <pre class="code-block"><code><Button
  type="primary"
  size="middle"
  :loading="false"
  :disabled="false"
>
  点击按钮
</Button></code></pre>
      </div> -->
    </div>

    <!-- Input API 说明 -->
    <div v-if="activeTab === 'input'" class="component-demo">
      <h2>Input API</h2>

      <div class="docs-section">
        <h3>属性</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in inputApi.props" :key="prop.prop">
              <td>{{ prop.prop }}</td>
              <td>{{ prop.description }}</td>
              <td>{{ prop.type }}</td>
              <td>{{ prop.defaultValue }}</td>
            </tr>
          </tbody>
        </table>

        <h3>事件</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in inputApi.events" :key="event.name">
              <td>{{ event.name }}</td>
              <td>{{ event.description }}</td>
              <td>{{ event.parameters }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <div class="code-section">
        <h3>代码示例</h3>
        <pre class="code-block"><code>// 示例代码
// 在你的组件中需要定义对应的变量

// 模板部分:
// <Input
//   v-model="yourInputValue"
//   size="middle"
//   type="text"
//   :disabled="false"
//   :clearable="true"
//   placeholder="请输入内容"
// />

// 脚本部分:
// const yourInputValue = ref('')</code></pre>
      </div> -->
    </div>

    <!-- Select API 说明 -->
    <div v-if="activeTab === 'select'" class="component-demo">
      <h2>Select API</h2>

      <div class="docs-section">
        <h3>属性</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in selectApi.props" :key="prop.prop">
              <td>{{ prop.prop }}</td>
              <td>{{ prop.description }}</td>
              <td>{{ prop.type }}</td>
              <td>{{ prop.defaultValue }}</td>
            </tr>
          </tbody>
        </table>

        <h3>事件</h3>
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in selectApi.events" :key="event.name">
              <td>{{ event.name }}</td>
              <td>{{ event.description }}</td>
              <td>{{ event.parameters }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <div class="code-section">
        <h3>代码示例</h3>
        <pre class="code-block"><code>// 示例代码
// 在你的组件中需要定义对应的变量

// 模板部分:
// <Select
//   v-model="selectedValue"
//   size="middle"
//   :disabled="false"
//   :options="options"
//   placeholder="请选择"
// />

// 脚本部分:
// const selectedValue = ref('')
// const options = [
//   { value: 'option1', label: '选项1' },
//   { value: 'option2', label: '选项2' },
//   { value: 'option3', label: '选项3', disabled: true }
// ]</code></pre>
      </div> -->
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

.component-nav button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color-base);
  border-radius: var(--border-radius-base);
  background: none;
  cursor: pointer;
}

.component-nav button.active {
  background-color: var(--theme-color);
  color: white;
}

.component-demo {
  border: 1px solid var(--border-color-base);
  border-radius: var(--border-radius-base);
  padding: 1.5rem;
  margin-bottom: 2rem;
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
</style>
