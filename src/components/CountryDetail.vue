<script setup lang="ts">
import axios from 'axios'
import { useLocale } from 'vuetify'
import { useRoute } from 'vue-router'
import { ICountry } from '@/types/Country.ts'

const route = useRoute()
const { t } = useLocale()

const getCountryDetails = async () => {
	try {
		const response = await axios.get(
			`https://restcountries.com/v3.1/name/${route.params.country}`
		)
		//flicker delay
		await new Promise((res) => setTimeout(res, 500));
		return response.data
	}
	catch (error: any) {
		console.error(error)
		return error.response
	}

}

const countryData: ICountry[] = await getCountryDetails()

const joinWithCommaExceptLast = (items: Array<string> ) => {
  if (!items || items.length === 0) {
    return ''
  }

  if (items.length === 1) {
    return items[0]
  }

  const lastItem = items.pop() as string // Remove the last item temporarily
  const joinedItems = items.join(', ')
  items.push(lastItem) // Add the last item back

  return `${joinedItems}, ${lastItem}`;
}

const currenciesList = countryData[0].currencies
					? joinWithCommaExceptLast(Object.keys(countryData[0].currencies))
					: 'No data'
const languagesList = countryData[0].languages
					? joinWithCommaExceptLast(Object.values(countryData[0].languages))
					: 'No data'


//Get nativeName of countries
const getNativeName = (data: ICountry) => {
	if (data.name.nativeName) {
		const keys = Object.keys(data.name.nativeName)
		const firstKey = keys[0]
		return data.name.nativeName[firstKey].common
	} else {
		return 'No data'
	}
}

//get border countries names
const getBorderCountry = async (data: ICountry) => {
	try {
		const response = await axios.get('https://restcountries.com/v3.1/all')
		if (data.borders) {
			const matchedCountries = response.data.filter((country:ICountry) =>
				data.borders ? data.borders.includes(country.cca3) : []
			)
			return matchedCountries.map((country: ICountry) => country.name.common)

		}else {
			return 'No data'
		}
	} catch (error) {
		console.error(error)
	}

}
const borderCountries = await getBorderCountry(countryData[0])

</script>
<template>
	<div class="d-flex mx-2 mx-md-12 pt-8">
		<v-card class="d-flex-column d-flex-md-row justify-space-between " width="1600">
			<v-row class="mx-4">
				<!-- Image Column -->
				<v-col cols="12" md="5" class="">
					<v-img
						:lazy-src="countryData[0].flags.svg"
						:src="countryData[0].flags.png"
						:alt="`${route.params.country}-flag`"
						class="fill-height"
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
				</v-col>
				<v-spacer></v-spacer>
				<!-- Country Details Columns -->
				<v-col cols="12" md="5" class="mx-2 mx-md-16">
					<h3 class="text-h4 font-weight-black mt-md-12">{{ route.params.country }}</h3>
					<v-row class="mt-2">
						<v-col cols="12" md="6">
								<p class="font-weight-bold text-subtitle-1">
									{{ t('$vuetify.nativeName') }}:
									<span class="ml-2 font-weight-regular"
									>{{getNativeName(countryData[0])}}</span>
								</p>
								<p class="font-weight-bold text-subtitle-1">
									{{ t('$vuetify.population') }}:
									<span class="ml-2 font-weight-regular">
										{{
											countryData[0].population
												? countryData[0].population.toLocaleString('en-US')
												: 'No data'
										}}
									</span>
								</p>
								<p class="font-weight-bold text-subtitle-1">
									{{ t('$vuetify.region') }}:
									<span class="ml-2 font-weight-regular"
									>{{countryData[0].region}}</span>
								</p>
								<p class="font-weight-bold text-subtitle-1">
									{{ t('$vuetify.subRegion') }}:
									<span class="ml-2 font-weight-regular">
										{{
											countryData[0].subregion
												? countryData[0].subregion
												: 'No data'
										}}
									</span>
								</p>
								<p class="font-weight-bold text-subtitle-1">
									{{ t('$vuetify.capital') }}:
									<span class="ml-2 font-weight-regular">
										{{
											countryData[0].capital
												? countryData[0].capital[0]
												: 'No data'
										}}
									</span>
								</p>
						</v-col>
						<v-spacer></v-spacer>
						<v-col cols="12" md="6">
							<p class="font-weight-bold text-subtitle-1">
								{{ t('$vuetify.topLevelDomain') }}:
								<span class="ml-2 font-weight-regular">
									{{
										countryData[0].tld[0]
											? countryData[0].tld[0]
											: 'No data'
									}}
								</span>
							</p>
							<p class="font-weight-bold text-subtitle-1">
								{{ t('$vuetify.currencies') }}:
								<span class="ml-2 font-weight-regular">
									{{currenciesList}}
								</span>
							</p>
							<p class="font-weight-bold text-subtitle-1">
								{{ t('$vuetify.languages') }}:
								<span class="ml-2 font-weight-regular">
									{{languagesList}}
								</span>
							</p>
						</v-col>
					</v-row>
					<v-row class="mb-6">
						<v-col cols="12" md="4" >
							<p class="font-weight-bold text-subtitle-1">
								{{ t('$vuetify.borderCountries') }}:
							</p>
						</v-col>
						<v-col v-if="countryData[0].borders"
							class="mt-n2 mt-md-0 ml-md-n6 flex" cols="12" md="8"
						>
							<v-btn v-for="(borderCountry, index) in borderCountries" :key="index"
							 variant="plain" class="border mb-2 mx-2"
							>
								{{borderCountry}}
							</v-btn>
						</v-col>
						<v-col v-else class="mt-n2 mt-md-0 ml-md-n6 flex" cols="12" md="8">
							No data
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>