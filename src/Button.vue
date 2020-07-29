<template>
    <button>
        <slot/>
    </button>
</template>

<script>
  export default{
    name: "Button"
  }
</script>

<style lang="scss" scoped>
    @import "styles/helper";
button{
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-bg;
    }
    &:focus {
        outline: none;
    }
}
</style>
