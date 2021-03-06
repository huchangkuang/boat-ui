---
title: toast-弹窗
---

# toast-弹窗
触发事件后得到一个弹窗反馈，可自定义弹窗弹出位置和显示时间。
## 组件注册
```vue
<script>
    import {Toast} from "boat-ui"
    import Vue from "vue"
    Vue.use(plugin)
    export default {
      components: {"b-toast":Toast}
    }
</script>
```
## 基本使用
使用方式：
<ClientOnly>
  <toast-demo></toast-demo>
</ClientOnly>
代码：
```vue
<template>
  <div>
    <div class="position">
      <div>弹出方向</div>
      <b-button @click="top">上方提示</b-button>
      <b-button @click="middle">中间提示</b-button>
      <b-button @click="bottom">下方提示</b-button>
    </div>
    <div class="custom">
      <div>自定义弹窗</div>
      <b-button @click="always">一直显示</b-button>
      <b-button @click="oneSecond">1秒自动关闭</b-button>
      <b-button @click="closeText">知道了</b-button>
      <b-button @click="enableHTML">支持HTML语法</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    top(){
      this.$toast("上方提示")
    },
    middle(){
      this.$toast("中间提示",{position: "middle"})
    },
    bottom(){
      this.$toast("下方提示",{position: "bottom"})
    },
    always(){
      this.$toast("一直显示",{position:"middle",autoClose: false})
    },
    oneSecond(){
      this.$toast("1秒自动关闭",{autoCloseDelay: 1})
    },
    closeText(){
      this.$toast("这是一段内容",{closeButton: {text:"知道了"}})
    },
    enableHTML(){
      this.$toast("<strong>这是一段加粗的文字</strong>",{enableHTML:true})
    }
  }
}
</script>
```
## API参数
|属性|说明|类型|默认值|可选值|
|:---:|:---:|:---:|:---:|:---:|
|autoClose|设置是否自动关闭|Boolean|true|false;true|
|autoCloseDelay|设置自动关闭时间，单位秒|Number|3|-|
|closeButton|添加提示弹窗内容,传入一个对象，包含文本和回调函数|Object|{text:"关闭",callback: undefined}|-|
|enableHtml|提示内容是否可以使用HTML语法|Boolean|false|false;true|
|position|设置弹窗位置|String|top|[top,middle,bottom]|
