<script setup lang="ts">
import { useRouter } from 'vue-router'
import CountryDetail from '@/components/CountryDetail.vue'

const router = useRouter()

const goBack = () => {
	router.go(-1)
}

</script>
<template>
		<v-container class="pt-8 mb-8 pt-md-12 mx-md-14 mx-lg-24">
			<v-row class="d-flex justify-start pt-12">
				<v-btn class="px-8 ml-4" prepend-icon="fa-solid fa-arrow-left" @click="goBack">
					Back
				</v-btn>
			</v-row>
		</v-container>

		<Suspense>
			<CountryDetail/>
			<template #fallback>Loading...</template>
		</Suspense>

</template>