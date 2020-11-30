<template>
  <echarts
    ref="echarts"
    :options="options"
    :autoResize="true"
    class="chart_box_wrap"
  ></echarts>
</template>

<script>
import echarts from "./vueEcharts.vue";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/map";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/title";
import "echarts/lib/component/geo";
import "echarts/lib/component/graphic";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/markLine";


import compile from '@/utils/compile/index.js';

// import chinaMap from '@/config/china.json';
// echarts.registerMap("china", chinaMap);
// import optioncompile from "@/components/report/chart/com/compile.js";
export default {
   components: {
    echarts,
  },
  data() {
    return {
      options: {}
    };
  },

  props: {
    chartInfo: Object,
  },

  methods: {
    setOptions(data, force = false) {
      if (data.list.length == 0) {
        return {};
      }

      
      let _option = compile.init(data);
      //   console.log('_option:', _option, data);

      // this.options = {
      //   animationDuration: 1300,
      //   animationDelay: 0,
      //   animationDurationUpdate: 1300,
      //   animationDelayUpdate: 0,
      //   ..._option
      // };

      this.options = _option;
      console.log('-------------', this.options);
      return this.options;
    },
  },
  computed: {},

  mounted() {
    window.dispatchEvent(new Event("resize"));
  },

  watch: {
    chartInfo: {
      handler(val, oldval) {
        this.setOptions(val);
      },
      immediate: true,
      deep: true
    }
  }

 
};
</script>

<style lang="scss" scoped>
  .chart_box_wrap {
    width: 100%;
    height: 100%;
    margin: auto;
    border: none;
    background-color: transparent;
  }
</style>
