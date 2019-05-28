<template>
  <div class="product-wrapper">
    <div class="main-info">
      <div class="left">
        <div class="img">
          <img :src="imgSrc" alt="">
        </div>
      </div>
      <div class="right">
        <div>{{product.product_name}}</div>
        <div>价格 {{ product.price }}</div>
        <div>数量 <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></div>
        <div>
          <el-button @click="dialogVisible = true">
          加入心愿单
        </el-button>
          <el-button @click="dialogVisible = true">
          加入购物车
        </el-button>
        </div>
      </div>
    </div>

    <div class="extra-info">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-date" /> 商品详情
          </span>
          商品详情
        </el-tab-pane>
        <el-tab-pane label="评论">
          <el-button>增加评论</el-button>
          <p>Amy: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo quibusdam labore vero deserunt exercitationem veritatis neque, itaque ullam reprehenderit reiciendis, vel optio magni deleniti eaque recusandae voluptas dolores amet?</p>
          <p>Amy: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nemo quibusdam labore vero deserunt exercitationem veritatis neque, itaque ullam reprehenderit reiciendis, vel optio magni deleniti eaque recusandae voluptas dolores amet?</p>
        </el-tab-pane>
      </el-tabs>
    </div>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>加入购物车完成~</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">
          继续购物
        </el-button>
        <el-button type="primary" @click="goToCart">
          查看购物车
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import request from '@/service'
export default {
  data() {
    return {
      dialogVisible: false,
      num:1,
      product: {},
      imgSrc: '',
    }
  },
  async asyncData({ route }) {
    const res = await request.get(`/api/product?product_id=${route.query.id}`)
    if (res.code === 1) {
      return {
        product: res.data,
        imgSrc: res.data.img_url[0]
      }
    }
  },
  mounted() {
  },
  methods: {
    goToCart() {
      this.dialogVisible = false
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
.product-wrapper{
  .main-info{
    display: flex;
    margin-bottom:50px;
    .left{
      width:460px;
      padding: 10px;
      flex-shrink:0;
       .img{
          width:400px;
          height: 400px;
          img{
            height: 100%;
          }
        }
    }
    .right{
      flex-grow: 1;
      border:1px solid #ccc;
    }
  }
}
</style>
