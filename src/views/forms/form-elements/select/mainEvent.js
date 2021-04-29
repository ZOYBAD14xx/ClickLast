import Vue from 'vue'
import event from '../select/event.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#event',
  components: { event },
  template: '<event/>'
})
