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
                    <span>订单记录</span>
                </div>
            </div>
            <div class="collect-right">
                <carmsg></carmsg>
                <el-button @click="collectBuy()">预约买车</el-button>
                <!-- <carmsg></carmsg>
                <el-button>预约买车</el-button>
                <carmsg></carmsg>
                <el-button>预约买车</el-button>
                <carmsg></carmsg>
                <el-button>预约买车</el-button> -->
                <!-- <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
			    </el-pagination> -->
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
            time:0,
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
        collectBuy(){
            // console.log(session);
            this.axios.post('/api/users/collectBuyCar',{
            }).then(e=>{
                if(e.status == 200){
                    let phone = sessionStorage.getItem('token');
                    this.time++;
                    localStorage.setItem('times',this.time);
                    if(phone != null){
                        alert('预订成功')
                    }else{
                        alert('请先登录')
                    }
                }
            })
        },
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


