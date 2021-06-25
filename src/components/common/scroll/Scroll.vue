<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null 
        }
    },
    props: {
        probeType: {
                type: Number,
                default:0
            },
        pullUpLoad: {
            type:Boolean,
            default: false
        }
    },
    methods: {
        scrollTo(x,y,time=500){
        return this.scroll.scrollTo(x,y,time)      
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll.refresh()
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            observeDOM: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click:true
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll',position)
        })
        this.pullUpLoad && this.scroll.on('pullingUp', () =>{
            this.$emit('pullingUp')
        })
    }

}
</script>

<style scoped>

</style>