---
title: tabs-标签
---

# tabs-标签
选项卡切换组件。
## 组件注册
```vue
<script>
    import {Tabs,TabsBody,TabsHead,TabsItem,TabsPane} from "boat-ui"
    export default {
      components: {
        "b-tabs":Tabs,
        "b-tabs-head":TabsHead,
        "b-tabs-body":TabsBody,
        "b-tabs-item":TabsItem,
        "b-tabs-pane":TabsPane
      }
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <tabs-demo></tabs-demo>
</ClientOnly>
代码：
```vue
<template>
  <div>
    
  </div>
</template>

<script>
export default {

}
</script>
```
## API参数
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|value|给输入框绑定值|String|-|-|
|placeholder|占位符|String|-|-|
|disabled|设置输入框禁用|Boolean|false|false;true|
|readOnly|设置输入框只读|Boolean|false|false;true|
|error|设置错误警告|String|-|-|
|v-model|输入框支持v-model语法|-|-|-|
