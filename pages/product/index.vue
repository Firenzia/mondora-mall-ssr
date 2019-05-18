<template>
  <div class="product-wrapper">
    <div class="main-info">
      <div class="left">
        <div class="img">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558182407645&di=c0141379751dfa6adcb1682850210a79&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F14%2F28%2F59ae2ed4cb675_610.jpg" alt="">
        </div>
      </div>
      <div class="right">
        价格
        <el-button @click="dialogVisible = true">
          加入购物车
        </el-button>
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
export default {
  data() {
    return {
      dialogVisible: false
    }
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
       .img{
          width:400px;
          height: 400px;
          img{
            height: 100%;
          }
        }
    }
    .right{
      flex-grow: 1
    }
  }
}
</style>
