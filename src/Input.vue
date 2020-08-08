<template>
    <div class="input-wrapper" :class="{'error':error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readOnly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"/>
        <template v-if="error">
            <Icon icon="error" class="error"></Icon>
            <span class="error-info">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from "./Icon";
  export default{
    name: "Input",
    components: {Icon},
    props:{
      value:{
        type:String
      },
      disabled:{
        type: Boolean,
        default: false
      },
      readOnly:{
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "styles/helper";
    .input-wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        & :not(:last-child){
            margin-right: .5em;
        }
        &.error {
            .error {
                fill: $red;
            }
            .error-info {
                color: $red;
            }
        }
        > input {
            border-radius: 4px;
            border: 1px solid $border-color;
            height: 32px;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-light;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 0 2px $box-shadow-color;
            }
            &[disabled],&[readonly]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
    }
</style>
