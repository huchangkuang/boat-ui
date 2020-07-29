<template>
    <svg class="b-icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script>
  import "./svg"

  export default {
    name: "Icon",
    props: ["icon"]
  }
</script>

<style lang="scss" scoped>
    .b-icon {
        width: 1em;
        height: 1em;
    }
</style>
