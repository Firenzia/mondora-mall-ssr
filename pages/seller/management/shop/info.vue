<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.shop_name" />
      </el-form-item>
      <el-form-item label="店铺描述">
        <el-input v-model="form.description" type="textarea" />
      </el-form-item>

      <el-form-item v-if="isExist" label="创建时间">
        <span>{{ createTime }}</span>
      </el-form-item>

      <el-form-item>
        <el-button v-if="!isExist" type="primary" @click="onSubmit">
          立即创建
        </el-button>
        <el-button v-else type="primary" @click="update">
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/service'
export default {
  data() {
    return {
      isExist: false,
      createTime: '',
      form: {
        shop_name: '',
        description: ''
      }
    }
  },
  created() {
    this.queryShopInfo()
  },
  methods: {
    async onSubmit() {
      const res = await request.post('/api/shop', this.form)
      if (res.code === 1) {
        this.$message({
          message: '店铺创建成功',
          type: 'success'
        })
      }
    },
    async queryShopInfo() {
      const res = await request.get('/api/shop/info', this.form)
      this.isExist = res.code !== 0
      if (res.code === 1) {
        this.form.shop_name = res.data.shop_name
        this.form.description = res.data.description
        this.createTime = res.data.create_time.split('T')[0]
      }
    },
    async update() {
      const res = await request.put('/api/shop/info', this.form)
      if (res.code === 1) {
        this.$message({
          message: '信息保存成功',
          type: 'success'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
