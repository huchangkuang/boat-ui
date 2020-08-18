---
title: collapse-手风琴
---

# collapse-手风琴
可以折叠/展开的内容区域。
## 组件注册
```vue
<script>
    import {Collapse} from "boat-ui"
    export default {
      components: {"b-collapse":Collapse}
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <collapse-demo></collapse-demo>
</ClientOnly>
代码：
```vue
<template>
  <div>
    <b-collapse :selected.sync="selectedArray">
      <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
      <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
      <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
    </b-collapse>
    <div>一次最多展示一个</div>
    <b-collapse :selected.sync="selectedArray" single>
      <b-collapse-item title="标题1" name="1">内容1</b-collapse-item>
      <b-collapse-item title="标题2" name="2">内容2</b-collapse-item>
      <b-collapse-item title="标题3" name="3">内容3</b-collapse-item>
    </b-collapse>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedArray: ["1"]
    }
  }
}
</script>
```
## API参数
### Collapse
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|single|设置一次只能展开一个选项|Boolean|false|false,true|
|selected|设置默认展开的选项|Array|-|-|
### CollapseItem
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|title|必填项，设置折叠面板的头部内容|String|-|-|
|name|必填项，与selected联动|String|-|-|
