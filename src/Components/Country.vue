<script setup lang="ts">
import { useLocale } from 'vuetify'
import { ICountry } from '@/types/Country.ts'

const { t } = useLocale()
const props = defineProps<{
  data: ICountry
}>()



</script>
<template>
	<v-card v-if="props.data" class="pb-8 mx-2" width="265">
		<img width="265" height="154" :src="props.data.flags.png" :alt="`${props.data.name} flag`"/>
		<h3 class="mt-2 mx-4 text-h6 font-weight-bold"> {{ props.data.name }}</h3>
		<p class="mt-2 mx-4 font-weight-bold">{{ t('$vuetify.population') }}: <span class="ml-2 font-weight-regular">{{ props.data.population.toLocaleString('en-US') }}</span></p>
		<p class="mt-2 mx-4 font-weight-bold">{{ t('$vuetify.region') }}: <span class="ml-2 font-weight-regular">{{ props.data.region }}</span></p>
		<p class="mt-2 mx-4 font-weight-bold">{{ t('$vuetify.capital') }}: <span class="ml-2 font-weight-regular">{{ props.data.capital }}</span></p>
	</v-card>
</template>