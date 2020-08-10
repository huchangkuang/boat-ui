import Vue from "vue"
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout";
import Content from "./Content";
import Sider from "./Sider";
import Footer from "./Footer";
import Header from "./Header";
import Toast from "./Toast";
import plugin from "./plugin";


Vue.component("b-button",Button)
Vue.component("b-button-group",ButtonGroup)
Vue.component("b-input",Input)
Vue.component("b-row",Row)
Vue.component("b-col",Col)
Vue.component("b-layout",Layout)
Vue.component("b-content",Content)
Vue.component("b-sider",Sider)
Vue.component("b-footer",Footer)
Vue.component("b-header",Header)
Vue.component("b-toast",Toast)
Vue.use(plugin)

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
    },
    toast(){
      this.$toast("我是message")
    }
  }
})

