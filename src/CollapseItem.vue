<template>
    <div class="collapse-item" @click="xxx">
      <div class="title">{{title}}</div>
      <div class="content" v-if="open">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default{
    name:"CollapseItem",
  data(){
    return {
      open: false
    }
  },
  props: {
      title: {
        type: String,
        require: true
      }
  },
  methods: {
      xxx(){
        this.open = !this.open
      }
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
