<template>
    <div class="col" :class="colClass"
         :style="colStyle">
            <slot></slot>
    </div>
</template>

<script>
    const validator = (value)=>{
      let keys = Object.keys(value)
      keys.forEach(key=>{
        if (!["span","offset"].includes(key)){
          return false
        }
      })
      return true
    }
  export default {
    name: "Col",
    props: {
      span: {
        type: [String, Number]
      },
      offset: {
        type: [String, Number]
      },
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator}
    },
    data(){
      return {
        gutter:0
      }
    },
    computed:{
      colClass(){
        let {span,offset,ipad,narrowPc,pc,widePc} = this
        return [span && `col-${span}`,offset && `offset-${offset}`,
          ...(ipad ? [`col-ipad-${ipad.span}`] : []),
          ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
          ...(pc ? [`col-pc-${pc.span}`] : []),
          ...(widePc ? [`col-widePc-${widePc.span}`] : [])
        ]
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
        @media (min-width: 577px) {
            @for $n from 1 through 24 {
                &.col-ipad-#{$n} {
                    width: $n/24*100%;
                }
            }
            @for $n from 1 through 24 {
                &.offset-ipad-#{$n} {
                    margin-left: $n/24*100%;
                }
            }
        }
        @media (min-width: 769px){
            @for $n from 1 through 24 {
                &.col-narrowPc-#{$n} {
                    width: $n/24*100%;
                }
            }
            @for $n from 1 through 24 {
                &.offset-narrowPc-#{$n} {
                    margin-left: $n/24*100%;
                }
            }
        }
        @media (min-width: 993px){
            @for $n from 1 through 24 {
                &.col-pc-#{$n} {
                    width: $n/24*100%;
                }
            }
            @for $n from 1 through 24 {
                &.offset-pc-#{$n} {
                    margin-left: $n/24*100%;
                }
            }
        }
        @media (min-width: 1201px) {
            @for $n from 1 through 24 {
                &.col-widePc-#{$n} {
                    width: $n/24*100%;
                }
            }
            @for $n from 1 through 24 {
                &.offset-widePc-#{$n} {
                    margin-left: $n/24*100%;
                }
            }
        }
    }
</style>
