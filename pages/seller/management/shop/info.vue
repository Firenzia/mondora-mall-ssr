<template>
   <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.product_name" />
      </el-form-item>
      <el-form-item label="店铺描述">
        <el-input v-model="form.description" type="textarea" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          立即创建
        </el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/service'
export default {
    data(){
      return {
        form:{
          product_name:'',
          description:''
        }
      }
    },
    methods:{
      async onSubmit(){
        let res = await request.post('/api/shop', this.form)
        if (res.code === 1) {
          this.$message({
            message: '店铺创建成功',
            type: 'success'
          })
        }
      }
    }
}
</script>
<style lang="scss" scoped>

</style>
