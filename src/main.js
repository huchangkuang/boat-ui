import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";

Vue.component("b-button",Button)
Vue.component("b-icon",Icon)

new Vue({
  el: "#app",
  data(){
    return {
      loading1: false,
      loading2: false,
      loading3: false
    }
  }
})
