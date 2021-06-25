<template>
    <swiper class="sp">
        <swiper-item v-for="item in swiperImg">
            <img :src="item.img" alt="">
        </swiper-item>
    </swiper>
  
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
    components: {
        Swiper,
        SwiperItem,
    },
    props: {
        swiperImg:{
            type: Array,
            default() {
                return []
            }
        }
    }

}
</script>

<style scoped>
    .sp {
        height: 300px;
    }
</style>