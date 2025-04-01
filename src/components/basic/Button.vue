<script setup lang="ts">
import { withDefaults } from 'vue'

type ButtonType = 'btn01-primary' | 'btn02-default' | 'btn03-dashed' | 'btn04-text' | 'btn05-link' | 'btn06-round' | 'btn07-success' | 'btn08-warning' | 'btn09-danger'
type ButtonSize = 'large' | 'middle' | 'small'

withDefaults(defineProps<{
  type?: ButtonType
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
}>(), {
  type: 'btn01-primary',
  size: 'middle',
  loading: false,
  disabled: false,
  htmlType: 'button'
})

</script>

<template>
  <button class="btn" :class="[`btn-${type}`, `btn-${size}`, { 'btn-loading': loading, 'btn-disabled': disabled }]"
    :disabled="disabled || loading" :type="htmlType">
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

.btn-btn02-default {
  background-color: var(--btn-default-bg);
  border-color: var(--btn-default-border);
  color: var(--btn-default-color);
}

.btn-btn02-default:not(.btn-disabled):hover {
  opacity: 0.8;
}

.btn-btn02-default:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-btn01-primary {
  background-color: var(--btn-primary-bg);
  border-color: var(--btn-primary-border);
  color: var( --text-color-wihte);
}

.btn-btn01-primary:not(.btn-disabled):hover {
  opacity: 0.8;
}

.btn-btn01-primary:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-btn03-dashed {
  background-color: var(--btn-dashed-bg);
  border-color: var(--btn-dashed-border);
  border-style: dashed;
  color: var(--btn-dashed-color);
}

.btn-btn03-dashed:not(.btn-disabled):hover {
  opacity: 0.8;
}

.btn-btn03-dashed:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-btn04-text {
  background-color: transparent;
  border-color: transparent;
  color: var(--btn-text-color);
}

.btn-btn04-text:not(.btn-disabled):hover {
  opacity: 0.8;
}

.btn-btn04-text:not(.btn-disabled):active {
  opacity: 0.9;
}

.btn-btn05-link {
  background-color: transparent;
  border-color: transparent;
  color: var(--btn-link-color);
}

.btn-btn05-link:not(.btn-disabled):hover {
  opacity: 0.8;
  text-decoration: underline;
}

.btn-btn05-link:not(.btn-disabled):active {
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
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
<!-- 以下为按钮类型 -->
<style scoped lang="scss">
.btn-base {
  background-color: var(--btn-primary-bg);
  border-color: var(--btn-primary-border);
  color: var(--btn-primary-color);
  
  &:not(.btn-disabled):hover {
    opacity: 0.8;
  }
  
  &:not(.btn-disabled):active {
    opacity: 0.9;
  }
}

.btn-btn01, .btn-btn03 {
  @extend .btn-base;
}

.btn-btn06-round {
  @extend .btn-base;
  border-radius: 15px;
}

.btn-btn07-success {
  @extend .btn-base;
  background-color: var(--success-color);
  border-color: var(--success-color);
  color: var( --text-color-wihte);
}

.btn-btn08-warning {
  @extend .btn-base;
  background-color: var(--warning-color);
  border-color: var(--warning-color);
  color: var( --text-color-wihte);
}

.btn-btn09-danger {
  @extend .btn-base;
  background-color: var(--error-color);
  border-color: var(--error-color);
  color: var( --text-color-wihte);
}
</style>
