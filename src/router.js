import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'pages/Home';

Vue.use(VueRouter);

const routes = [{
  name: 'Home',
  path: '/',
  component: Home
}, {
  path: '*',
  component: Home
}];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
