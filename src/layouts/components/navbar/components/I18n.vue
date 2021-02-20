<template>
 
</template>

<script>
export default {
  computed: {
    i18n_locale_img () {
      // Use below code to dynamically fetch image instead of if-else
      // NOTE: We used if-else because laravel throws error in 'yarn prod'.
      // If you are not using laravel + Vue, you can use below code to dynamically get image
      // return require(`@/assets/images/flags/${this.$i18n.locale}.png`)

      const locale = this.$i18n.locale
      if (locale === 'en')      return require('@/assets/images/flags/en.png')
      else if (locale === 'pt') return require('@/assets/images/flags/pt.png')
      else if (locale === 'fr') return require('@/assets/images/flags/fr.png')
      else if (locale === 'de') return require('@/assets/images/flags/de.png')
      else return require('@/assets/images/flags/en.png')
    },
    getCurrentLocaleData () {
      const locale = this.$i18n.locale
      if (locale === 'en')      return { flag: 'us', lang: 'English'    }
      else if (locale === 'pt') return { flag: 'br', lang: 'Portuguese' }
      else if (locale === 'fr') return { flag: 'fr', lang: 'French'     }
      else if (locale === 'de') return { flag: 'de', lang: 'German'     }
    }
  },
  methods: {
    updateLocale (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
