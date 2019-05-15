import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'pages/Home';
import Article from 'pages/Article';

Vue.use(VueRouter);

const routes = [{
  name: 'Home',
  path: '/',
  component: Home
}, {
  name: 'Authentication',
  path: '/authentication',
  component: Article
}, {
  name: 'Cities',
  path: '/cities',
  component: Article
}, {
  name: 'GetACityById',
  path: '/cities/get',
  component: Article
}, {
  name: 'ListAllCities',
  path: '/cities/list',
  component: Article
}, {
  name: 'Venues',
  path: '/venues',
  component: Article
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
