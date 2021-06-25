<template>
  <div id="detail">
      <detail-nav class="nav" @itemClick='itemClick'  ref="nav"></detail-nav>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
          <detail-swiper :swiper-img="swiperImg"></detail-swiper>
          <detail-base-info :goods="goods"></detail-base-info>
          <detail-shop-info :shop="shop"></detail-shop-info>
          <detail-goods-info :img="img"  @imageLoad = "imageLoad"></detail-goods-info>
          <detail-params :detail-params = "detailParams" ref="params"></detail-params>
          <detail-rate :rate="rate"  ref="rate"></detail-rate>
          <detail-rate :rate="rate"  ref="recommend"></detail-rate>
      </scroll>
      <detail-bottom-nav @addToCart="addToCart"></detail-bottom-nav>
      <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import DetailNav from './childcomps/DetailNav.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParams from './childcomps/DetailParams.vue'
import DetailRate from './childcomps/DetailRate.vue'
import DetailBottomNav from './childcomps/DetailBottomNav.vue'

import Scroll from '../../components/common/scroll/Scroll.vue'

import {getDetail,Goods,Shop} from '@/network/detail'

import {debounce} from "@/common/utils.js"
import {backTopMixin} from '@/common/mixin.js'

<<<<<<< HEAD
import{ mapActions} from 'vuex'
=======
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
export default {
  name: 'Detail',
  mixins: [backTopMixin],
  data() {
      return {
          id: null,
          swiperImg: [],
          goods: {},
          shop: {},
          img: {},
          detailParams: {},
          rate:{},
          scrollY:[],
          getScrollY:null,
          currentIndex: 0
        
      }
  },
  methods: {
<<<<<<< HEAD
      ...mapActions(['addCart']),
=======
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
      addToCart() {
          const product = {}
          console.log(this.goods);
          product.img = this.swiperImg[0]
          product.title = this.goods.title
          product.price = this.goods.lowPrice
          product.id = this.id
<<<<<<< HEAD
          this.addCart(product).then(res=>this.$toast.show(res,1500))

=======
          this.$store.dispatch('addCart', product)
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
      },
      itemClick(index) {
          this.$refs.scroll.scrollTo(0,-this.scrollY[index],100)
      },
      imageLoad() {
         this.getScrollY()

         
      },
      scroll(position) {
          const positionY = -position.y
          let length = this.scrollY.length
          for(let i = 0;i<length-1;i++) {
              if(this.currentIndex!=i &&(positionY >= this.scrollY[i]&&positionY< this.scrollY[i+1])
              ) {
                  this.currentIndex = i
                  console.log(this.currentIndex);
                  this.$refs.nav.currentIndex = this.currentIndex
              }
          }
          this.isShow = -position.y > 1000
      }
  },
  components:{
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailParams,
      DetailRate,
      DetailBottomNav,
      Scroll,
      DetailShopInfo,
      DetailGoodsInfo
  },
  created() {
      this.id = this.$route.params.id
      getDetail(this.id).then(res => {
          this.swiperImg = res[0].swiper
          this.goods = new Goods(res[0].itemInfo,res[0].columns,res[0].services)
          this.shop = new Shop(res[0].shopInfo)
          this.img = res[0].img
          this.detailParams = res[0].params
          if(res[0].cRate!=0){
              this.rate = res[0].rate
          }
      })
      this.getScrollY = debounce(() =>{
              this.scrollY = []
          this.scrollY.push(0),
          this.scrollY.push(this.$refs.params.$el.offsetTop)
          this.scrollY.push(this.$refs.rate.$el.offsetTop)
          this.scrollY.push(this.$refs.recommend.$el.offsetTop)
          this.scrollY.push(Number.MAX_VALUE)
          console.log(this.scrollY);
          }, 100)
  }
}
</script>

<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        z-index: 9;
        background-color: #fff;
    }
    .nav {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    .content {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>