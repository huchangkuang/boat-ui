<template>
  <div class="collapse-item" @click="toggle">
    <div class="title">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      this.open = names.indexOf(this.name) >= 0;
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.collapse-item {
  .title {
    min-height: 32px;
    border: 1px solid gray;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
  }

}
</style>
