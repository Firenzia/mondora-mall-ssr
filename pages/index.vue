<template>
  <section class="container">
    <button @click="getData">
      test
    </button>
    <p>store </p>

    <div class="product-wrapper">
      <div class="category">
        <p>百货</p>
        <p>食品</p>
        <p>配饰</p>
      </div>
      <div class="product">
        <div v-for="(item, index) in list" :key="index" class="product-item" @click="goTo(item._id)">
          <div class="product-img">
            <img :src="item.img_url[0]" alt="">
          </div>
          <div class="detail">
            <div>{{ item._id }}</div>
            <div><span>{{ item.price }}￥</span><span>190人付款</span></div>
            <div>{{ item.product_name }}</div>
            <div>{{ item.description }}</div>
            <div><span>{{ item.shop.shop_name }}</span><span>京都</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import request from '@/service'

@Component({
  async asyncData() {
      const res = await request.get('/api/product/list')
      return {
        list: res.data.productList
      }
    }
})
export default class Hello extends Vue {
  private list : Array<any> = []
  private async mounted() {
  }

  private async getData() {
    const res = await request.get('/api/product/list')
  }

  private goTo(id) {
    this.$router.push({ path: 'product', query: { id } })
  }
}
</script>


<style lang="scss" scoped>
.product-wrapper{
  display: flex;
  .category{
    width:400px;
  }
  .product{
    flex-grow:1;
    display: flex;
    flex-wrap: wrap;
    .product-item{
      width:200px;
      height: auto;
      margin: 0 30px 60px 0;
      border: 1px solid #ccc;
      .detail > div{
        display: flex;
        justify-content: space-between;
      }
      .product-img{
        width:200px;
        height:200px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
          img{
          width: 100%;
        }
      }

    }
  }
}
</style>
