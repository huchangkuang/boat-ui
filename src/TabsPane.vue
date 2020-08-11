<template>
  <div class="tabs-pane" :class="activeClass" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsPane",
  inject: ["eventBus"],
  data(){
    return {
      active: false
    }
  },
  computed: {
    activeClass(){
      return {active:this.active}
    }
  },
  props: {
    name: {
      type: String | Number,
      require: true
    }
  },
  created() {
    this.eventBus.$on("update:selected",(name)=>{
      this.active = this.name === name
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  &.active {
    background: red;
  }
}
</style>
