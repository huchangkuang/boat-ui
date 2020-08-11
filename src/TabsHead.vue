<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected",(selected,vm)=>{
      let {width,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #e4e7ed;
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .line {
    border: 1px solid #409eff;
    position: absolute;
    bottom: 0;
    transition: all 0.3s;
  }
}
</style>
