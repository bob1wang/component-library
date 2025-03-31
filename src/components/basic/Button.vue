<script setup lang="ts">
import { withDefaults } from 'vue'

type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link'
type ButtonSize = 'large' | 'middle' | 'small'

withDefaults(defineProps<{
  type?: ButtonType
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}>(), {
  type: 'primary',
  size: 'middle',
  loading: false,
  disabled: false,
  htmlType: 'button'
})

</script>

<template>
  <button
    class="btn"
    :class="[`btn-${type}`, `btn-${size}`, { 'btn-loading': loading, 'btn-disabled': disabled }]"
    :disabled="disabled || loading"
    :type="htmlType"
  >
    <span v-if="loading" class="btn-loading-icon" />
    <slot />
  </button>
</template>

<style scoped>
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  font-size: 14px;
  line-height: 1.5715;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  outline: none;
}

.btn-default {
  background-color: var(--btn-default-bg);
  border-color: var(--btn-default-border);
  color: var(--btn-default-color);
}
.btn-default:not(.btn-disabled):hover {
  opacity: 0.8;
}
.btn-default:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-primary {
  background-color: var(--btn-primary-bg);
  border-color: var(--btn-primary-border);
  color: var(--btn-primary-color);
}
.btn-primary:not(.btn-disabled):hover {
  opacity: 0.8;
}
.btn-primary:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-dashed {
  background-color: var(--btn-dashed-bg);
  border-color: var(--btn-dashed-border);
  border-style: dashed;
  color: var(--btn-dashed-color);
}
.btn-dashed:not(.btn-disabled):hover {
  opacity: 0.8;
}
.btn-dashed:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-text {
  background-color: transparent;
  border-color: transparent;
  color: var(--btn-text-color);
}
.btn-text:not(.btn-disabled):hover {
  opacity: 0.8;
}
.btn-text:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-link {
  background-color: transparent;
  border-color: transparent;
  color: var(--btn-link-color);
}
.btn-link:not(.btn-disabled):hover {
  opacity: 0.8;
  text-decoration: underline;
}
.btn-link:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-large {
  padding: 8px 20px;
  font-size: 16px;
}

.btn-small {
  padding: 4px 12px;
  font-size: 12px;
}

.btn-loading,
.btn-disabled {
  cursor: not-allowed;
  opacity: 0.65;
  pointer-events: none;
}

.btn-loading-icon {
  display: inline-block;
  margin-right: 8px;
  width: 12px;
  height: 12px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: btn-spin 1s linear infinite;
}

@keyframes btn-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
<!-- 以下为按钮类型 -->
 <style scoped lang="scss">
  .btn-btn01{
    
  }
</style>
