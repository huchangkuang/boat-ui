<template>
  <div class="tabs-item" @click="selected" :class="activeClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    }
  },
  computed: {
    activeClass() {
      return {active: this.active,disable: this.disable}
    }
  },
  props: {
    name: {
      type: String | Number,
      require: true
    },
    disable: {
      type: Boolean
    }
  },
  methods: {
    selected() {
      if (!this.disable){
        this.eventBus.$emit("update:selected", this.name,this)
      }
    },
  },
  created() {
    this.eventBus.$on("update:selected",(name)=>{
      this.active = this.name === name
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-item {
  margin: 0 1em;
  padding: 0.5em;
  &.active {
    color: #6baaff;
  }
  &.disable {
    color: #999999;
    cursor: not-allowed;
  }
}
</style>
