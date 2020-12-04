<template>
  <div>
    <h3>行业宏观测试</h3>
    <macroItem class="macroItem" />
  </div>
</template>

<script>
import macroItem from './item.vue';

export default {
  components: {
    macroItem
  }
}
</script>

<style lang="scss">
  .mac_chart_box {
    border: 1px solid rgba(11,92,195,0.5);
    background: rgba(0,92,255,0.08);
    border-radius: 6px;
  }
  .macroItem {
    @include abs_bg('chartDemo/bg.png', cover);
  }
</style>