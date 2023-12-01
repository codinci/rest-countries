# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.



### Links

- Solution URL: [Github](https://github.com/codinci/rest-countries)
- Live Site URL: [Vercel](https://rest-countries-six-lilac.vercel.app/)

## My process

### Built with

- [Vue JS](https://vuejs.org) - JS Framework
- [Axios](https://axios-http.com/docs/intro) - Http requests
- [Rest countries](https://restcountries.com/)- Countries API
- [Vuetify](https://vuetifyjs.com/en/) - Style component framework
- [Vue-router](https://router.vuejs.org) - Used for routing in vue3
- [TypeScript](https://www.typescriptlang.org/) - JS with syntax for types


### What I learned

I learnt on Vue3 and its composition API and integrating typescript into the build process.

- Changing the vuetify default font family

```style.css
@use 'vuetify' with (
  $utilities: yes,
  $color-pack: false,
  $body-font-family: 'Nunito Sans'
);

```

- Setting the different themes and theme colors
```main.ts
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

```

- Using vuetify's internationalization for a user to toggle between different languages and toggle theme

```header.vue
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
```

- Use of Suspense
```CountryPage.vue
<v-container class="pt-8 mb-8 pt-md-12 mx-md-14 mx-lg-24">
	<v-row class="d-flex justify-start pt-12">
		<v-btn class="px-8 ml-4" prepend-icon="fa-solid fa-arrow-left" @click="goBack">
			{{t('$vuetify.back')}}
		</v-btn>
	</v-row>
</v-container>

<Suspense>
	<CountryDetail/>
	<template #fallback>
		<div class="d-flex mx-2 mx-md-12 pt-8">
			<v-skeleton-loader
				class="d-flex-column d-flex-md-row justify-space-between"
				width="1600" type="card"
			></v-skeleton-loader>
		</div>
	</template>
</Suspense>

```

### Continued development

- I would love to make more styling enhancements especially on loading states.
- A user to also be able to navigate to the details of the border countries under the country details page.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/45598884/change-default-font-in-vuetify) - This stackoverflow page helped me learn how to configure the font family in vuetify.
- [Vuemastery](https://www.vuemastery.com/blog/async-with-suspense/) - This is an amazing article which helped me finally understand suspense in Vue3 and how to navigate through async functions in my components.

## Author

- Frontend Mentor - [codinci](https://www.frontendmentor.io/profile/codinci)
- Github - [codinci](https://github.com/codinci)
