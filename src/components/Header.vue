<script setup lang="ts">

import { ref,watch } from 'vue'
import { useTheme } from 'vuetify'

const darkMode = ref(false)
const theme = useTheme()

// // Watch for changes in darkMode and update the theme accordingly
watch(darkMode, (newVal) => {
  if (newVal) {
    theme.global.name.value = 'dark'
  } else {
    theme.global.name.value = 'light'
  }
})

</script>

<template>
  <header class="d-flex justify-space-between pa-4 mx-12">
    <h1>Where in the world?</h1>
    <aside class="d-flex my-2">
      <input v-model="darkMode" type="checkbox" class="checkbox" id="checkbox">
      <label for="checkbox" class="checkbox-label">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-regular fa-sun"></i>
        <span class="ball"></span>
      </label>
    </aside>
  </header>
</template>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color:  #e6e6e6;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon {color: #1e3050;}

.fa-sun {color: #f39c12;}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}



</style>
