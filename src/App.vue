<script setup lang="ts">
import Header from '@/components/Header.vue';

</script>

<template>
  <Header/>
  <main class="bg-surface mt-4">
    <router-view v-slot="{ Component }">
       <component :is="Component" />
      <!-- <transition  name="page" mode="out-in">

      </transition> -->
    </router-view>
  </main>

</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>

