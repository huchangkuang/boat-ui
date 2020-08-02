<template>
    <div class="header">
      <slot/>
    </div>
</template>

<script lang="ts">
export default{
  name: "Header"
}
</script>

<style lang="scss" scoped>
.header {
  height: 10%
}
</style>
