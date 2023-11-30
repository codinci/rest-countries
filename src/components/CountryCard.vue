<script setup lang="ts">
import { useLocale } from 'vuetify'
import { useRouter } from 'vue-router';
import { ICountry } from '@/types/Country.ts'

const { t } = useLocale()
const props = defineProps<{
  data: ICountry
}>()

const router = useRouter()
const goToCountry = (country: ICountry) => {
	router.push({
		name: 'country',
		params: {country: country.name.common}
	})
}



</script>
<template>
	<v-card v-if="props.data" class="mx-8 mx-md-2 pb-4" width="280" @click="goToCountry(props.data)">
		<v-img width="280" height="154"
			:lazy-src="props.data.flags.svg"
			:src="props.data.flags.png"
			:alt="`${props.data.name}-flag`"
		>
			<template v-slot:placeholder>
				<v-row
					class="fill-height ma-0"
					align="center"
					justify="center"
				>
					<v-progress-circular
					indeterminate
					color="grey-lighten-5"
					></v-progress-circular>
				</v-row>
			</template>
		</v-img>
		<h3 class="mt-2 mx-4 text-h6 font-weight-bold"> {{ props.data.name.common }}</h3>
		<p class="mt-2 mx-4 font-weight-bold">
			{{ t('$vuetify.population') }}:
			<span class="ml-2 font-weight-regular">
				{{ props.data.population.toLocaleString('en-US') }}
			</span>
		</p>
		<p class="mt-2 mx-4 font-weight-bold">
			{{ t('$vuetify.region') }}:
			<span class="ml-2 font-weight-regular">
				{{ props.data.region }}
			</span>
		</p>
		<p class="mt-2 mx-4 font-weight-bold">
			{{ t('$vuetify.capital') }}:
			<span class="ml-2 font-weight-regular">
				{{ props.data.capital ? props.data.capital[0] : 'No data' }}
			</span>
		</p>
	</v-card>
	<v-card v-else class="pb-8 mx-2 mx-md-4" width="265">
		<h3 class=text-center>No data</h3>
	</v-card>
</template>