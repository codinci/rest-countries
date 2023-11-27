<script setup lang="ts">
import { ref, Ref, computed } from 'vue'
import { useLocale } from 'vuetify'
import data from '@/data.json';
import { ICountry } from '@/types/Country.ts'
import Country from './Country.vue'

const { t } = useLocale()

const searchText: Ref<string> = ref('')
const selectedRegion: Ref<string | null> = ref('All Regions')
const regions = [
	'All Regions',
	...new Set(data.map(country => country.region))
]
const testData: ICountry[] = data.slice(0, 10)


const filteredCountries = computed(() => {
  return (!searchText.value?.trim() && selectedRegion.value === 'All Regions') ?
	  testData :
	  (searchText.value) ?
		testData.filter(country =>
		  	country.name?.toLowerCase()
				.startsWith(searchText.value?.trim().toLowerCase())
		) :
    	testData.filter(country => country.region === selectedRegion.value)
});


</script>
<template>
	<v-container class="pt-8 mb-8 pt-md-12 mx-md-14 mx-lg-24">
		<v-row class="d-flex flex-column flex-sm-row justify-space-between align-start">
			<v-col cols="12" sm="8" md="5">
				<v-text-field
					density="compact"
					variant="outlined"
					:label="t('$vuetify.search')"
					prepend-inner-icon="fa-solid fa-magnifying-glass"
					single-line
					hide-details
					v-model="searchText"
				></v-text-field>
			</v-col>
			<v-col class="mr-md-n2 mr-lg-n16" cols="8" sm="4" md="4" lg="2" >
				<v-select
					v-model="selectedRegion"
					density="compact"
					bg-color="background"
					:label="t('$vuetify.filter')"
					append-inner-icon="fa-solid fa-caret-down"
					variant="outlined"
					:items="regions"
					class="mr-md-n12"
				></v-select>
			</v-col>
		</v-row>
	</v-container>
	<div>
		<v-row class="flex mx-8 mx-sm-12">
			<v-col v-for="(country, index) in filteredCountries" cols="12"  sm="6" md="3" :key="index" >
				<Country :data="country"/>
			</v-col>
		</v-row>
	</div>
</template>