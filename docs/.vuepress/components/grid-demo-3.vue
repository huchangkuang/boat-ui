<template>
  <div class="gutter">
    <b-row gutter="20">
      <b-col span="6">
        <div class="content">col-6</div>
      </b-col>
      <b-col span="6">
        <div class="content">col-6</div>
      </b-col>
      <b-col span="6">
        <div class="content">col-6</div>
      </b-col>
      <b-col span="6">
        <div class="content">col-6</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";

export default {
  name: "grid-demo-3",
  components: {"b-row": Row, "b-col": Col}
}
</script>

<style lang="scss" scoped>
.gutter {
  .row {
    flex-wrap: nowrap;
    .col {
      .content{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
      }
    }
    .col:nth-child(2n+1){
      .content {
        background: #4cbcf0;
      }
    }
    .col:nth-child(2n){
      .content {
        background: #00a0e9;
      }
    }
  }
}
</style>
