---
title: popover-气泡卡片
---

# popover-气泡卡片
点击/鼠标移入元素，弹出气泡式的卡片浮层。
## 组件注册
```vue
<script>
    import {Popover} from "boat-ui"
    export default {
      components: {"b-popover":Popover}
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <popover-demo></popover-demo>
</ClientOnly>
代码：
```vue
<template>
  <div>
    <div class="click">
      <div>点击弹出</div>
      <b-popover position="top">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>上方弹出</b-button>
      </b-popover>
      <b-popover position="bottom">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>下方弹出</b-button>
      </b-popover>
      <b-popover position="left">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>左边弹出</b-button>
      </b-popover>
      <b-popover position="right">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>右边弹出</b-button>
      </b-popover>
    </div>
    <div class="hover">
      <div>鼠标悬浮</div>
      <b-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>上方弹出</b-button>
      </b-popover>
      <b-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>下方弹出</b-button>
      </b-popover>
      <b-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>左边弹出</b-button>
      </b-popover>
      <b-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>右边弹出</b-button>
      </b-popover>
    </div>    
  </div>
</template>
```
## API参数
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|position|设置弹出位置|String|top|[top, bottom, left, right]|
|trigger|设置触发方式|String|click|[click, hover]|

