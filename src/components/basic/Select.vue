<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

type SelectSize = 'large' | 'middle' | 'small'
type SelectOption = {
  value: string | number
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue: string | number | (string | number)[]
  options: SelectOption[]
  size?: SelectSize
  disabled?: boolean
  placeholder?: string
  multiple?: boolean
  collapseTags?: boolean
  filterable?: boolean
}>(), {
  size: 'middle',
  disabled: false,
  multiple: false,
  collapseTags: false,
  filterable: false
})

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus'])

const isOpen = ref(false)
const selectRef = ref<HTMLDivElement | null>(null)
const searchQuery = ref('')
const filteredOptions = computed(() => {
  if (!props.filterable || !searchQuery.value) {
    return props.options
  }
  return props.options.filter(option => 
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const selectedLabel = computed(() => {
  if (props.multiple) {
    if (!props.modelValue || !Array.isArray(props.modelValue) || props.modelValue.length === 0) {
      return props.placeholder || '请选择'
    }
    if (props.collapseTags && props.modelValue.length > 1) {
      const modelValue = props.modelValue as (string | number)[]
      const firstOption = props.options.find(opt => opt.value === modelValue[0])
      return `${firstOption?.label} + ${modelValue.length - 1}`
    }
    const modelValue = props.modelValue as (string | number)[]
    return modelValue
      .map(val => props.options.find(opt => opt.value === val)?.label)
      .filter(Boolean)
      .join(', ')
  }
  const modelValue = props.modelValue as string | number
  const option = props.options.find(opt => opt.value === modelValue)
  return option?.label || props.placeholder || '请选择'
})

const handleTagRemove = (value: string | number) => {
  if (props.multiple && Array.isArray(props.modelValue)) {
    const newValue = props.modelValue.filter(v => v !== value)
    emit('update:modelValue', newValue)
    emit('change', newValue)
  }
}

const handleSelect = (value: string | number) => {
  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const valueIndex = currentValue.indexOf(value)
    if (valueIndex > -1) {
      currentValue.splice(valueIndex, 1)
    } else {
      currentValue.push(value)
    }
    emit('update:modelValue', currentValue)
    emit('change', currentValue)
  } else {
    emit('update:modelValue', value)
    emit('change', value)
    isOpen.value = false
  }
}

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
    if (!isOpen.value) {
      emit('blur', new Event('blur'))
    }
  }
}

const handleFocus = () => {
  emit('focus', new Event('focus'))
}

const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value && selectRef.value && 
      !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const classes = computed(() => [
  'select',
  `select-${props.size}`,
  {
    'select-disabled': props.disabled,
    'select-open': isOpen.value,
    'select-multiple': props.multiple
  }
])
</script>

<template>
    <div ref="selectRef" :class="classes">
      <div class="select-selection" 
           @click="toggleDropdown"
           @focus="handleFocus">
      <template v-if="filterable && isOpen">
        <input
          v-model="searchQuery"
          class="select-input"
          :placeholder="selectedLabel"
          @click.stop
        />
      </template>
      <template v-else>
        <template v-if="multiple">
          <span 
            v-for="(value, index) in (Array.isArray(modelValue) ? modelValue : [])"
            v-show="!collapseTags || index === 0"
            :key="value"
            class="select-tag"
          >
            {{ options.find(opt => opt.value === value)?.label }}
            <span class="select-tag-close" @click.stop="handleTagRemove(value)">×</span>
          </span>
          <span 
            v-if="collapseTags && Array.isArray(modelValue) && modelValue.length > 1"
            class="select-tag select-tag-collapse"
          >
            + {{ modelValue.length - 1 }}
          </span>
          <span 
            v-if="(!modelValue || (Array.isArray(modelValue) && modelValue.length === 0))"
            class="select-selected-value"
            :data-placeholder="true"
          >
            {{ placeholder || '请选择' }}
          </span>
        </template>
        <template v-else>
          <span 
            class="select-selected-value" 
            :data-placeholder="selectedLabel === '请选择'"
          >
            {{ selectedLabel }}
          </span>
        </template>
      </template>
      <span class="select-arrow">▽</span>
    </div>
    <transition name="select-dropdown">
      <ul v-show="isOpen" class="select-dropdown">
        <li
          v-for="option in filteredOptions"
          :key="option.value"
          class="select-option"
          :class="{
            'select-option-selected': multiple 
              ? Array.isArray(modelValue) && modelValue.includes(option.value)
              : option.value === modelValue,
            'select-option-disabled': option.disabled
          }"
          @click="!option.disabled && handleSelect(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.select {
  position: relative;
  display: inline-flex;
  width: 180px;
  min-width: 180px;
  max-width: 400px;
  border: 1px solid var(--border-color-hasborder);
  border-radius: var(--border-radius-base);
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
}

.select-multiple {
  width: auto;
}

.select-selection {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  padding: 8px;
  min-height: 100%;
  color: var(--font-color-base);
}

.select-input {
  flex: 1;
  width: calc(100% - 24px);
  /* 
  min-width: 100px;
  padding: 0 8px; */
  margin: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--font-color-base);
  box-sizing: border-box;
  line-height: inherit;
}

.select-input::placeholder {
  color: var(--text-color-secondary);
}

.select-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  background-color: var(--grey-color);
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
}

.select-tag-close {
  margin-left: 4px;
  cursor: pointer;
  color: var(--text-color-secondary);
}

.select-tag-close:hover {
  color: var(--text-color);
}

.select-tag-collapse {
  background-color: var(--background-color-base);
}

.select-selected-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-arrow {
  margin-left: auto;
  padding-left: 8px;
  transition: transform 0.3s;
  flex-shrink: 0;
}

.select-open .select-arrow {
  transform: rotate(180deg);
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  padding: 4px 0;
  border: 1px solid var(--border-color-base);
  border-radius: var(--border-radius-base);
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  list-style: none;
}

.select-option {
  padding: 5px 12px;
  transition: all 0.3s;
  color: var(--font-color-base);
}

.select-option:hover {
  background-color: var(--background-color-base);
}

.select-option-selected {
  color: var(--primary-color);
  background-color: rgba(24, 144, 255, 0.1);
}

.select-option-disabled {
  color: var(--text-color-secondary);
  cursor: not-allowed;
}

.select-middle {
  height: 36px;
  font-size: 14px;

}

.select-large {
  height: 42px;
  font-size: 16px;
}

.select-small {
  height: 28px;
  font-size: 12px;
}

.select-disabled {
  background-color: var(--background-color-base);
  cursor: not-allowed;
}

.select-dropdown-enter-active,
.select-dropdown-leave-active {
  transition: all 0.3s;
  opacity: 1;
}

.select-dropdown-enter-from,
.select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.select-selected-value[data-placeholder="true"] {
  color: var(--text-color-secondary);
}
</style>
