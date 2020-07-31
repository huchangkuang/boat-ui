<template>
    <div class="col" :class="colClass"
         :style="colStyle">
            <slot></slot>
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
    },
    computed:{
      colClass(){
        let {span,offset} = this
        return [span && `col-${span}`,offset && `offset-${offset}`]
      },
      colStyle(){
        let {gutter} = this
        return {paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}
      }
    }
  }
</script>

<style lang="scss" scoped>
    .col {
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
