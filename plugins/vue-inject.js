import Vue from 'vue'
import VueRouter from "vue-router";

Vue.prototype.$go = (path) => {
  console.log('go is trigger',this)
  VueRouter.push(path)
}
Vue.filter('status',function(val){
  switch (val){
    case 1:
      return '未上架'
    case 2:
      return '已上架'
    case 3:
      return '下架'
     default:
       return '未定义字段'
  }
})