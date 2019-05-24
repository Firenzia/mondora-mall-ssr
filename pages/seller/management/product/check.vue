<template>
  <div>
    <p>宝贝列表</p>
    <!-- {{ productList }} -->
    <div v-if="productList.length>0">
      <div class="item-wrapper">
        <div style="width:200px;">
          产品图片
        </div>
        <div>产品名称</div>
        <div>产品描述</div>
        <div>成交数量</div>
        <div>用户收藏</div>
        <div>退货数量</div>
        <div>库存</div>
      </div>
      <div v-for="(item, key) in productList" class="item-wrapper">
        <div class="img-wrapper">
          <img :src="item.img_url[0]" alt="">
        </div>
        <div>{{ item.product_name }}</div>
        <div>{{ item.description }}</div>
        <div>{{ item.deal_count }}</div>
        <div>{{ item.likes }}</div>
        <div>{{ item.return_count }}</div>
        <div>{{ item.stock }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/service'
export default {
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.queryProducts()
  },
  methods: {
    async queryProducts() {
      const res = await request.get('/api/product/lists')
      console.log(res)
      this.productList = res.data.productList
    }
  }
}
</script>
<style lang="scss" scoped>
.item-wrapper{
  display: flex;
  div{
    flex-grow:1;
  }
  .img-wrapper{
    width:160px;
    height: 120px;
    img{
      width: 30%;
    }
  }
}
</style>
