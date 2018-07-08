<template>
	<div id="buyCar">
		<div class="buyCar-box">
			<div class="crumb-search">
				<div class="breadcrumb">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }" class="crumb-item">二手车销售系统</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="search">
					<div class="search-box">
						<input type="text" placeholder="搜索您想要的车" v-model="searchCar" >
						<i class="iconfont" @click="searchBtn">&#xe6d1;</i>
					</div>
					<ul class="search-select" style="display:none">
						<li v-for="(item,index) in search" :key="index">{{item}}</li>
					</ul>
				</div>
			</div>


			<div class="classify">
					<ul class="classify-brand hot">
						<b>品牌</b>
						<a href="#">不限</a>
						<li v-for="(item,index) in brand" :key="index" @click="classifyBrand(item)">{{item}}</li>
						<span v-show="arrow" @click="allCar">全部<i class="iconfont">&#xe798;</i></span>
						<span v-show="!arrow" @click="listCar">收起<i class="iconfont">&#xe797;</i></span>
					</ul>
					<div class="all-brand" v-show="brandShow">
						<ul>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>B</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>C</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>D</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>F</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>G</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>H</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
						</ul>
						<ul>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
							<li>
								<strong>A</strong>
								<p><a href="#" v-for="(item,index) in A" :key="index">{{item}}</a></p>
							</li>
						</ul>
						<ul></ul>
					</div>
					<ul class="classify-series hot">
						<b>车系</b>
						<a href="#">不限</a>
						<li v-for="(item,index) in series" :key="index">{{item}}</li>
					</ul>
					<ul class="classify-price hot">
						<b>价格</b>
						<a href="#">不限</a>
						<li v-for="(item,index) in price" :key="index">{{item}}</li>
					</ul>
					<ul class="classify-more hot">
						<b>更多</b>
						<a href="#">不限</a>
						<li v-for="(item,index) in price" :key="index">{{item}}</li>
					</ul>
					

			</div>
			<div class="car-msg">
				<carmsg v-for="(item,index) in 16" :key="index"></carmsg>
			</div>
			<!-- <el-pagination
				background
				layout="prev, pager, next"
				:total="1000">
			</el-pagination> -->
		</div>
		<div class="copy_right">
			Copyright © 2018-2019    All Rights Reserved. 备案号：闽ICP备15012807号-1	
		</div>
	</div>
</template> 
<style lang="less" scoped>
	@import './../assets/buy_car.less';
</style>

<script>
// import carmsg from '@/components/CarMsg.vue'
	export default {
		components: {
		// carmsg,
		},
		data(){
			return{
				searchCar:'',
				arrow:true,
				search:[
					'大众',
					'福特',
					'比克',	
					'SUV',
					'现代',
					'丰田',
					'雪弗兰',	
					'宝马',
					'丰田',
				],
				brand:[
					'大众',
					'丰田',
					'现代',
					'福特',
					'本田',
					'日产',
					'哈弗',
					'奥迪',
					'别克',
					'奇瑞',
					'起亚',
					'五菱',
					'雪弗兰',
					'奔驰',
					'宝马',
				],
				series:[
					'哈弗H6',
					'宝来',
					'速腾',
					'迈腾',
					'捷达',
					'高尔夫',
					'途观',
					'福克斯',
					'雅阁',
					'普拉多',
					'凯美瑞',
					'卡罗拉',
					'奥迪A6L',
				],
				price:[
					'3万以下',
					'3-5万',
					'5-7万',
					'7-9万',
					'9-12万',
					'12-16万',
					'16-20万',
					'20万以上',
				],
				A:[
					'奥迪',
					'阿斯顿·马丁',
					'安驰',
					'安凯客车',
					'AC',
					'as',
					'asd',
					'qwe',
					'阿斯顿'
				],
				brandShow:false,
			}
		},
		methods:{
			searchBtn(){
				this.axios.post('/api/users/searchBtnCar',{
					searchCar:this.searchCar

				}).then(e=>{
					// console.log(e.data.searchCar);
				})
			},
			allCar(){
				this.brandShow = true;
				this.arrow = false;
			},
			listCar(){
				this.brandShow = false;
				this.arrow = true;

			},
			classifyBrand(item){
				// console.log(item);
				// console.log(this.item);
				this.axios.post('/api/users/classifyBrands',{
					brand: item
				})
				
			},
		}
	}

</script>

