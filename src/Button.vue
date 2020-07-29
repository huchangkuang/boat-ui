<template>
    <button class="b-button" :class="{[`icon-${iconPosition}`]:true}">
        <b-icon :icon="icon"></b-icon>
        <div class="button-content">
            <slot/>
        </div>
    </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      iconPosition: {
        type: String,
        default: "left",
        validator(value){
          return value=== "left" || value==="right"
        }
      },
      icon:{}
    }
  }
</script>

<style lang="scss" scoped>
    @import "styles/helper";

    button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        > .b-icon {
            order: 1;
        }

        > .button-content {order: 2;
            margin-left: .5em;
        }

        &.icon-right {
            .b-icon {
                order: 2;
                margin-left: .5em;
            }

            .button-content {
                order: 1;
            }
        }

        &:hover {border-color: $border-color-hover;}

        &:active {background-color: $button-active-bg;}

        &:focus {outline: none;}
    }
</style>
