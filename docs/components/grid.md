---
title: grid-网格系统
---

# grid-网格系统
24 网格系统，将设计建议区域按照 24 等分的原则进行划分。
## 概述
布局的网格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

通过row在水平方向建立一组column（简写col）
你的内容应当放置于col内，并且，只有col可以作为row的直接元素
网格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <b-col :span="8" /> 来创建
### Flex布局
网格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。
Flex 布局是基于 24 网格来定义每一个『盒子』的宽度，但不拘泥于网格。
## 组件注册
```vue
<script>
    import {Row,Col} from "boat-ui"
    export default {
      components: {"b-row":Row,"b-col":Col}
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>
代码：此处CSS样式只是用于展示，可自己调整
```vue
<template>
  <div>
      <div class="normal">
        <div>基础网格</div>
        <div>
          <b-row>
            <b-col span="12">col-12</b-col>
            <b-col span="12">col-12</b-col>
          </b-row>
          <b-row>
            <b-col span="8">col-8</b-col>
            <b-col span="8">col-8</b-col>
            <b-col span="8">col-8</b-col>
          </b-row>
          <b-row>
            <b-col span="6">col-6</b-col>
            <b-col span="6">col-6</b-col>
            <b-col span="6">col-6</b-col>
            <b-col span="6">col-6</b-col>
          </b-row>
        </div>
      </div>
  </div>
</template>
```
## API参数
### Row
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|gutter|网格间隔，支持输入字符串或者数字，输出像素值|[String,Number]|-|-|
|align|flex下的水平布局方式，start，center，end|String|-|[left,center,right]|
### Col
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|span|栅格占位格数，为 0 时相当于 display: none|[String,Number]|-|0到24内的数值|
|offset|占位符|String|-|[left,center,right]|
|ipad|占位符|String|-|[left,center,right]|
|narrowPc|占位符|String|-|[left,center,right]|
|pc|占位符|String|-|[left,center,right]|
|widePc|占位符|String|-|[left,center,right]|
