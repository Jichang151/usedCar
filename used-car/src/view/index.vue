<template>
	<div id="index">
		<div class="index_pic">
			<el-carousel height="400px" >
				<el-carousel-item v-for="(item,index) in picPath" :key="index">
					<img  :src="'/static/showCar/'+item+'.png'" alt="图片加载失败">
				</el-carousel-item>
			</el-carousel>
		</div>

		<!-- 买卖车辆 -->
		<div class="classify">
			<div class="classify_left">
				<div class="classify_ltop">
					<div class="ltop_font">
						<strong>
							我要买车&nbsp;
						</strong>
						<i class="iconfont">&#xe61c;</i>
						<!-- 		<input type="text" style="margin-left:15px; border-radius:15px;border:1px solid #123123; width:180px;height:28px;outline:none;"> -->
					</div>
					
					<div class="ltop_seach">
						<input type="text" v-model="key" placeholder="请输入关键字"> 
						<i class="iconfont" @click="keySearch">&#xe6d1;</i>
					</div>
				</div>
				<div v-for="(item,index) in arr" :key="index">
					<a href="#/buy_car" v-for="(value,num) in item.tag" :key="num">
						<i v-if="index===0" class="iconfont" v-html="value.icon"></i>
					<!--<i v-if="index===1" class="iconfont" v-html="value.icon"></i>
						<i v-if="index===2" class="iconfont" v-html="value.icon"></i>
						<i v-if="index===3" class="iconfont" v-html="value.icon"></i>
						<i v-if="index===4" class="iconfont" v-html="value.icon"></i>
						<i v-if="index===5" class="iconfont" v-html="value.icon"></i> -->
						<span v-if="index===0">{{value.name}}</span>
						<span v-else>{{value}}</span>
					</a>
				</div>
			</div>
			<div class="classify_right">
				<div class="classify_rtop">
						<strong>
							我要卖车&nbsp;
						</strong>
						<i class="iconfont">&#xe61c;</i>		
				</div>
					<div class="classify_phone">
						<input type="text" v-model="sellCarPhone" placeholder=" 请输入您的手机号">
					</div>
					<button @click="sellCar">我要卖车</button>
			</div>
		</div>


		<!-- 买车流程 -->
		<div class="step">
			<div class="step_buy_sell">
				<div class="step_nav">
					<span @click="buyCarStep">买车流程</span>
					<b>|</b>
					<span @click="sellCarStep">卖车流程</span>
				</div>
				
				<div class="buy_car_content" v-show="mark">
					<div v-for="(item,index) in buyStep" :key="index">
						<h1 v-show="index === content">{{item.title}}</h1>
						<p v-show="index === content">{{item.description}}</p>
					</div>
				</div>
				<div class="sell_car_content" v-show="!mark">
					<div v-for="(item,index) in sellStep" :key="index">
						<h1 v-show="index === content">{{item.title}}</h1>
						<p v-show="index === content">{{item.description}}</p>
					</div>
				</div>
				<div class="step_list">
					<ul>
						<li v-for="(item,index) in buyStep" :key="index" @click="stepTab(index)" >{{item.title}}</li>
					</ul>
				</div>
			</div>
			<div class="step_img" v-for="(pic,index) in stepImg" :key="index">
				<img 
					:src="'/static/showCar/'+ pic + '.png'"  
					v-show="index===0"  
					alt="图片加载失败">
			</div>
		</div>


		<!-- 热门搜索 -->
		<div class="guess_like">
			<p><i class="iconfont">&#xe60e;</i>热门搜索</p>
			<div class="hot">
				<div class="carmsg-box" v-for="(item,index) in goodsList" :key="index">
					<!-- 二手车图片 -->
					<a href="javascript:;"><img class="msg-img" @click="carMsg" :src="'/static/showCar/' + item + '.png'" alt="图片加载失败"></a>
					<!-- 型号 -->
					<div>
						<h2>本田</h2>
						<i class="iconfont" @click="collect">&#xe60f;</i>
					</div>
					<!-- 年代里程 -->
					<div class="year-instance">
						2011年
						<i class="">|</i>
						20.3万公里
					</div>
					<!-- 价格 -->
					<div class="price">

					</div>
      			</div>
			</div>
		</div>


		<!-- footer -->
		<div class="copy_right">
			Copyright © 2018-2019    All Rights Reserved. 备案号：闽ICP备15012807号-1	
		</div>
	</div>
</template>
<style lang="less" scoped>
@import './../assets/index.less';
</style>
<script>
// import carmsg from '@/components/CarMsg.vue'
export default{
	components:{
		// carmsg,
	},
	data(){
		return {
			goodsList:[
				'丰田',
				'哈弗',
				'大众',
				'奔驰',
				'宝马',
				'日产',
				'本田',
				'猎豹',
				'现代',
			],
			picPath:[
				'1',
				'2',
				'3',
				'4',
				'5',
			],
			stepImg:[
				'a',
				's',
				'd',
				'f',
			],
			buyStep:[
				{title:'预约看车',description:'在线预约'},
				{title:'专人带看',description:'公司将安排售车顾问陪同您看车'},
				{title:'签署合同',description:'签署三方合同，支付定金'},
				{title:'交易过户',description:'销售顾问陪同过户，支付车款，好车开回家'},
			],
			sellStep:[
				{title:'在线预约',description:'评估师免费上门检测'},
				{title:'全网代售',description:'海量买家快速售车'},
				{title:'三方约看',description:'平均七日售出'},
				{title:'签约过户',description:'省心省事，全程陪同'},
			],
			arr:[
			{
				tag:[
				{
					name:'大众',
					icon:'&#xe615;',
				},
				{
					name:'日产',
					icon:'&#xe61a;',
				},
				{
					name:'现代',
					icon:'&#xe619;',
				},
				{
					name:'奥迪',
					icon:'&#xe618;',
				},
				{
					name:'奔驰',
					icon:'&#xe616;',
				},
				{
					name:'马自达',
					icon:'&#xe61b;',
				},
				{
					name:'...更多',
					icon:'',
				}
				],

			},
			{
				tag:[
				'3w以下',
				'3-5w',
				'5-7w',
				'7-9w',
				'9-12w',
				'12-16w',
				'16-20w',
				],

			},
			{
				tag:[
				'超值',
				'急售',
				'练手车',
				'准新车',
				'保卖车',
				'SUV',
				'MPV',

				],
			},
			],
			mark: true,
			content:0,
			sellCarPhone : '',
			key: '',
		}
	},
	methods:{
		buyCarStep(){
			this.mark = true;
		},
		sellCarStep(){
			this.mark = false;
		},
		stepTab(value){
			this.content = value;

		},
		sellCar(){
			if(/^1[3|4|5|7|8][0-9]{9}$/.test(this.sellCarPhone)){
				this.axios.post('/api/users/sellCarPhone',{
				phone: this.sellCarPhone
			}).then(e => {
					if(e.data.status === 200){
					this.$router.push({name:'sellCar'})
				}
			})
			}else{
				alert("请输入正确的手机号")
			}
			
		},
		keySearch(){
			this.axios.post('/api/users/keySearch',{
				key: this.key
			}).then(e=>{
				this.$router.push({name:'buyCar'})
			})
		},
		carMsg(){
			//传车辆ID没做
			this.$router.push({name:'carDetail'})

		},
	},

}
</script>