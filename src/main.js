import Vue from 'vue';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(SuiVue);

new Vue({
  render: h => h(App)
}).$mount('#app');

