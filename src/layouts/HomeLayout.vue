<script setup lang="ts">
import axios from 'axios'
import { useLocale } from 'vuetify'
import { ref, Ref, computed } from 'vue'
import { ICountry } from '@/types/Country.ts'
import CountryCard from '@/components/CountryCard.vue';

const { t } = useLocale()

//Fetch countries from restcountries API
const getCountriesData = async () => {
	try {
		const { data } = await axios.get('https://restcountries.com/v3.1/all')
		return data
	}catch(err) {
		console.error(err)
	}
}

const countriesData: ICountry[] = await getCountriesData()

const searchText: Ref<string> = ref('')
const selectedRegion: Ref<string | null> = ref('All Regions')
const regions = [
	'All Regions',
	...new Set(countriesData.map(country => country.region))
]

const filteredCountries = computed(() => {
  return (!searchText.value?.trim() && selectedRegion.value === 'All Regions') ?
	  countriesData :
	  (searchText.value) ?
		countriesData.filter(country =>
		  	country.name?.common?.toLowerCase()
				.startsWith(searchText.value?.trim().toLowerCase())
		) :
    	countriesData.filter(country => country.region === selectedRegion.value)
});

</script>
<template>
	<div class="">
		<v-row class="d-flex flex-column flex-sm-row justify-space-between align-start pt-4 ">
			<v-col cols="9" sm="8" md="5">
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
			<v-col class="mr-md-n2 mr-lg-n16" cols="6" sm="4" md="4" lg="2" >
				<v-select
					v-model="selectedRegion"
					density="compact"
					bg-color="background"
					:label="t('$vuetify.filter')"
					append-inner-icon="fa-solid fa-caret-down"
					variant="outlined"
					:items="regions"
					class="py-2  mr-md-n6 ml-md-4"
				></v-select>
			</v-col>
		</v-row>
		<v-row class="d-flex justify-space-between">
			<v-col v-for="(country, index) in filteredCountries" :key="index"
				cols="12" sm="6" md="2" class="mx-2 mx-md-12 mb-4"
			>
				<CountryCard :data="country"/>
			</v-col>
		</v-row>

	</div>

</template>