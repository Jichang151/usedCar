<template>
	<div class="nav_bar">
		<div class="nav_con">
			<div class="item1"><h2>二手车销售系统</h2></div>
			<div>
				
			</div>
			<div class="nav_list">
				<!-- <ul>
					<li @click="index" :class="isSelect===1 ? 'selected' : ''">首页</li>
					<li @click="buy_car" :class="isSelect===2 ? 'selected' : ''">我要买车</li>
					<li @click="sell_car" :class="isSelect===3 ? 'selected' : ''">我要卖车</li>
					<li >服务</li>
					<li >金融</li>
					<li 
						v-for="(item,index) in liArr"
						@click="tab(index,item)"
						:class="index===activeTag ? 'selected' : ''">{{item.name}}
						</li>
				</ul> -->
				<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				background-color="#2b333b"
				text-color="#fff"
				active-text-color="#ffd04b">
				<el-menu-item index="1" @click="routerPush('index')">首页</el-menu-item>
				<el-menu-item index="2" @click="routerPush('buyCar')">预约买车</el-menu-item>
				<el-menu-item index="3" @click="routerPush('sellCar')">预约卖车</el-menu-item>
				<el-menu-item index="4" @click="routerPush('server')">服务流程</el-menu-item>
			</el-menu>
			</div>
			<div class="item2">
				<span class='buy_bike' @click="collect"><i class="iconfont">&#xe628;</i>收藏车辆</span>
				<div>/</div>
				<span 
					class="icon_login" 
					@click="login">
					<i class="iconfont">&#xe625;</i>{{isLogin}}
				</span>
			</div>
		</div>
		<el-dialog title="登录验证" :visible.sync="dialogFormVisible" :before-close="closeDialog">
			<el-form :model="form" class="loginForm">
				<el-form-item class="msg" label="请输入手机号" :label-width="formLabelWidth">
					<el-input class='visiblePhone' v-model="form.phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item class="msg" label="请输入验证码" :label-width="formLabelWidth" >
					<el-input v-model="form.verify" auto-complete="off" class='visibleNum'></el-input>
					<el-button class='getVisibleNum' v-show = 'show' @click="getVerify">获取验证码</el-button>
					<el-button class='second' v-show ='!show'>{{count}}s</el-button>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancel">取 消</el-button>
				<el-button type="primary" @click="commit">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>


<script>
export default {
  data() {
    return {
      //获取验证码的变换
      show: true,
      count: "",
      //   timer: null,	
      activeIndex: "1",
      activeIndex2: "1",

      dialogVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        flag: ""
      },
      isLogin:'登录',
      // flag:true,
      formLabelWidth: "120px"
    };
  },
  methods: {

    login(){
      if(sessionStorage.getItem('token')){
          this.dialogFormVisible = false;
          this.isLogin='登录';
          sessionStorage.removeItem('token');
          this.form.phone = "";
          this.form.verify = "";
      }else{

        this.dialogFormVisible = true;

      }

    },
    //验证码变换秒数
    getVerify() {
      if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.form.phone)) {
        this.show = false;
        let time_count = 60;
        this.count = time_count;
        clearInterval(this.timer);


        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= time_count) {
            this.count--;
          } else {
            this.show = true;
            //  this.count = 60;
            clearInterval(this.timer);
            //  this.timer = null;
          }
        }, 1000);

        
        //发送手机号给后台并发送验证码给手机
        this.axios.post('/api/users/phone',{
              phone:this.form.phone
            }).then(e => {
                // console.log(e)
            })

      }else{
        alert('手机号不正确');
      }
    },

    commit(){
      this.axios.post('/api/users/verify',{
        verify:this.form.verify,
        phone:this.form.phone
      }).then(e =>{
        if(e.data.status === 200){
          this.dialogFormVisible = false;
          this.isLogin = this.form.phone;
          // this.flag = false;
          sessionStorage.setItem('token',this.form.phone)
          if(this.isLogin != null) {
           this.form.phone = ""; 
          }
          this.form.verify = "";
          this.show = true;
          this.flag = '退出' + !this.flag ;
        }else{
          alert('验证码错误');
        }哦
       
      })
      
       
    },
    closeDialog(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.dialogFormVisible = false;
          this.form.phone = "";
          this.form.verify = "";
          this.show = true;
        })
        .catch(_ => {});
    },
    routerPush(value) {
      this.$router.push({ name: value });
    },
    cancel() {
      this.dialogFormVisible = false;
      this.form.name = "";
      this.form.flag = "";
      this.show = true;
	  },
    collect(){
        this.$router.push({
          name:'collect'
        })
    },

  },

};
</script>
<style lang="less" scoped>
@import "./../assets/nav_bar.less";
.visiblePhone {
  width: 300px;
}
.visibleNum {
  width: 150px;
}
.getVisibleNum {
  background-color: orange;
  color: #fff;
  width: 110px;
}
.second {
  background-color: orange;
  color: #bbb;
  width: 110px;
}
.msg {
  margin-left: 100px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

