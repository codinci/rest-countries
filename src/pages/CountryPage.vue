<script setup lang="ts">
import { useLocale } from 'vuetify'
import { useRouter } from 'vue-router'
import CountryDetail from '@/components/CountryDetail.vue'

const router = useRouter()
const { t } = useLocale()

const goBack = () => {
	router.go(-1)
}

</script>
<template>
	<v-container class="pt-8 mb-8 pt-md-12 mx-md-14 mx-lg-24">
		<v-row class="d-flex justify-start pt-12">
			<v-btn class="px-8 ml-4" prepend-icon="fa-solid fa-arrow-left" @click="goBack">
				{{t('$vuetify.back')}}
			</v-btn>
		</v-row>
	</v-container>

	<Suspense>
		<CountryDetail/>
		<template #fallback>
			<div class="d-flex mx-2 mx-md-12 pt-8">
				<v-skeleton-loader
					class="d-flex-column d-flex-md-row justify-space-between"
					width="1600" type="card"
				></v-skeleton-loader>
			</div>
		</template>
	</Suspense>
</template>