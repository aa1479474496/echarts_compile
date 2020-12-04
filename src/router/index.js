import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const EchartsIndex = () =>
import(/* webpackChunkName: "EchartsPage" */ "@/pages/echarts/index.vue");

const EchartsDiffType = () =>
  import(/* webpackChunkName: "EchartsDiffType" */ "@/pages/echarts/diffType.vue");

const EchartsDiffSettings = () =>
  import(/* webpackChunkName: "EchartsDiffSettings" */ "@/pages/echarts/diffSettings.vue");

const EchartsMacro = () => 
  import(/* webpackChunkName: "EchartsMacro" */ "@/pages/echarts/macro/index.vue");

const routes = [
  {
    path: '/echarts',
    component: EchartsIndex,
    redirect: '/echarts/difftype',
    children: [
      {
        path: '/echarts/difftype',
        component: EchartsDiffType,
        name: 'echarts/difftype',
        title: '切换不同的图表类型'
      },
      {
        path: '/echarts/diffsettings',
        component: EchartsDiffSettings,
        name: 'echarts/diffsettings',
        title: '数据相同的不同配置'
      },
      {
        path: '/echarts/macro',
        component: EchartsMacro,
        name: 'echarts/macro',
        title: '行业宏观demo'
      }
    ]
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