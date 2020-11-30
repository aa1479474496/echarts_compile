import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const EchartsPage = () =>
  import(/* webpackChunkName: "EchartsPage" */ "@/pages/echarts/index.vue");

const routes = [
  {
    path: '/echarts',
    component: EchartsPage
  }
]

const router = new VueRouter({
  routes
});
// fix Vue-Router@3.1.0  Uncaught (in promise)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch(err => err);
}

export { routes };

export default router;