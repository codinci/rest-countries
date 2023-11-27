<script setup lang="ts">
import { ref,watch } from 'vue'
import { useTheme, useLocale } from 'vuetify'

const darkMode = ref(false)
const theme = useTheme()
const { t, current } = useLocale()


// Watch for changes in darkMode and update the theme accordingly
watch(darkMode, (newVal) => {
  theme.global.name.value = newVal ? 'dark' : 'light';
});

function changeLocale(locale: string) {
  current.value = locale;
}

const languages = {
  en: 'English',
  fr: 'French',
};
</script>

<template>
  <header class="d-flex justify-space-between pa-2 mx-2 my-2 mx-md-16 ">
    <h1 class="text-subtitle-1 text-primary text-md-h5 mx-md-2">{{ t('$vuetify.title') }}</h1>
    <aside class="d-flex">
      <input v-model="darkMode" type="checkbox" class="checkbox" id="checkbox">
      <label for="checkbox" class="checkbox-label">
        <i class="fa-solid fa-moon"></i>
        <i class="fa-regular fa-sun"></i>
        <span class="ball"></span>
      </label>
      <v-btn
        variant="plain"
        class="mt-n1 text-h4"
      >
        <i class="text-primary fa-solid fa-language"></i>
          <v-menu  activator="parent">
            <v-list class="bg-background">
              <v-list-item v-for="(language, key) in languages"
                :key="key"
                @click="changeLocale(key)"
              >
                <v-list-item-title>
                  {{ language }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-btn>
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
  padding: 2px;
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



h1 {
  font-weight: 800;
}





</style>
