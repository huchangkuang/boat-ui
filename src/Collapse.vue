<template>
    <div class="collapse">
      <slot></slot>
    </div>
</template>

<script>
export default{
    name:"Collapse"
}
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid gray;
  border-radius: 4px;
  & :first-child :first-child{
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  & :last-child :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-bottom: -1px;
  }
}
</style>
