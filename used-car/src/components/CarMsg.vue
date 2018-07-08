<template>
  <div id="carmsg">
      
  </div>
</template>
<style lang="less" scoped>
    .carmsg-box{
        color:#495056;
        .msg-img{
            width: 100%;
            height:200px;
        }
        .iconfont{
            margin-right:0;
            cursor:pointer;
        }
    }
</style>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        collect(){
            this.$router.push({
                name:'collect'
            })
        },

    }   
}
</script>



