<template>
    <div class="b-button-group">
        <slot/>
    </div>
</template>

<script>
  export default{
    name: "ButtonGroup",
    mounted() {
      for (let node of this.$el.children){
        const name = node.nodeName.toLowerCase()
        if (name !== "button"){
          console.warn(`b-button-group的子元素必须是b-button,但你传的是${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "styles/helper";
    .b-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .b-button {
            border-radius: 0;
        }
        & :not(:first-child) {
            margin-left: -1px;
        }
        & :first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        & :last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        :hover {
            position: relative;
            z-index: 1;
        }
    }
</style>
