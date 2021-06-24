<template>
   <div>
       <table class="params">
           <td v-for="item in detailParams">
               <span>{{item.key}}</span>: <span>{{item.value}}</span>
           </td>
       </table>
   </div>
</template>

<script>
export default {
    props: {
        detailParams: {
            type: Object,
            default() {
            return {}
        }
        }
    }
}
</script>

<style scoped>
    .params {
        display: flex;
        flex-wrap: wrap;
    }
    td {
        width: 100%;
    }
</style>