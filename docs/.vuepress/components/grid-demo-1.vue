<template>
  <div class="normal">
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
</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";

export default {
  name: "grid-demo-1",
  components: {"b-row": Row, "b-col": Col}
}
</script>

<style lang="scss" scoped>
.row {
  margin: 5px 0;
}

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
</style>
