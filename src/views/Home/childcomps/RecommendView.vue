<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommend">
          <img :src="item.img" alt="">
      <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type: Array,
            default() {
                return[]
            }
        }
    }

}
</script>

<style>
.recommend {
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 8px solid #eee;
    font-size: 12px;
    padding: 15px 0 30px;
}
.recommend-item {
    flex: 1;
}
.recommend-item img {
    width: 100%;
}

</style>