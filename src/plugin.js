import Toast from "./Toast";

export default {
  install(Vue,option){
    Vue.prototype.$toast = function (message,toastOption){
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: toastOption
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
