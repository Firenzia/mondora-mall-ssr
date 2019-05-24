<template>
  <div>
    <!-- {{ productList }} -->
    <div v-if="productList.length>0">
      <div class="item-wrapper table-head">
        <div>序号</div>
        <div> 产品图片 </div>
        <div>产品名称</div>
        <div>成交数量</div>
        <div>用户收藏</div>
        <div>退货数量</div>
        <div>库存</div>
        <div>状态</div>
        <div>创建时间</div>
      </div>
      <div v-for="(item, key) in productList" :key="key" class="item-wrapper">
        <div>{{key+1}}</div>
        <div class="img-wrapper">
          <a :href="getProductLink(item)" target="_blank" ><img :src="item.img_url[0]" alt=""></a>
        </div>
        <div>{{ item.product_name }}</div>
        <!-- <div>{{ item.description }}</div> -->
        <div>{{ item.deal_count }}</div>
        <div>{{ item.likes }}</div>
        <div>{{ item.return_count }}</div>
        <div>{{ item.stock }}</div>
        <div :style="getStyle(item.status)">{{item.status | status}}</div>
        <div>{{item.create_time.split('T')[0]}}</div>
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
    getStyle(status){
      const map = {
        1: '#000',
        2: 'lightblue',
        3: 'red'
      }
      return {color:map[status]}
    },
    async queryProducts() {
      const res = await request.get('/api/product/lists')
      this.productList = res.data.productList
    },
    getProductLink(item){
      console.log()

      return `http://${window.location.host}/product?id=${item._id}`
    }
  }
}
</script>
<style lang="scss" scoped>
.item-wrapper{
  display: flex;
  height: 80px;
  border-bottom:1px solid #ccc;
  font-size:14px;
  div:first-child{
    width:30px;
  }
  div{
    flex-grow:1;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width:calc(1/8*100%)
  }
  .img-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  
    img{
      width:80px;
      height: auto;
    }
  }
  &:first-child{
    padding-bottom:10px;
    height: 40px;
    font-weight: bold;
  }
}
</style>
