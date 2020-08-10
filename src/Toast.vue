<template>
  <div class="toastWrapper">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <span class="line" ref="line"></span>
      <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
    </div>
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
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "",
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyle()
  },
  methods: {
    execAutoClose(){
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    updateStyle(){
      this.$nextTick(()=>{
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose(){
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === "function"){
        this.closeButton.callback(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toastWrapper {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .toast {
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    color: white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    min-height: 32px;
    line-height: 1.8;
    padding: 0 1em;
    border-radius: 4px;
    .message {
      padding: 0.5em 0;
    }
    .line  {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 0.5em;
    }
    .close {
      padding-left: .5em;
      white-space: nowrap;
    }
  }
}
</style>
