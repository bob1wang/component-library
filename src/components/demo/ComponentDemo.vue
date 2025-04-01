<script setup lang="ts">
import { ref } from 'vue'
import microButton from '../basic/Button.vue'
import Input from '../basic/Input.vue'
import Select from '../basic/Select.vue'
import { buttonApi, inputApi, selectApi, ButtonType, ButtonSize, InputType, InputSize, SelectSize } from '../../data/componentApi'

const props = defineProps({
  activeTab: {
    type: String as () => 'button' | 'input' | 'select',
    required: true
  }
})

// 内部状态管理
const buttonType = ref<ButtonType>('btn01-primary')
const buttonSize = ref<'large' | 'middle' | 'small'>('middle')
const buttonLoading = ref(false)
const buttonDisabled = ref(false)

const inputValue = ref('')
const inputSize = ref<'large' | 'middle' | 'small'>('middle')
const inputType = ref<'text' | 'password' | 'number' | 'email' | 'search'>('text')
const inputDisabled = ref(false)
const inputClearable = ref(true)

const selectValue = ref('')
const selectMultiple = ref(false)
const selectCollapseTags = ref(false)
const selectFilterable = ref(false)
const selectSize = ref<'large' | 'middle' | 'small'>('middle')
const selectDisabled = ref(false)
const selectOptions = ref([
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3', disabled: true }
])
</script>

<template>
  <div class="component-library">

    <!-- Button 组件演示 -->
    <div v-if="props.activeTab === 'button'" class="component-demo">
      <h1>Button 按钮的更多演示</h1>

      <div class="demo-section">

        <div class="demo-example">
          <microButton :type="buttonType" :size="buttonSize" :loading="buttonLoading" :disabled="buttonDisabled">
            {{ buttonLoading ? '加载中...' : '点击按钮' }}
          </microButton>
        </div>

        <div class="demo-controls">
          <h3>属性控制</h3>
          <div class="control-group">
            <label>类型</label>
            <select :value="buttonType" @change="buttonType = ($event.target as HTMLSelectElement).value as ButtonType">
              <option v-for="type in buttonApi.props[0].type.replace(/'/g, '').split(' | ')" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <div class="control-group">
            <label>尺寸</label>
            <select :value="buttonSize"
              @change="buttonSize = ($event.target as HTMLSelectElement).value as 'large' | 'middle' | 'small'">
              <option v-for="size in buttonApi.props[1].type.replace(/'/g, '').split(' | ')" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="buttonLoading"
                @change="buttonLoading = ($event.target as HTMLInputElement).checked">
              加载状态
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="buttonDisabled"
                @change="buttonDisabled = ($event.target as HTMLInputElement).checked">
              禁用状态
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Input 组件演示 -->
    <div v-if="props.activeTab === 'input'" class="component-demo">
      <h1>Input 输入框的更多演示</h1>

      <div class="demo-section">

        <div class="demo-example">
          <Input :modelValue="inputValue"  @update:modelValue="inputValue = $event" :size="inputSize" :type="inputType"
            :disabled="inputDisabled" :clearable="inputClearable" placeholder="请输入内容" />
          <p class="demo-value">值: {{ inputValue }}</p>
        </div>

        <div class="demo-controls">
          <h3>属性控制</h3>
          <div class="control-group">
            <label>尺寸</label>
            <select :value="inputSize"
              @change="inputSize = ($event.target as HTMLSelectElement).value as 'large' | 'middle' | 'small'">

              <option v-for="size in inputApi.props[1].type.replace(/'/g, '').split(' | ')" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>

          <div class="control-group">
            <label>类型</label>
            <select :value="inputType"
              @change="inputType = ($event.target as HTMLSelectElement).value as 'text' | 'password' | 'number' | 'email' | 'search'">
              <option value="text">text</option>
              <option value="password">password</option>
              <option value="number">number</option>
              <option value="email">email</option>
              <option value="search">search</option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="inputDisabled"
                @change="inputDisabled = ($event.target as HTMLInputElement).checked">
              禁用状态
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="inputClearable"
                @change="inputClearable = ($event.target as HTMLInputElement).checked">
              可清除
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Select 组件演示 -->
    <div v-if="props.activeTab === 'select'" class="component-demo">
      <h1>Select 选择器的更多演示</h1>

      <div class="demo-section">

        <div class="demo-example">
          <Select  v-model="selectValue" 
            @change="val => console.log('Select changed:', val)"
            @blur="e => console.log('Select blurred:', e)"
            @focus="e => console.log('Select focused:', e)"
            :size="selectSize" 
            :disabled="selectDisabled" 
            :options="selectOptions" 
            :multiple="selectMultiple"
            :collapseTags="selectCollapseTags" 
            :filterable="selectFilterable" 
            placeholder="请选择" />
          <p class="demo-value">值: {{ selectValue }}</p>
        </div>

        <div class="demo-controls">
          <h3>属性控制</h3>
          <div class="control-group">
            <label>尺寸</label>
            <select :value="selectSize"
              @change="selectSize = ($event.target as HTMLSelectElement).value as 'large' | 'middle' | 'small'">
              <option v-for="size in selectApi.props[2].type.replace(/'/g, '').split(' | ')" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="selectMultiple"
                @change="selectMultiple = ($event.target as HTMLInputElement).checked">
              多选模式
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="selectCollapseTags"
                @change="selectCollapseTags = ($event.target as HTMLInputElement).checked">
              折叠标签
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="selectFilterable"
                @change="selectFilterable = ($event.target as HTMLInputElement).checked">
              可搜索
            </label>
          </div>

          <div class="control-group">
            <label>
              <input type="checkbox" :checked="selectDisabled"
                @change="selectDisabled = ($event.target as HTMLInputElement).checked">
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
  /* margin-bottom: 2rem; */
}

.component-demo h2 {
  text-align: center;
}

.demo-section {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.demo-example {
  flex: 1;
  padding: 1rem;
  border: 1px dashed var(--border-color-base);
  border-radius: var(--border-radius-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.demo-controls {
  flex: 1;
  padding: 1rem;
  border: 1px dashed var(--border-color-base);
  border-radius: var(--border-radius-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
