<template>
  <div>
    <el-row :gutter="20" style="padding: 12px">
      <!-- <el-col :span="12">
        <div style="height: 350px">
          <Echarts
            v-if="chartInfo"
            :chartInfo="chartInfo"
            @echartsInit="echartsInit"
          />
        </div>
      </el-col> -->

      <el-col :span="12">
        <div style="height: 350px">
          <Echarts v-if="chartInfo2" :chartInfo="chartInfo2" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import compile from "@/utils/compile/index.js";
import Echarts from "@/components/echarts/index.vue";
export default {
  components: {
    Echarts,
  },
  data() {
    return {
      list: [],
      chartInfo: null,
      chartInfo2: null,
    };
  },
  mounted() {
    this.list = [
      { 时间: "1月", 城市: "21", 成交面积: "5972.00", 平均面积: "1972.00" },
      { 时间: "2月", 城市: "22", 成交面积: "10000.00", 平均面积: "12000.00" },
      { 时间: "3月", 城市: "23", 成交面积: "1230.00", 平均面积: "3450.00" },
      { 时间: "4月", 城市: "24", 成交面积: "5000.34", 平均面积: "400.34" },
      { 时间: "5月", 城市: "上海", 成交面积: "7204.20", 平均面积: "80.09" },
      { 时间: "6月", 城市: "南京", 成交面积: "5814.65", 平均面积: "76.76" },
    ];

    let chartInfo = {
      type: "linebar",
      group: [{ name: "城市" }],
      stat: [
        {
          name: "成交面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: "#00cc66",
          barWidth: 10,
        },
        {
          name: "平均面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: "#006eff",
        },
      ],
      customSetting: {
        legend: {
          top: 0,
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [
          {
            name: "纵轴坐标名",
            nameTextStyle: {
              show: true,
              color: "#006eff",
            },
          },
        ],
      },
      list: this.list,
    };

    let chartInfo2 = {
      type: "crossbar",
      group: [{ name: "时间" }],
      stat: [
        {
          name: "成交面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        {
          name: "平均面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: "#00cc66",
        },
      ],
      customSetting: {
        legend: {
          top: 0,
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              type: "dashed",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          name: "纵轴坐标名",
          nameTextStyle: {
            show: true,
            color: "#006eff",
          },
        },
      },
      list: this.list,
    };

    this.chartInfo = chartInfo;
    this.chartInfo2 = chartInfo2;
  },

  methods: {
    echartsInit(instance) {
      // console.log("instance", instance);
    },
  },
};
</script>

