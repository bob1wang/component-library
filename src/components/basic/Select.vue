<script setup lang="ts">
import { ref, computed } from 'vue'

type SelectSize = 'large' | 'middle' | 'small'
type SelectOption = {
  value: string | number
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue: string | number
  options: SelectOption[]
  size?: SelectSize
  disabled?: boolean
  placeholder?: string
}>(), {
  size: 'middle',
  disabled: false
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectRef = ref<HTMLDivElement | null>(null)

const selectedLabel = computed(() => {
  const option = props.options.find(opt => opt.value === props.modelValue)
  return option?.label || props.placeholder || '请选择'
})

const handleSelect = (value: string | number) => {
  emit('update:modelValue', value)
  isOpen.value = false
}

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const classes = computed(() => [
  'select',
  `select-${props.size}`,
  {
    'select-disabled': props.disabled,
    'select-open': isOpen.value
  }
])
</script>

<template>
  <div ref="selectRef" :class="classes">
    <div class="select-selection" @click="toggleDropdown">
      <span class="select-selected-value">{{ selectedLabel }}</span>
      <span class="select-arrow">▼</span>
    </div>
    <transition name="select-dropdown">
      <ul v-show="isOpen" class="select-dropdown">
        <li
          v-for="option in options"
          :key="option.value"
          class="select-option"
          :class="{
            'select-option-selected': option.value === modelValue,
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
  display: inline-block;
  min-width: 120px;
  border: 1px solid var(--border-color-base);
  border-radius: var(--border-radius-base);
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

.select-selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 100%;
}

.select-selected-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-arrow {
  margin-left: 8px;
  transition: transform 0.3s;
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
  height: 32px;
  font-size: 14px;
}

.select-large {
  height: 40px;
  font-size: 16px;
}

.select-small {
  height: 24px;
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
</style>
