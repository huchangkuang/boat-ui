<template>
    <button class="b-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <Icon class="loading" v-if="loading" icon="loading"></Icon>
        <Icon v-if="icon && !loading" :icon="icon"></Icon>
        <div class="button-content">
            <slot/>
        </div>
    </button>
</template>

<script>
import Icon from "./Icon";
  export default {
    name: "Button",
    components: {Icon},
    props: {
      iconPosition: {
        type: String,
        default: "left",
        validator(value) {
          return value === "left" || value === "right"
        }
      },
      loading: {
        type: Boolean,
        default: false
      },
      icon: {}
    }
  }
</script>

<style lang="scss" scoped>
    @import "styles/helper";

    @keyframes spin {
        0%{ transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .b-button {
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
        .button-content {
            min-height: 1.43em;
        }
        .loading {
            animation: spin 1s infinite linear;
        }

        > .b-icon {order: 1;margin-right: 0.5em}

        > .button-content {order: 2;}

        &.icon-right {
            .b-icon {
                order: 2;
                margin-left: .5em;margin-right: 0;
            }

            .button-content {order: 1;}
        }

        &:hover {border-color: $border-color-hover;}

        &:active {background-color: $button-active-bg;}

        &:focus {outline: none;}
    }
</style>
