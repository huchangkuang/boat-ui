---
title: 快速上手
---

# 快速上手

## 样式引入
```javascript
import "boat-ui/dist/index.css"
```

## 组件注册
在组件中引入
```vue
<script>
    import {Button} from "boat-ui"
    export default {
      components: {"b-button",Button}
    }
</script>
```
## 使用
```vue
<template>
  <div>
    <b-button>按钮</b-button>
  </div>
</template>
```
