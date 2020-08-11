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
      return {active: this.active}
    }
  },
  props: {
    name: {
      type: String | Number,
      require: true
    }
  },
  methods: {
    selected() {
      this.eventBus.$emit("update:selected", this.name)
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
.tabs-item {
  margin: 0 1em;
  padding: 0.5em;
  &.active {
    background: red;
  }
}
</style>
