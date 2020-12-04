<template>
  <el-col :span="10">
    <Echarts v-if="chartInfo" :chartInfo="chartInfo" style="height: 300px" />
  </el-col>
</template>

<script>
import Echarts from "@/components/echarts/index.vue";
export default {
  name: "gdp",
  components: {
    Echarts,
  },
  data() {
    return {
      chartInfo: null,
    };
  },

  mounted() {
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
    let list = [
      { 时间: "2017-12", 生产总值: 219 },
      { 时间: "2018-03", 生产总值: 185 },
      { 时间: "2018-06", 生产总值: 205 },
      { 时间: "2018-09", 生产总值: 215 },
    ];

    this.chartInfo = {
      type: "crossbar",
      group: [{ name: "时间" }],
      stat: [{ name: "生产总值", yAxisIndex: 0, type: "bar" }],
      list,
      customSetting: {
        tooltip,
        xAxis
      },
    };
  },
};
</script>