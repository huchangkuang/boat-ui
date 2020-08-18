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
import {Collapse, CollapseItem} from "../../../index";

export default {
  name: "collapse-demo",
  components:{"b-collapse":Collapse,"b-collapse-item":CollapseItem},
  data(){
    return{
      selectedArray: ["1"]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
