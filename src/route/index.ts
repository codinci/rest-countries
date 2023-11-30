import { createRouter, createWebHistory } from 'vue-router'
import CountryPage from '@/pages/CountryPage.vue'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: "home",
			component: HomePage,
			meta: {
				title: "Home",
			},
		},
		{
			path: '/:country',
			name: "country",
			component: CountryPage,
			meta: {
				title: "Country"
			}
		}
	]
})

export default router