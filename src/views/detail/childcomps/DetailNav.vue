<template>
    <div >
        <nav-bar>
            <div slot="left" class="back" @click="back">
                <img src="@/assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title" >
                <div v-for="(item,index) in titles" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
  
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
export default {
    data() {
        return{
            titles: ['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components: {
        NavBar
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('itemClick',index)
        },
        back() {
            this.$router.back()
        }
    }

}
</script>

<style scoped>
    .title {
        display: flex;
        font-size: 13px;
    }
    .title div {
        flex: 1;
    }
    .back img {
        margin-top: 10px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>