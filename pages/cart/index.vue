<template>
  <div>
    <p>购物车</p>

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
export default {
  data() {
    return {
      selectAll: false,
      arr: [1, 2, 3]

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
