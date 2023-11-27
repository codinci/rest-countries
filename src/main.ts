import { createApp } from 'vue';
import App from '@/App.vue';
import '@/style.scss'
import { createVuetify } from 'vuetify'
import router from '@/route/index'

const app = createApp(App)

const messages = {
  en: {
    title: 'Where in the world?',
    search: 'Search for a country',
    filter: 'Filter by Region',
    allRegions: 'All regions',
    population: 'Population',
    region: 'Region',
    capital: 'Capital'
  },
  fr: {
    title: 'Où dans le monde?',
    search: 'Rechercher un pays',
    filter: 'Filtrer par Région',
    allRegions: 'Toutes les régions',
    population: 'Population',
    region: 'Région',
    capital: 'Capital'
  }
}

const vuetify = createVuetify({
  locale: {
    locale: 'en',
    fallback: 'fr',
    messages,
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          surface: 'hsl(0, 0%, 98%)',
          background: 'hsl(0, 0%, 100%)',
          primary: 'hsl(200, 15%, 8%)',
          secondary: 'hsl(0, 0%, 52%)',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: 'hsl(207, 26%, 17%)',
          surface: 'hsl(209, 23%, 22%)',
          primary: 'hsl(0, 0%, 100%)',
        },
      }
    }
  }
});

app.use(vuetify)
app.use(router)

app.mount('#app')
