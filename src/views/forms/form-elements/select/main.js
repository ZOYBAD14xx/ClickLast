// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Posm from '../select/Posm.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#Posm',
  components: { Posm },
  template: '<Posm/>'
})
