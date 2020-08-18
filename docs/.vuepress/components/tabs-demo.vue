<template>
  <div class="wrapper">
    默认标签
    <b-tabs :selected="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="sport">体育</b-tabs-item>
        <b-tabs-item name="game">游戏</b-tabs-item>
        <b-tabs-item name="book">书籍</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="sport">内容：体育</b-tabs-pane>
        <b-tabs-pane name="game">内容：游戏</b-tabs-pane>
        <b-tabs-pane name="book">内容：书籍</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
    禁用标签
    <b-tabs :selected="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="sport">体育</b-tabs-item>
        <b-tabs-item name="game">游戏</b-tabs-item>
        <b-tabs-item name="book" disable>书籍</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="sport">内容：体育</b-tabs-pane>
        <b-tabs-pane name="game">内容：游戏</b-tabs-pane>
        <b-tabs-pane name="book">内容：书籍</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
    附加按钮
    <b-tabs :selected="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="sport">体育</b-tabs-item>
        <b-tabs-item name="game">游戏</b-tabs-item>
        <b-tabs-item name="book">书籍</b-tabs-item>
        <template slot="actions">
          <b-button>设置</b-button>
        </template>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="sport">内容：体育</b-tabs-pane>
        <b-tabs-pane name="game">内容：游戏</b-tabs-pane>
        <b-tabs-pane name="book">内容：书籍</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
  </div>
</template>

<script>

import {Button, Tabs, TabsBody, TabsHead, TabsItem, TabsPane} from "../../../index";

export default {
  name: "tabs-demo",
  components: {
    "b-tabs": Tabs, "b-tabs-head": TabsHead, "b-tabs-body": TabsBody,
    "b-tabs-item": TabsItem, "b-tabs-pane": TabsPane, "b-button": Button
  },
  data() {
    return {
      selectedTab: "sport"
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .tabs {
    margin: 5px 0;
    border: 1px solid #ebedf0;
    border-radius: 4px;
  }
}
</style>
