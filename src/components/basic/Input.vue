<script setup lang="ts">
import { ref, computed } from 'vue'

type InputSize = 'large' | 'middle' | 'small'
type InputType = 'text' | 'password' | 'number' | 'email' | 'search'
type InputStyleType = 'blue' | 'default' | 'round'

const props = withDefaults(defineProps<{
  modelValue: string
  size?: InputSize
  type?: InputType
  styleType?: InputStyleType
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
}>(), {
  size: 'middle',
  type: 'text',
  disabled: false,
  clearable: false
})

const emit = defineEmits(['input', 'update:modelValue', 'focus', 'blur'])

const inputRef = ref<HTMLInputElement | null>(null)
const isFocused = ref(false)

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('input', target.value)
  emit('update:modelValue', target.value)
}

const handleFocus = () => {
  isFocused.value = true
  emit('focus')
}

const handleBlur = () => {
  isFocused.value = false
  emit('blur')
}

const handleClear = () => {
  emit('input', '')
  emit('update:modelValue', '')
  inputRef.value?.focus()
}

const classes = computed(() => [
  'input',
  `input-${props.size}`,
  props.styleType ? `input-${props.styleType}` : '',
  {
    'input-disabled': props.disabled,
    'input-focused': isFocused.value
  }
])
</script>

<template>
  <div :class="classes">
    <input
      ref="inputRef"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="clearable && modelValue && !disabled" class="input-clear" @click="handleClear">
      ×
    </span>
  </div>
</template>

<style scoped>
.input {
  position: relative;
  display: inline-flex;
  align-items: center;
  border: 1.5px solid var(--border-color-hasborder);
  border-radius: 4px;
  transition: all 0.3s;
}

.input input {
  flex: 1;
  width: 100%;
  padding: 0 12px;
  outline: none;
  border: 1px solid var(--input-border-color);
  background: transparent;
  color: var(--input-color);
}

.input-middle {
  height: 32px;
  font-size: 14px;
}

.input-large {
  height: 40px;
  font-size: 16px;
}

.input-small {
  height: 24px;
  font-size: 12px;
}

.input-disabled {
  background-color: var(--input-disabled-bg);
  cursor: not-allowed;
}

.input-focused {
  border-color: var(--input-focus-border-color);
  box-shadow: 0 0 0 2px var(--input-focus-shadow);
}

.input-clear {
  margin-right: 8px;
  cursor: pointer;
  color: var(--input-clear-color);
}


.input-blue {
  border-color: var( --input-focus-border-color);
}

.input-round{
  border-radius: 10px;
}

</style>
