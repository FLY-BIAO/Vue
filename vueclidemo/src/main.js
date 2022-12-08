import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue2';

import '@/assets/style/common.css'

Vue.use( CKEditor );

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
