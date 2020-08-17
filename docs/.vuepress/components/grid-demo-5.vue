<template>
  <div class="reactive">
    <b-row>
      <b-col span="2" :ipad="{span:'8'}" :narrow-pc="{span:'12'}" :pc="{span:'16'}" :wide-pc="{span:'22'}"></b-col>
      <b-col span="22" :ipad="{span:'16'}" :narrow-pc="{span:'12'}" :pc="{span:'8'}" :wide-pc="{span:'2'}"></b-col>
    </b-row>
  </div>
</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";

export default {
  name: "grid-demo-5",
  components: {"b-row": Row, "b-col": Col}

}
</script>

<style lang="scss" scoped>
.reactive {
  .row {
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
