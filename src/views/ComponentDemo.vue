<script setup lang="ts">
import microButton from '../components/basic/Button.vue'
import StyleSummary from '../components/demo/StyleSummary.vue'
import Input from '../components/basic/Input.vue'
import Select from '../components/basic/Select.vue'

const props = defineProps({
  activeTab: {
    type: String as () => 'button' | 'input' | 'select',
    required: true
  },
  buttonType: {
    type: String as () => 'primary' | 'default' | 'dashed' | 'text' | 'link',
    required: true
  },
  buttonSize: {
    type: String as () => 'large' | 'middle' | 'small',
    required: true
  },
  buttonLoading: {
    type: Boolean,
    required: true
  },
  buttonDisabled: {
    type: Boolean,
    required: true
  },
  inputValue: {
    type: String,
    required: true
  },
  inputSize: {
    type: String as () => 'large' | 'middle' | 'small',
    required: true
  },
  inputType: {
    type: String as () => 'text' | 'password' | 'number' | 'email' | 'search',
    required: true
  },
  inputDisabled: {
    type: Boolean,
    required: true
  },
  inputClearable: {
    type: Boolean,
    required: true
  },
  selectValue: {
    type: String,
    required: true
  },
  selectSize: {
    type: String as () => 'large' | 'middle' | 'small',
    required: true
  },
  selectDisabled: {
    type: Boolean,
    required: true
  },
  selectOptions: {
    type: Array as () => Array<{value: string, label: string, disabled?: boolean}>,
    required: true
  }
})

const emit = defineEmits([
  'update:activeTab',
  'update:buttonType',
  'update:buttonSize',
  'update:buttonLoading',
  'update:buttonDisabled',
  'update:inputValue',
  'update:inputSize',
  'update:inputType',
  'update:inputDisabled',
  'update:inputClearable',
  'update:selectValue',
  'update:selectSize',
  'update:selectDisabled'
])
</script>

<template>
  <div class="component-library">
    <h1>微径组件库 - 演示</h1>
    <!-- <StyleSummary :active-component="props.activeTab" /> -->


    <!-- Button 组件演示 -->
    <div v-if="props.activeTab === 'button'" class="component-demo">
      <h2>Button 按钮</h2>

      <div class="demo-section">
        <h3>演示</h3>
        <div class="demo-example">
          <microButton :type="props.buttonType" 
                 :size="props.buttonSize" 
                 :loading="props.buttonLoading" 
                 :disabled="props.buttonDisabled">
            {{ props.buttonLoading ? '加载中...' : '点击按钮' }}
          </microButton>
        </div>

        <div class="demo-controls">
          <h3>属性控制</h3>
          <div class="control-group">
            <label>类型</label>
            <select :value="props.buttonType" 
                   @change="$emit('update:buttonType', ($event.target as HTMLSelectElement).value)">
              <option value="primary">primary</option>
              <option value="default">default</option>
              <option value="dashed">dashed</option>
              <option value="text">text</option>
              <option value="link">link</option>
            </select>
          </div>

          <div class="control-group">
            <label>尺寸</label>
            <select :value="props.buttonSize" 
                   @change="$emit('update:buttonSize', ($event.target as HTMLSelectElement).value)">
              <option value="large">large</option>
              <option value="middle">middle</option>
              <option value="small">small</option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" 
                     :checked="props.buttonLoading" 
                     @change="$emit('update:buttonLoading', ($event.target as HTMLInputElement).checked)">
              加载状态
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" 
                     :checked="props.buttonDisabled" 
                     @change="$emit('update:buttonDisabled', ($event.target as HTMLInputElement).checked)">
              禁用状态
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Input 组件演示 -->
    <div v-if="props.activeTab === 'input'" class="component-demo">
      <h2>Input 输入框</h2>

      <div class="demo-section">
        <h3>演示</h3>
        <div class="demo-example">
          <Input :modelValue="props.inputValue" 
                @update:modelValue="$emit('update:inputValue', $event)"
                :size="props.inputSize" 
                :type="props.inputType" 
                :disabled="props.inputDisabled"
                :clearable="props.inputClearable" 
                placeholder="请输入内容" />
          <p class="demo-value">值: {{ props.inputValue }}</p>
        </div>

        <div class="demo-controls">
          <h3>属性控制</h3>
          <div class="control-group">
            <label>尺寸</label>
            <select :value="props.inputSize" 
                   @change="$emit('update:inputSize', ($event.target as HTMLSelectElement).value)">
              
              <option value="large">large</option>
              <option value="middle">middle</option>
              <option value="small">small</option>
            </select>
          </div>

          <div class="control-group">
            <label>类型</label>
            <select :value="props.inputType" 
                   @change="$emit('update:inputType', ($event.target as HTMLSelectElement).value)">
              <option value="text">text</option>
              <option value="password">password</option>
              <option value="number">number</option>
              <option value="email">email</option>
              <option value="search">search</option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" 
                     :checked="props.inputDisabled" 
                     @change="$emit('update:inputDisabled', ($event.target as HTMLInputElement).checked)">
              禁用状态
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" 
                     :checked="props.inputClearable" 
                     @change="$emit('update:inputClearable', ($event.target as HTMLInputElement).checked)">
              可清除
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Select 组件演示 -->
    <div v-if="props.activeTab === 'select'" class="component-demo">
      <h2>Select 选择器</h2>

      <div class="demo-section">
        <h3>演示</h3>
        <div class="demo-example">
          <Select :modelValue="props.selectValue" 
                 @update:modelValue="$emit('update:selectValue', $event)"
                 :size="props.selectSize" 
                 :disabled="props.selectDisabled" 
                 :options="props.selectOptions"
                 placeholder="请选择" />
          <p class="demo-value">值: {{ props.selectValue }}</p>
        </div>

        <div class="demo-controls">
          <h3>属性控制</h3>
          <div class="control-group">
            <label>尺寸</label>
            <select :value="props.selectSize" 
                   @change="$emit('update:selectSize', ($event.target as HTMLSelectElement).value)">
              <option value="large">large</option>
              <option value="middle">middle</option>
              <option value="small">small</option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" 
                     :checked="props.selectDisabled" 
                     @change="$emit('update:selectDisabled', ($event.target as HTMLInputElement).checked)">
              禁用状态
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 保留原有样式不变 */
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

.component-demo {
  border: 1px solid var(--border-color-base);
  border-radius: var(--border-radius-base);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.demo-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.demo-example {
  flex: 1;
  padding: 1rem;
  border: 1px dashed var(--border-color-base);
  border-radius: var(--border-radius-base);
}

.demo-controls {
  flex: 1;
  padding: 1rem;
  border: 1px dashed var(--border-color-base);
  border-radius: var(--border-radius-base);
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

.demo-value {
  margin-top: 1rem;
  color: var(--text-color-secondary);
  color: var(--text-color-secondary);
}
</style>
