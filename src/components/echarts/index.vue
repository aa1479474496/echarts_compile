<template>
  <echarts
    ref="echarts"
    :options="options"
    :theme="theme"
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

// import chinaMap from '@/config/china.json';
// echarts.registerMap("china", chinaMap);
// import optioncompile from "@/components/report/chart/com/compile.js";
export default {
  data() {
    return {
      watchShallow: true,
      lastmd5: "",
      // options: {},
      options: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      },
      theme: "",
      unLegend: [],
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

      let _theme = bi.dash.data.attr.theme || "";
      let _lastmd5 = bi.md5(JSON.stringify(data)) + _theme;
      if (_lastmd5 == this.lastmd5 && !force) {
        console.log("chartdata nochange", _lastmd5);
        return this.options;
      }

      this.lastmd5 = _lastmd5;
      let _option = optioncompile.run(data, this.chartInfo.w, this.chartInfo.h);
      _option.animation = false;
      //   console.log('_option:', _option, data);

      // this.options = {
      //   animationDuration: 1300,
      //   animationDelay: 0,
      //   animationDurationUpdate: 1300,
      //   animationDelayUpdate: 0,
      //   ..._option
      // };

      this.options = _option;
      this.theme = bi.dash.data.attr.theme || "";
      return this.options;
    },
  },
  computed: {},

  mounted() {
    window.dispatchEvent(new Event("resize"));
  },

  components: {
    echarts,
  },
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
