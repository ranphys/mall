<template>
  <swiper>
      <swiper-item v-for="item in banners" >
          <img :src="item.img" alt="" @load="swiperLoad">
      </swiper-item >
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
    data() {
        return {
            flag:false
        }
    },
    methods: {
        swiperLoad() {
            if(!this.flag){
                this.$emit('swiperLoad')
                this.flag = true
            }
            
        }
    },
    props:{
        banners:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }

}
</script>

<style>

</style>