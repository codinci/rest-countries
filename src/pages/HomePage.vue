<script setup lang="ts">
import HomeLayout from '@/layouts/HomeLayout.vue'

</script>
<template>
<v-container class="d-flex justify-space-between pa-2 mx-2 my-2 mx-md-16 pt-md-12">
	<Suspense>
		<HomeLayout/>
		<template #fallback>Loading... </template>
	</Suspense>
</v-container>
</template>