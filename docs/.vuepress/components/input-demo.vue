<template>
  <div>
    <b-input value="默认输入框"></b-input>
    <b-input placeholder="占位符"></b-input>
    <b-input value="禁用" disabled></b-input>
    <b-input value="只读" read-only></b-input>
    <b-input value="错误提示" error="请输入正确信息"></b-input>
    <div>
      <div>双向绑定</div>
      <b-input v-model="value1" placeholder="支持v-model"></b-input>
      <span>value1:{{ value1 }}</span>
    </div>
    <div>
      <div>change事件</div>
      <b-input :value="value2" @change="change" placeholder="支持change事件"></b-input>
      <span>value2:{{ value2 }}</span>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/Input";

export default {
  name: "input-demo",
  components: {"b-input": Input},
  data() {
    return {
      value1: "1",
      value2: "2"
    }
  },
  methods: {
    change(event) {
      this.value2 = event
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
