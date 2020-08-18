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
import Vue from "vue"
import {Button, plugin, Toast} from "../../../index";
Vue.use(plugin)
export default {
  name: "toast-demo",
  components: {"b-toast": Toast,"b-button":Button},
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

<style lang="scss" scoped>

</style>
