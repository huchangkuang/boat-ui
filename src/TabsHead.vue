<template>
    <div class="tabs-head">
      <slot></slot>
      <div class="actions-wrapper">
        <slot name="actions"></slot>
      </div>
    </div>
</template>

<script>
export default{
name: "TabsHead",
  inject: ["eventBus"],

}
</script>

<style lang="scss" scoped>
.tabs-head {
  display:flex;
  align-items: center;
  > .actions-wrapper {
    margin-left: auto;
  }
}

</style>
