import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";

Vue.component("b-button",Button)
Vue.component("Icon",Icon)
Vue.component("b-button-group",ButtonGroup)
Vue.component("b-input",Input)

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

