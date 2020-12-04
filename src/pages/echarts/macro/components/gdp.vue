<template>
  <el-col :span="10" class="mac_chart_box">
    <Echarts v-if="chartInfo" :chartInfo="chartInfo" style="height: 300px" />
  </el-col>
</template>

<script>
import echarts from "echarts/lib/echarts";

import Echarts from "@/components/echarts/index.vue";
export default {
  name: "gdp",
  components: {
    Echarts,
  },
  data() {
    return {
      chartInfo: null,
      stat: { name: "生产总值" },
      group: { name: "时间" },
    };
  },

  mounted() {
    let list = [
      { 时间: "2017-12", 生产总值: 219 },
      { 时间: "2018-03", 生产总值: 185 },
      { 时间: "2018-06", 生产总值: 205 },
      { 时间: "2018-09", 生产总值: 215 },
    ];

    let _data = _.map(list, this.stat.name);
    let _maxData = _.fill(Array(_data.length), _.max(_data));

    let tooltip = { show: false };
    let xAxis = {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    };
    let _leftYAxis = {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: "#869CC0",
        fontSize: 12,
      },
      nameTextStyle: {
        padding: [0, 0, 0, -20],
        color: "#999",
      },
    };

    let _rightYAxis = _.merge({}, _leftYAxis, {
      axisLabel: {
        show: true,
        inside: false,
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      data: _data,
    });

    let yAxis = [_leftYAxis, _rightYAxis];

    let _defseries = {
      name: "",
      type: "pictorialBar",
      symbol: "rect",
      symbolSize: [4, 15],
      symbolRepeat: true,
      symbolMargin: 3,
    }

    let _series0 = _.merge({}, _defseries, {
      itemStyle: {
        color: '#17225D'
      },
      data: _maxData
    });
    let _series1 = _.merge({}, _defseries, {
      itemStyle: {
        color: 'rgba(0, 107, 255, 1)'
      },
      data: _data
    });

    this.chartInfo = {
      type: "crossbar",
      group: [this.group],
      // stat: [{ name: "生产总值", yAxisIndex: 0, type: "bar",  barMaxWidth: 1, color:'transparent' }],
      list,
      customSetting: {
        grid: {
          top: 0,
        },
        tooltip,
        xAxis,
        yAxis,
        series: [
         _series0,
         _series1,
        ]
      },
    };
  },
};
</script>