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
import Button from "../../../src/Button";

export default {
  name: "button-demo",
  components: {"b-button":Button},
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

<style lang="scss" scoped>

</style>
