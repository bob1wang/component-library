export const buttonApi = {
  props: [
    {
      prop: 'type',
      description: '按钮类型',
      type: "'primary' | 'default' | 'dashed' | 'text' | 'link'",
      defaultValue: "'default'"
    },
    {
      prop: 'size',
      description: '按钮尺寸',
      type: "'large' | 'middle' | 'small'",
      defaultValue: "'middle'"
    },
    {
      prop: 'loading',
      description: '加载状态',
      type: 'boolean',
      defaultValue: 'false'
    },
    {
      prop: 'disabled',
      description: '禁用状态',
      type: 'boolean',
      defaultValue: 'false'
    }
  ],
  events: [
    {
      name: 'click',
      description: '点击按钮时触发',
      parameters: 'MouseEvent'
    }
  ]
}

export const inputApi = {
  props: [
    {
      prop: 'modelValue',
      description: '绑定值',
      type: 'string',
      defaultValue: '-'
    },
    {
      prop: 'size',
      description: '输入框尺寸',
      type: "'large' | 'middle' | 'small'",
      defaultValue: "'middle'"
    },
    {
      prop: 'type',
      description: '输入框类型',
      type: "'text' | 'password' | 'number' | 'email' | 'search'",
      defaultValue: "'text'"
    },
    {
      prop: 'disabled',
      description: '禁用状态',
      type: 'boolean',
      defaultValue: 'false'
    },
    {
      prop: 'clearable',
      description: '是否可清除',
      type: 'boolean',
      defaultValue: 'false'
    }
  ],
  events: [
    {
      name: 'update:modelValue',
      description: '输入值变化时触发',
      parameters: 'string - 新的输入值'
    },
    {
      name: 'focus',
      description: '输入框获得焦点时触发',
      parameters: 'FocusEvent'
    },
    {
      name: 'blur',
      description: '输入框失去焦点时触发',
      parameters: 'FocusEvent'
    }
  ]
}

export const selectApi = {
  props: [
    {
      prop: 'modelValue',
      description: '绑定值',
      type: 'string | number',
      defaultValue: '-'
    },
    {
      prop: 'options',
      description: '选项数据',
      type: 'Array<{value: string|number, label: string, disabled?: boolean}>',
      defaultValue: '[]'
    },
    {
      prop: 'size',
      description: '选择器尺寸',
      type: "'large' | 'middle' | 'small'",
      defaultValue: "'middle'"
    },
    {
      prop: 'disabled',
      description: '禁用状态',
      type: 'boolean',
      defaultValue: 'false'
    }
  ],
  events: [
    {
      name: 'update:modelValue',
      description: '选择值变化时触发',
      parameters: 'string | number - 新的选择值'
    }
  ]
}
