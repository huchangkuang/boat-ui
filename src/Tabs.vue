<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue"
export default {
  name: "Tabs",
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  props: {
    selected: {
      type: String,
      require: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.$children.forEach((vm)=>{
      if (vm.$options._componentTag === "b-tabs-head"){
        vm.$children.forEach((item)=>{
          if (item.$options._componentTag==="b-tabs-item" && item.name===this.selected){
            this.eventBus.$emit("update:selected",this.selected,item)
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>
