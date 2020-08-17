<template>
  <div class="flex">
    靠左
    <b-row align="left">
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
    </b-row>
    居中
    <b-row align="center">
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
    </b-row>
    靠右
    <b-row align="right">
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
    </b-row>
  </div>
</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";

export default {
  name: "grid-demo-2",
  components: {"b-row": Row, "b-col": Col}

}
</script>

<style lang="scss" scoped>
.flex {
  .row {
    background: #eeeeee;
    color: #ffffff;
    > .col {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .col:nth-child(1) {
      background: #4cbcf0;
    }
    .col:nth-child(2) {
      background: #00a0e9;
    }
    .col:nth-child(3) {
      background: #0088c5;
    }
  }
}
</style>
