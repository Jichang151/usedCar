import Vue from 'vue'
import Router from 'vue-router'

import buyCar from '@/view/BuyCar'
import index from '@/view/index'
import sellCar from '@/view/SellCar'
import server from '@/view/server'
import collect from '@/view/collect'
import history from '@/view/history'
import personal from '@/view/personal'
import carDetail from '@/view/CarDetail'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			name:'index',
			component:index,
		},{
			
			path: '/buy_car',
			name: 'buyCar',
			component: buyCar,
		},{
			path:'/sell_car',
			name:'sellCar',
			component:sellCar,
		},
		{
			path:'/server',
			name:'server',
			component:server,
		},{
			path:'/collect',
			name:'collect',
			component:collect,
		},{
			path:'/history',
			name:'history',
			component:history,
		},{
			path:'/personal',
			name:'personal',
			component:personal,
		},{
			path:'/carDetail',
			name:'carDetail',
			component:carDetail,
		}

	]
})
