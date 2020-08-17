<template>
  <div>
    <div class="click">
      <div>点击弹出</div>
      <b-popover position="top">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>上方弹出</b-button>
      </b-popover>
      <b-popover position="bottom">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>下方弹出</b-button>
      </b-popover>
      <b-popover position="left">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>左边弹出</b-button>
      </b-popover>
      <b-popover position="right">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>右边弹出</b-button>
      </b-popover>
    </div>
    <div class="hover">
      <div>鼠标悬浮</div>
      <b-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>上方弹出</b-button>
      </b-popover>
      <b-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>下方弹出</b-button>
      </b-popover>
      <b-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>左边弹出</b-button>
      </b-popover>
      <b-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是一段内容</div>
        </template>
        <b-button>右边弹出</b-button>
      </b-popover>
    </div>
  </div>
</template>

<script>
import Popover from "../../../src/Popover";
import {Button} from "../../../index";

export default {
  name: "popover-demo",
  components: {"b-popover": Popover,"b-button":Button}
}
</script>

<style lang="scss" scoped>

</style>
