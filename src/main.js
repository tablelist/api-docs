import Vue from 'vue';

import Docs from 'src/pages/Docs';
import router from 'src/router';

//COMPONENTS
import Sidebar from 'components/sidebar';

import './styles/main.less';

Vue.component('sidebar', Sidebar);

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  router,
  template: '<Docs></Docs>',
  components: {
    Docs
  }
}).$mount('#site');
