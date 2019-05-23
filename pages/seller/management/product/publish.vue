<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="产品名称">
        <el-input v-model="form.product_name" />
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.category" placeholder="请选择产品类型">
          <el-option label="百货" value="1" />
          <el-option label="食物" value="2" />
          <el-option label="配饰" value="3" />
        </el-select>
      </el-form-item>
      <el-form-item label="产品描述">
        <el-input v-model="form.description" type="textarea" />
      </el-form-item>
      <el-form-item label="产品价格">
        <el-input v-model="form.price" type="number" />
      </el-form-item>

      <el-form-item label="产品库存">
        <el-input v-model="form.stock" type="number" />
      </el-form-item>

      <el-form-item label="产品图片">
        <el-upload
          class="upload-demo"
          :action="domain"
          :data="QiniuData"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-upload="beforeAvatarUpload"
          :file-list="fileList"
          :limit="4"
          list-type="picture"
        >
          <el-button size="small" type="primary">
            点击上传
          </el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
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
  data() {
    return {
      QiniuData: {
        key: '', // 图片名字处理
        token: '' // 七牛云token
      },
      domain: 'http://upload-z2.qiniu.com', // 七牛云的上传地址（华南区） or 'http://up-z2.qiniu.com'
      qiniuaddr: 'http://prxr00gxz.bkt.clouddn.com', // 外链地址
      fileList: [],
      // fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]

      form: {
        product_name: '',
        price: '',
        category: '',
        description: '',
        stock: '',
        img_url: []
      }
    }
  },
  mounted() {
    this.getToken()
  },
  methods: {
    async onSubmit() {
      const res = await request.post('/api/product', this.form)
      if (res.code === 1) {
        this.$message({
          message: '创建成功',
          type: 'success'
        })
      }
    },
    async getToken() {
      const res = await request('/api/resource/qiniutoken')
      this.QiniuData.token = res.data.uploadToken
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    uploadSuccess(response, file, fileList) {
      this.uploadPicUrl = `${this.qiniuaddr}/${response.key}`
      console.log(fileList, this.uploadPicUrl)
      this.form.img_url.push(`${this.qiniuaddr}/${response.key}`)
    },
    uploadError(err, file, fileList) {
      console.log('error', err)
    },
    beforeAvatarUpload(file) {
      const isPNG = file.type === 'image/png'
      const isJPEG = file.type === 'image/jpeg'
      const isJPG = file.type === 'image/jpg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPNG && !isJPEG && !isJPG) {
        this.$message.error('上传头像图片只能是 jpg、png、jpeg 格式!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
        return false
      }
      this.QiniuData.key = `upload_pic_${file.name}` // 上传文件名称
      console.log('data', this.QiniuData)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
