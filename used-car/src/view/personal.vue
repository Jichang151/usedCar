<template>
    <div id="personal">
        <div class="personal-box">
            <div class="personal-left">
                <div class="personal-lt">
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
                    <span>订单记录</span>
                </div>
            </div>
            <div class="personal-right">
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="user"
                        label="用户"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="car"
                        label="车辆订单"
                        width="500">
                    </el-table-column>
                </el-table>
                <!-- <img src="./../../assets/logo.png" alt=""> -->
                <!-- <el-button v-model="orderHistory">点此查看订单记录</el-button> -->
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components:{
        
    },
    data(){
        return{
            tableData: [{
          user: '18846071206',
          car: '你有一个订单',    
        },]
            
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
        },
        // orderHistory(){
        //     localStorage.getItem('times')
        // }
    }
}
</script>
<style lang="less" scoped>
    #personal{
        overflow: hidden;
        background-color: #f8f8f8;
        .personal-box{
            width:1200px;
            margin:40px auto;
            display:flex;
            .personal-left{
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
                .personal-lt{
                    height:80px;
                    img{
                        width:100px;
                        height:80px;
                    }
                }
            }
            .personal-right{
                // margin-top:10px;
                border:1px solid #ccc;
                width:700px;
                height:100%;
            }           
        }
    }
</style>


