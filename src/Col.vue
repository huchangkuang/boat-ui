<template>
    <div class="col" :class="`col-${span}`"></div>
</template>

<script>
  export default{
    name: "Col",
    props: {
      span:{
        type:[String,Number]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .col {
        width: 50%;
        height: 100px;
        border: 1px solid #333333;
        $class-prefix: col-;
        @for $n from 1 through 24{
           &.#{$class-prefix}#{$n} {
               width: $n/24*100%;
           }
        }
    }
</style>
