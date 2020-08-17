<template>
  <div class="offset">
    <b-row>
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
      <b-col span="5" offset="1">col-5 offset-1</b-col>
    </b-row>
    <b-row>
      <b-col span="6">col-6</b-col>
      <b-col span="6">col-6</b-col>
      <b-col span="4" offset="2">col-4 offset-2</b-col>
      <b-col span="5" offset="1">col-5 offset-1</b-col>
    </b-row>
  </div>
</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";

export default {
  name: "grid-demo-4",
  components: {"b-row": Row, "b-col": Col}

}
</script>

<style lang="scss" scoped>
.offset {
  .row {
    margin: 5px 0;
    .col {
      height: 40px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .col:nth-child(2n+1) {
      background: #4cbcf0;
    }

    .col:nth-child(2n) {
      background: #00a0e9;
    }
  }
}
</style>
