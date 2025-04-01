// 类型定义
// 按钮
export type ButtonType = 'btn01-primary' | 'btn02-default' | 'btn03-dashed' | 'btn04-text' | 'btn05-link' | 'btn06-round' | 'btn07-success' | 'btn08-warning' | 'btn09-danger';
export type ButtonSize = 'large' | 'middle' | 'small';
// 输入框
export type InputType = 'text' | 'password' | 'number' | 'email' | 'search';
export type InputSize = 'large' | 'middle' | 'small';
export type styleType =  'blue' | 'default' | 'round'

// 选择器
export type SelectSize = 'large' | 'middle' | 'small';

export const buttonApi = {
  props: [
    {
      prop: "type",
      description: "按钮类型",
      type: "'btn01-primary' | 'btn02-default' | 'btn03-dashed' | 'btn04-text' | 'btn05-link' | 'btn06-round' | 'btn07-success' | 'btn08-warning' | 'btn09-danger'",
      defaultValue: "'default'",
    },
    {
      prop: "size",
      description: "按钮尺寸",
      type: "'large' | 'middle' | 'small'",
      defaultValue: "'middle'",
    },
    {
      prop: "loading",
      description: "加载状态",
      type: "boolean",
      defaultValue: "false",
    },
    {
      prop: "disabled",
      description: "禁用状态",
      type: "boolean",
      defaultValue: "false",
    },
  ],
  events: [
    {
      name: "@click",
      description: "点击按钮时触发",
      parameters: "MouseEvent",
    },
  ],
};

export const inputApi = {
  props: [
    {
      prop: "v-model",
      description: "绑定值",
      type: "string",
      defaultValue: "-",
    },
    {
      prop: "size",
      description: "输入框尺寸",
      type: "'large' | 'middle' | 'small'",
      defaultValue: "'middle'",
    },
    {
      prop: "type",
      description: "输入框类型",
      type: "'text' | 'password' | 'number' | 'email' | 'search'",
      defaultValue: "'text'",
    },
    {
      prop: "styleType",
      description: "输入框样式类型",
      type: " 'default' | 'blue'",
      defaultValue: "'text'",
    },
    {
      prop: "disabled",
      description: "禁用状态",
      type: "boolean",
      defaultValue: "false",
    },
    {
      prop: "clearable",
      description: "是否可清除",
      type: "boolean",
      defaultValue: "false",
    },
  ],
  events: [
    {
      name: "@input",
      description: "输入值变化时触发",
      parameters: "string - 新的输入值",
    },
    {
      name: "@focus",
      description: "输入框获得焦点时触发",
      parameters: "FocusEvent",
    },
    {
      name: "@blur",
      description: "输入框失去焦点时触发",
      parameters: "FocusEvent",
    },
  ],
};

export const selectApi = {
  props: [
    {
      prop: "v-model",
      description: "绑定值",
      type: "string | number | (string | number)[]",
      defaultValue: "-",
    },
    {
      prop: "options",
      description: "选项数据",
      type: "Array<{value: string|number, label: string, disabled?: boolean}>",
      defaultValue: "[]",
    },
    {
      prop: "size",
      description: "选择器尺寸",
      type: "'large' | 'middle' | 'small'",
      defaultValue: "'middle'",
    },
    {
      prop: "disabled",
      description: "禁用状态",
      type: "boolean",
      defaultValue: "false",
    },
    {
      prop: "multiple",
      description: "是否多选",
      type: "boolean",
      defaultValue: "false",
    },
    {
      prop: "collapseTags",
      description: "多选时是否折叠标签",
      type: "boolean",
      defaultValue: "false",
    },
    {
      prop: "filterable",
      description: "是否可搜索选项",
      type: "boolean",
      defaultValue: "false",
    },
  ],
  events: [
   
    {
      name: "@change",
      description: "选择值变化时触发",
      parameters: "string | number | (string | number)[] - 新的选择值",
    },
    // {
    //   name: "@blur",
    //   description: "当 input 失去焦点时触发",
    //   parameters: "Event",
    // },
    // {
    //   name: "@focus",
    //   description: "当 input 获得焦点时触发",
    //   parameters: "Event",
    // },
  ],
};
