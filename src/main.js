import Vue from "vue"
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";


Vue.component("b-button",Button)
Vue.component("Icon",Icon)
Vue.component("b-button-group",ButtonGroup)
Vue.component("b-input",Input)
Vue.component("b-row",Row)
Vue.component("b-col",Col)

new Vue({
  el: "#app",
  data(){
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      value1:"",
      value2:""
    }
  },
  methods:{
    change(event){
      this.value2 = event
    }
  }
})

