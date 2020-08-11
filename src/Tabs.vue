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
    this.eventBus.$emit("update:selected",this.selected)
  }
}
</script>

<style lang="scss" scoped>
.tabs {

}
</style>
