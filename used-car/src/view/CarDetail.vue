<template>
    <div id="collect">
        <div class="collect-box">
            <div class="collect-left">
                <div class="collect-lt">
                    <img src="./../assets/logo.png" alt="图片加载失败">
                    18846071206
                </div>
                <div @click="collectBtn">
                    <span>收藏车辆</span>
                </div>
                <div @click="historyBtn">
                    <span>浏览记录</span>
                </div>
                <div @click="personalBtn">
                    <span>个人信息</span>
                </div>
                <div @click="messageBtn">
                    <span>车辆信息</span>
                </div>
            </div>
            <div class="collect-right">
                <carmsg v-for="(item,index) in 6" :key="index"></carmsg>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
			    </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
// import carmsg from './../../components/CarMsg'
export default {
    components:{
        // carmsg,
    },
    data(){
        return{

        }
    },
    methods:{
        collectBtn(){
            this.$router.push({name:'collect'})
        },
        historyBtn(){
            this.$router.push({name:'history'})
        },
        personalBtn(){
            this.$router.push({name:'personal'})
        }
    }
}
</script>
<style lang="less" scoped>
    #collect{
        overflow: hidden;
        background-color: #f8f8f8;
        .collect-box{
            width:1200px;
            margin:40px auto;
            display:flex;
            .collect-left{
                border:1px solid #dcdcdc;
                width:200px;
                height:400px;
                flex:none;
                text-align:center;
                background-color: #fff;
                display:flex;
                flex-direction: column;
                div{
                    width:200px;
                    height:40px;
                    flex:auto;
                    span{
                        width:200px;
                        height:60px;
                        line-height: 60px;
                        display: block;
                    }
                    span:hover{
                        background-color: orange;
                        color:#fff;
                        cursor:pointer;
                    }
                }
                .collect-lt{
                    height:80px;
                    img{
                        width:100px;
                        height:80px;
                    }
                }
            }
            .collect-right{
                display:flex;
                height:100%;
                flex-wrap:wrap;
                margin:0 0 0 20px;;
                border:1px solid #dcdcdc;
                #carmsg{
                    width:290px;
                    flex:auto;
                    margin:10px;
                    background-color: #fff;
                }
                .el-pagination{
                    margin:0 auto;
                }
            }           
        }
    }
</style>


