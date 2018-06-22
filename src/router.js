import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Home from './views/Home.vue'
import DojangView from './views/DojangView.vue'
import DWW from './views/DWW.vue'

Vue.use(VueRouter)

export default new VueRouter({
	//mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
    {
			path: '/about',
			component: About
		},
    {
			path: '/contact',
			component: Contact
		},
    {
			path: '/dojang',
			component: DojangView
		},
    {
			path: '/dww',
			component: DWW
		}
	]
})