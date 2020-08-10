<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay:{
      type: Number,
      default: 3
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  line-height: 1.8;
  padding: 0.5em 1em;
  border-radius: 4px;
}
</style>
