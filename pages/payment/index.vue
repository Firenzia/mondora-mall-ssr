<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="选择地址" />
      <el-step title="确认订单" />
      <el-step title="完成支付" />
    </el-steps>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>
