---
title: button-按钮
---

# button-按钮
按钮用于开始的一个及时操作,标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
## 组件注册
```vue
<script>
    import {Button} from "boat-ui"
    export default {
      components: {"b-button":Button}
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>
代码：
```vue
<template>
  <div>
    <b-button>默认按钮</b-button>
    <b-button icon="setting">带有icon按钮</b-button>
    <b-button icon="setting" icon-position="right">icon在右边</b-button>
    <b-button loading>加载中</b-button>
    <b-button icon="setting" :loading="loading1" @click="onClick">点击加载</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loading1:false
    }
  },
  methods: {
    onClick(){
      this.loading1 = !this.loading1
    }
  }
}
</script>
```
## 按钮组合：ButtonGroup
组件注册:
```vue
<script>
    import {Button,ButtonGroup} from "boat-ui"
    export default {
      components: {"b-button":Button,"b-button-group":ButtonGroup}
    }
</script>
```
使用方式：
<ClientOnly>
  <button-group-demo></button-group-demo>
</ClientOnly>
代码：
```vue
<template>
    <div>
      <b-button-group>
        <b-button icon="left">上一页</b-button>
        <b-button>按钮</b-button>
        <b-button icon="right" icon-position="right">下一页</b-button>
      </b-button-group>
    </div>
</template>
```
## API参数
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|icon|给按钮添加图标|String|-|[setting,left,right,search,upload,<br/>download,information,error,heart]|
|iconPosition|改变图标位置|String|left|[left,right]|
|loading|给按钮添加加载动画|Boolean|false|[false,true]|
