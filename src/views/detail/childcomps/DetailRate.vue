<template>
  <div>
      <div class="header">
          <span class="title">用户评价</span>
          <span class="more">更多</span>
      </div>
      <div class="comment" v-for="item in rate.list">
          <div class="user-info">
              <img :src="item.user.avatar" alt="">
              <span>{{item.user.uname}}</span>
          </div>
          <div class="user-comment">
              {{item.content}}
          </div>
          <div class="user-detail">
              <span class="time">{{time(item.created)}}</span><span v-for="value in item.extraInfo">{{value}}</span><span>{{item.style}}</span>
          </div>
          <div class="user-image">
              <img v-for="value in item.images" :src="value" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils.js'
export default {
    props: {
        rate: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        time(value) {
            const date = new Date(value*1000)
            return formatDate(date,'yyyy-MM-dd  hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    display: flex;
    justify-content:space-evenly;
    padding: 15px 5px;
    border-bottom: 2px solid #eee;
}
.header span {
    flex: 1;
}
.more {
    text-align: right;
}
.user-info {
    margin: 15px 0;
}
.user-info img {
    width: 15%;
    vertical-align: middle;
}
.user-detail {
    font-size: 15px;
    color: grey;
    margin: 15px 0;
}
.user-detail span {
    margin: 0 3px;
}
.user-image img {
    width: 25%;
}
</style>