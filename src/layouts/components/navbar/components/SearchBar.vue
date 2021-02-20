<template>
 
</template>

<script>
import VxAutoSuggest from '@/components/vx-auto-suggest/VxAutoSuggest.vue'

export default {
  components: {
    VxAutoSuggest
  },
  data () {
    return {
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      showFullSearch: false
    }
  },
  computed: {
    // below computed property 'get_ext_img' is not required if you are using dynamic image rendering instead of if-else for laravel issue
    get_ext_img () {
      return (ext) => {
        if (ext === 'doc')      return require('@/assets/images/file-icons/doc.png')
        else if (ext === 'jpg') return require('@/assets/images/file-icons/jpg.png')
        else if (ext === 'xls') return require('@/assets/images/file-icons/xls.png')
        else if (ext === 'pdf') return require('@/assets/images/file-icons/pdf.png')
        else return require('@/assets/images/file-icons/doc.png')
      }
    }
  },
  methods: {
    selected (item) {
      if (item.pages) this.$router.push(item.pages.url).catch(() => {})
      this.showFullSearch = false
    },
    hnd_search_query_update (query) {
      // Show overlay if any character is entered
      this.$store.commit('TOGGLE_CONTENT_OVERLAY', !!query)
    }
  }
}

</script>
