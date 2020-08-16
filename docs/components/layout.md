---
title: layout-布局
---

# layout-布局
协助进行页面级整体布局。
## 组件注册
```vue
<script>
    import {Layout,Header,Footer,Content,Sider} from "boat-ui"
    export default {
        components:{
            "b-layout":Layout,
            "b-header":Header,
            "b-footer":Footer,
            "b-content":Content,
            "b-sider":Sider,
        }
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <layout-demo></layout-demo>
</ClientOnly>
代码：
```vue
<template>
  <div>
    <div >
      <div>默认布局</div>
      <b-layout>
        <b-header></b-header>
        <b-content></b-content>
        <b-footer></b-footer>
      </b-layout>
    </div>
    <div >
      <div>带有侧边栏布局</div>
      <b-layout>
        <b-header></b-header>
        <b-layout>
          <b-sider></b-sider>
          <b-content></b-content>
        </b-layout>
        <b-footer></b-footer>
      </b-layout>
    </div>
  </div>
</template>
```
