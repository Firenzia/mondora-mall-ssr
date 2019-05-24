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

<script>
import request from '@/service'

export default {

  data() {
    return {
      list: []
    }
  },

  async asyncData() {
    const res = await request.get('/api/product/list', { })
    return {
      list: res.data.productList
    }
  },
  mounted() {
    // this.check()
  },
  methods: {
    async getData() {
      const res = await request.get('/api/product/list')
      console.log(res.result)
    },
    goTo(id) {
      this.$router.push({ path: 'product', query: { id } })
    },
    async check() {
      // 开始服务端渲染没拿到cookie
      console.log('auth check1')
      const res = await request.get('/api/user/auth')
      this.$store.commit('setLogin', res.code)
    }
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
