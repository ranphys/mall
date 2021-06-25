<template>
  <div id="home" class="wrapper">
    <nav-bar  class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <tab-control :titles="['流行','新款','精选']" class="tab-control1"
   @tabClick="tabClick" ref="tabControl1" v-show="tabShow"></tab-control>
  <sc class="content" ref="scroll"  
  :probe-type="3" 
  @scroll="contentScroll"
  :pull-up-load = "true"
  @pullingUp = "pullingMore">
  <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
  <recommend-view :recommend="recommend"></recommend-view>
  <feature-view></feature-view>
  <tab-control :titles="['流行','新款','精选']" class="tab-control2"
   @tabClick="tabClick" ref="tabControl2"></tab-control>
  <goods-list :goods="showGoods"></goods-list></sc>
  <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
import Sc from '@/components/common/scroll/Scroll'

import TabControl from '@/components/content/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backtop/BackTop'

import {getHomeMultiData} from '@/network/home'
import {getHomeGoods} from '@/network/home'

import HomeSwiper from './childcomps/HomeSwiper'
import RecommendView from './childcomps/RecommendView'
import FeatureView from './childcomps/FeatureView'

import {debounce} from '@/common/utils.js'
export default {
  data(){
    return{
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType: 'pop',
      isShow: false,
      tabShow: false,
      tabOffsetTop: 0,
      saveY: 0 
    }

  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    Sc,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView,
    
  },
  methods: {
    tabClick(index) {
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      switch(index) {
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='news'
          break
        case 2:
          this.currentType='sell'
          break
      }  
    },

    getHomeMultiData() {
      getHomeMultiData().then(res => {
      this.banners =res[0].banners
      this.recommend = res[0].recommend
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res[0].list)
        this.goods[type].page+=1
      })
    },
    backClick() {
    this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000
      this.tabShow= -position.y > this.tabOffsetTop
    },
    pullingMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },


  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('imageLoad',() => {
      refresh()
    })
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  }
  

}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control1 {
    position: relative;
    z-index: 9;
  }


</style>