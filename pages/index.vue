<template>
  <section class="container">
    <div v-for="(item, index) in list" :key="index">
      {{ item }}
    </div>
    <button @click="getData">
      test
    </button>

    <div class="product-wrapper">
      <div class="category">
        <p>百货</p>
        <p>食品</p>
        <p>配饰</p>
      </div>
      <div class="product">
        <div v-for="(item, index) in [1,2,3,4,5]" :key="index" class="product-item" @click="goTo">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558182407645&di=c0141379751dfa6adcb1682850210a79&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F14%2F28%2F59ae2ed4cb675_610.jpg" alt="">
          <div class="detail">
            <div><span>30.5</span><span>190人付款</span></div>
            <div>粉色草莓慕斯蛋糕</div>
            <div><span>鱼之家</span><span>京都</span></div>
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
      list: [],
      ip: 0
    }
  },
  async asyncData() {
    const res = await request.get('/api/student/list', { })
    console.log('make req in async data', res)
    return {
      list: res.result
    }
    // const res = await $axios.get('/student/list')
    // console.log(res)
    // return {
    //   list: res.data.result
    // }
  },
  methods: {
    async getData() {
      const res = await request.get('/api/student/list')
      console.log(res.result)
    },
    goTo() {
      this.$router.push('/product?id=100')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wrapper{
  display: flex;
  .category{
    width:200px;
  }
  .product{
    flex-grow:1;
    display: flex;
    flex-wrap: wrap;
    .product-item{
      width:200px;
      height: auto;
      margin: 0 30px 60px 0;
      .detail > div{
        display: flex;
        justify-content: space-between;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>
