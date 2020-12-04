<script>
import Vue from 'vue';
const context = require.context('./components', true, /\.vue$/);
console.log('context', context);
export default {
  render(h) {
    let items =  context.keys().map(key => {
      try {
        const component = context(key).default;
        let comName = component.name || key;
        Vue.component(comName, component)
        return h(component.name);
      } catch (error) {
        console.warn(`can't find ${key}`);
        return h('span');
      }
    });
    return h('div', items);
  }
}
</script>