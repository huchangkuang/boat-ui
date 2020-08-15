<template>
    <div>
      <b-button-group>
        <b-button icon="left">上一页</b-button>
        <b-button>按钮</b-button>
        <b-button icon="right" icon-position="right">下一页</b-button>
      </b-button-group>
    </div>
</template>

<script>
import Button from "../../../src/Button";
import ButtonGroup from "../../../src/ButtonGroup";
export default{
    name:"button-group-demo",
    components:{"b-button-group":ButtonGroup,"b-button":Button}
}
</script>

<style lang="scss" scoped>

</style>
