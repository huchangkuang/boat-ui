import Toast from "./Toast";

let currentToast
function createToast({Vue,propsData,message,onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}
export default {
  install(Vue,option){
    Vue.prototype.$toast = function (message,toastOption){
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({Vue,
        propsData:toastOption,
        message,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}
