<template>
  <div class="toastWrapper" :class="positionClass">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="enableHtml"></slot>
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
          text: "关闭",
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value){
        return ["top","middle","bottom"].indexOf(value) >=0
      }
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyle()
  },
  computed: {
    positionClass(){
      return {[`position-${this.position}`]:true}
    }
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
      this.$emit("close")
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
@keyframes fade-in {
  0%{opacity: 0;}
  100%{opacity: 1;}
}
@keyframes slide-up {
  0%{opacity: 0;transform: translateY(-100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
@keyframes slide-down {
  0%{opacity: 0;transform: translateY(100%)}
  100%{opacity: 1;transform: translateY(0%)}
}
.toastWrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  &.position-top {
  top: 0;
    .toast {
      animation: slide-up .5s;
    }
}
  &.position-middle {
    top: 50%;
    transform: translate(-50%,-50%);
    .toast {
      animation: fade-in .5s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-down .5s;
    }
  }

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
