<script setup lang="ts">
import HomeLayout from '@/layouts/HomeLayout.vue'

</script>
<template>
<v-container class="d-flex justify-space-between pa-2 mx-2 my-2 mx-md-16 pt-md-12">
	<Suspense>
		<HomeLayout/>
		<template #fallback>
			<div>
				<v-row class="d-flex flex-column flex-sm-row justify-space-between align-start pt-4">
					<v-col cols="9" sm="8" md="5">
						<v-skeleton-loader type="text" class="pa-4"></v-skeleton-loader>
					</v-col>
					<v-col class="mr-md-n2 mr-lg-n16" cols="6" sm="4" md="4" lg="2">
						<v-skeleton-loader type="text" class="pa-4"></v-skeleton-loader>
					</v-col>
				</v-row>
				<v-row class="d-flex justify-space-between">
					<v-col v-for="n in 20" :key="n" cols="12" sm="6" md="2" class="mx-2 mx-md-12 mb-4">
						<v-skeleton-loader></v-skeleton-loader>
					</v-col>
				</v-row>
			</div>
		</template>
	</Suspense>
</v-container>
</template>