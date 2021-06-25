<template>
  <div class="toast" v-if="isShow">
      <div>
          {{message}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            message:'',
            isShow: false
        }
    },
    methods: {
        show(message,duration=2000) {
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.message = ''
                this.isShow = false
            },duration)
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        background: rgba(0,0,0,.75);
        z-index: 999;
    }
</style>