// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import './style.scss'
import { createVuetify } from 'vuetify'

const app = createApp(App);

const vuetify = createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          surface: 'hsl(0, 0%, 52%)',
          background: 'hsl(0, 0%, 98%)',
          primary: 'hsl(200, 15%, 8%)',
          secondary: 'hsl(0, 0%, 100%)',
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

app.use(vuetify);

app.mount('#app');
