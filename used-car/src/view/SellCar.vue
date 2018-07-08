<template>
	<div id="sellCar">
		<div class="sellCar-box">
			   <div class="slogan-1">个人卖给个人,没有中间商赚差价</div>
			   <div class="slogan-2">买家少花钱，卖家最高多卖20%，平均7天售出</div>
			   <div class="phone-area">
				   <el-input
  						placeholder="请输入手机号"
						maxlength="11"
	  					clearable
						v-model="sellCarPhone">
					</el-input>
					<el-button type="success" @click="sellCarBtn">免费卖车</el-button>
					<el-button type="info">免费估价</el-button>
			   </div>

			   <el-dialog title="只需两步，快速卖车" :visible.sync="dialogFormVisible1">
				<el-form :model="form">
					<el-form-item label="车辆品牌" :label-width="formLabelWidth">
						<el-input v-model="form.brand" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="车系" :label-width="formLabelWidth">
						<el-input v-model="form.system" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="上牌时间" :label-width="formLabelWidth">
						<el-select v-model="form.carTime" placeholder="请选择上牌时间">
							<el-option label="2018年" value="shanghai"></el-option>
							<el-option label="2017年" value="beijing"></el-option>
							<el-option label="2016年" value="beijing"></el-option>
							<el-option label="2015年" value="beijing"></el-option>
							<el-option label="2014年" value="beijing"></el-option>
							<el-option label="2013年" value="beijing"></el-option>
							<el-option label="2012年" value="beijing"></el-option>
							<el-option label="2011年" value="beijing"></el-option>
							<el-option label="2010年" value="beijing"></el-option>
							<el-option label="2009年" value="beijing"></el-option>
							<el-option label="2008年" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="行驶里程" :label-width="formLabelWidth">
						<el-input v-model="form.mileage" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="牌照地" :label-width="formLabelWidth">
						<el-input v-model="form.carPlace" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="车况" :label-width="formLabelWidth">
						<el-select v-model="form.carStatus" placeholder="请选择车况">
							<el-option label="车况好，无事故且外观无损伤" value="shanghai"></el-option>
							<el-option label="车况一般，无事故但有少量刮蹭" value="beijing"></el-option>
							<el-option label="车辆有重大事故，车身骨架受损" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-button @click="nextStep">下一步</el-button>
				</el-form>
			   </el-dialog>

				<el-dialog title="您离卖车，只差1步" :visible.sync="dialogFormVisible2">
				<el-form :model="form">
					<el-form-item label="验车时间" :label-width="formLabelWidth">
						<el-select v-model="form.checkTime" placeholder="请选择验车时间">
							<el-option label="今天上午9:00-12:00" value="shanghai"></el-option>
							<el-option label="今天下午12:00-18:00" value="beijing"></el-option>
							<el-option label="明天上午9:00-12:00" value="beijing"></el-option>
							<el-option label="明天上午12:00-18:00" value="beijing"></el-option>
							<el-option label="以上时间不方便，请客服联系我" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="验车地点" :label-width="formLabelWidth">
						<el-input v-model="form.checkPlace" auto-complete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="commit">提 交</el-button>
				</div>
				</el-dialog>
		</div>
	</div>
</template>
<style lang="less" scoped>
#sellCar {
  .sellCar-box {
    width: 100%;
    height: 100%;
	background-color: #ccc;
	overflow: hidden;
	.slogan-1,{
		// width:400px;
		margin:50px auto; 
		text-align:center;
		font-size:40px;
	}
	.slogan-2{
		// width:350px;
		margin:0 auto; 
		text-align:center;
		font-size:20px;
	}
	.phone-area{
		width:400px;
		margin:80px 430px;
		display:flex;
		.el-input{
			width:300px;
			flex:none;
			
		}
		.el-button{
			flex:none;
		}
	}
  }
}
</style>
<script>
export default {
	data(){
		return{
			sellCarPhone:'',
			dialogFormVisible1: false,
			dialogFormVisible2: false,
			form: {
			name: '',
			region: '',
			date1: '',
			date2: '',
			delivery: false,
			type: [],
			resource: '',
			desc: ''
			},
			formLabelWidth: '120px'
			}
	},
	methods:{
		
		sellCarBtn(){
			var qs = require('qs');
			if(/^1[3|4|5|7|8][0-9]{9}$/.test(this.sellCarPhone)){
				this.axios.post('/users/sellCarPhone',
				 qs.stringify({
					sellCarPhone: this.sellCarPhone
				})).then(res => {
							console.log(res.data);
							this.dialogFormVisible1 = true;
					  }
					  )
			}else{
				alert('请输入正确的手机号')
			}
		},
		nextStep(){
			this.dialogFormVisible1 = false;
			this.dialogFormVisible2 = true;
		},
		commit(){
			this.axios.post('/api/users/sellCarMsg',{
				brand: this.form.brand,
				system: this.form.system,
				carTime: this.form.carTime,
				mileage: this.form.mileage,
				carPlace: this.form.carPlace,
				carStatus: this.form.carStatus,
				checkTime: this.form.checkTime,
				checkPlace: this.form.checkPlace,
			}).then(e=>{
				this.dialogFormVisible2 = false;
			})
		}
	}
}
</script>

