<template>
<div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
</div>
  
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem'
export default {
    components: {
            GoodsListItem
        },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }

}
</script>

<style>
.goods {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--color-background);
    justify-content: space-evenly;

    
  }

</style>