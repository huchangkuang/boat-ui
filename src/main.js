import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";

Vue.component("b-button",Button)
Vue.component("b-icon",Icon)
Vue.component("b-button-group",ButtonGroup)

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

