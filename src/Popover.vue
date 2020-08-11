<template>
    <div class="popover" @click="onClick">
      <div class="content-wrapper" ref="contentWrapper" v-if="visible">
        <slot name="content"></slot>
      </div>
      <span ref="triggerWrapper">
        <slot></slot>
      </span>
    </div>
</template>

<script>
export default{
    name:"popover",
  data(){
      return {
        visible:false
      }
  },
  methods: {
    onClick(e){
      if (this.$refs.triggerWrapper.contains(e.target)){
        this.visible = !this.visible
        if (this.visible===true){
          this.$nextTick(()=>{
            document.body.appendChild(this.$refs.contentWrapper)
            let {top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left+window.screenX+"px"
            this.$refs.contentWrapper.style.top = top+window.screenY+"px"
            let eventHandle = (e)=>{
              if (!this.$refs.contentWrapper.contains(e.target)){
                this.visible = false
                document.removeEventListener("click",eventHandle)
              }
            }
            document.addEventListener("click",eventHandle)
          })
        }
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.popover {
  position: relative;
  padding: 0.5em 1em;
}
.content-wrapper {
  position: absolute;
}
</style>
