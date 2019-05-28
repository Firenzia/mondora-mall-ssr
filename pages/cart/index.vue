<template>
  <div>
    <p>购物车</p>
    <div>{{list}}</div>
    <!-- 此处有组件 -->
    <div v-for="(item, key) in arr" :key="key" style="margin-bottom:14px">
      <p>店铺： 鱼之家</p>
      <div>
        <img src="" alt="">
        <span>口味：手撕面包-1kg</span>
        <span>￥30.2</span>
        <span>- 4 +</span>
        <el-button>删除</el-button>
      </div>
    </div>
    <el-checkbox v-model="selectAll" label="全选" />
    <el-button @click="$router.push('/payment')">
      结算
    </el-button>
  </div>
</template>
<script>

</script>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import request from '@/service'


export default class Cart extends Vue {
  private selectAll : boolean = false
  private arr : Array<number> = [1,2,3]
  private name: String = 'Cart'
  // private list : Array<any>
  private async mounted() {
    console.log('mounted');
  }

  private async getData() {
    const res = await request.get('/api/cart/info')
    console.log(res)
    // this.list = res
  }

  private goTo(id) {
    this.$router.push({ path: 'product', query: { id } })
  }
  private created(){
    console.log('created');
    this.getData()
  }
}
</script>

<style lang="scss" scoped>

</style>
