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
  <div class="wrapper">
    默认标签
    <b-tabs :selected="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="sport">体育</b-tabs-item>
        <b-tabs-item name="game">游戏</b-tabs-item>
        <b-tabs-item name="book">书籍</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="sport">内容：体育</b-tabs-pane>
        <b-tabs-pane name="game">内容：游戏</b-tabs-pane>
        <b-tabs-pane name="book">内容：书籍</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
    禁用标签
    <b-tabs :selected="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="sport">体育</b-tabs-item>
        <b-tabs-item name="game">游戏</b-tabs-item>
        <b-tabs-item name="book" disable>书籍</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="sport">内容：体育</b-tabs-pane>
        <b-tabs-pane name="game">内容：游戏</b-tabs-pane>
        <b-tabs-pane name="book">内容：书籍</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
    附加按钮
    <b-tabs :selected="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="sport">体育</b-tabs-item>
        <b-tabs-item name="game">游戏</b-tabs-item>
        <b-tabs-item name="book">书籍</b-tabs-item>
        <template slot="actions">
          <b-button>设置</b-button>
        </template>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="sport">内容：体育</b-tabs-pane>
        <b-tabs-pane name="game">内容：游戏</b-tabs-pane>
        <b-tabs-pane name="book">内容：书籍</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: "sport"
    }
  }
}
</script>

<style>
.wrapper > .tabs {
  margin: 5px 0;
  border: 1px solid #ebedf0;
  border-radius: 4px;
}
</style>
```
## API参数
### Tabs
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|selected|必传值，给定初始选定的标签项|String|-|-|
### TabsItem
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|name|为每项标签传名字，方便标签与内容对应|[String,Number]|-|-|
|disable|禁用该标签|Boolean|-|-|
### TabsPane
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|name|为每项内容传名字，方便标签与内容对应|[String,Number]|-|-|
