<template>
  <div class="layout">
    <div class="normal">
      <div>默认布局</div>
      <b-layout>
        <b-header class="n-header"></b-header>
        <b-content class="n-content"></b-content>
        <b-footer class="n-footer"></b-footer>
      </b-layout>
    </div>
    <div class="hasSider">
      <div>带有侧边栏布局</div>
      <b-layout>
        <b-header class="h-header"></b-header>
        <b-layout>
          <b-sider class="h-sider"></b-sider>
          <b-content class="h-content"></b-content>
        </b-layout>
        <b-footer class="h-footer"></b-footer>
      </b-layout>
    </div>
  </div>
</template>

<script>
import Layout from "../../../src/Layout";
import Header from "../../../src/Header";
import Footer from "../../../src/Footer";
import Content from "../../../src/Content";
import Sider from "../../../src/Sider";

export default {
  name: "layout-demo",
  components: {
    "b-layout": Layout,
    "b-header": Header,
    "b-footer": Footer,
    "b-content": Content,
    "b-sider": Sider,
  }
}
</script>

<style lang="scss" scoped>
.layout {
  .normal {
    .n-header {
      background: #4a90e2;
      width: 100%;
      height: 50px;
    }

    .n-content {
      background: #3a6fae;
      width: 100%;
      height: 100px;
    }

    .n-footer {
      background: #4a90e2;
      width: 100%;
      height: 50px;
    }
  }

  .hasSider {
    .h-header {
      background: #4a90e2;
      width: 100%;
      height: 50px;
    }

    .h-sider {
      background: #3a6fae;
      width: 20%;
      height: 100px;
    }

    .h-content {
      background: #0c56ac;
      width: 80%;
      height: 100px;
    }

    .h-footer {
      background: #4a90e2;
      width: 100%;
      height: 50px;
    }
  }
}
</style>
