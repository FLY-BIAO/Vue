import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/style/common.css'

Vue.use( CKEditor );
Vue.use( ElementUI )

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
