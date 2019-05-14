import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'pages/Home';
import Authentication from 'pages/Authentication';
import Cities from 'pages/Cities';
import Venues from 'pages/Venues';

Vue.use(VueRouter);

const routes = [{
  name: 'Home',
  path: '/',
  component: Home
}, {
  name: 'Authentication',
  path: '/authentication',
  component: Authentication
}, {
  name: 'Cities',
  path: '/cities',
  component: Cities
}, {
  name: 'Venues',
  path: '/venues',
  component: Venues
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
