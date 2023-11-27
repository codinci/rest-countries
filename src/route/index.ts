import { createRouter, createWebHistory } from 'vue-router'
import FilterAndSearchVue from '@/Components/FilterAndSearch.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: "home",
			component: FilterAndSearchVue,
			meta: {
				title: "Home",
			},
		}
	]
})

export default router