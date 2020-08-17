<template>
  <div class="layout-demo">
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
      <div>侧边栏靠右</div>
      <b-layout>
        <b-header class="h-header"></b-header>
        <b-layout>
          <b-content class="h-content"></b-content>
          <b-sider class="h-sider"></b-sider>
        </b-layout>
        <b-footer class="h-footer"></b-footer>
      </b-layout>
      <div>左右布局</div>
      <b-layout class="left">
        <b-sider class="h-sider"></b-sider>
        <b-layout>
          <b-header class="h-header"></b-header>
          <b-content class="h-content"></b-content>
          <b-footer class="h-footer"></b-footer>
        </b-layout>
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
.layout-demo {
  .header, .footer {
    background: #7dbcea;
    width: 100%;
    height: 50px;
  }

  .content {
    background: #108ee9;
    width: 100%;
    height: 100px;
  }

  .sider {
    background: #3ba0e9;
    width: 20%;
    height: 100px;
  }

  .normal {
    .n-content {
      width: 100%;
    }
  }
  .left {
    .sider{
      height: 200px;}
  }
}
</style>
