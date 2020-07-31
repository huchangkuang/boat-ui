<template>
    <div class="col" :class="[`col-${span}`,offset && `offset-${offset}`]"
         :style="{paddingLeft: -gutter/2+'px',paddingRight: -gutter/2+'px'}">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Col",
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      }
    },
    data(){
      return {
        gutter:0
      }
    }
  }
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 100px;
        /*border: 1px solid #333333;*/
        > div {
            border: 1px solid red;
            height: 100px;
        }
        @for $n from 1 through 24 {
            &.col-#{$n} {
                width: $n/24*100%;
            }
        }
        @for $n from 1 through 24 {
            &.offset-#{$n} {
                margin-left: $n/24*100%;
            }
        }
    }
</style>
