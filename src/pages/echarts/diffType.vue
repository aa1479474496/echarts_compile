<template>
  <div>
    <!-- <h3 class="test_title">切换不同的图表类型测试</h3> -->
    <!-- <el-row :gutter="20" style="padding: 12px">
      <el-col :span="24">
        <div style="height: 350px">
          <echarts v-if="chartInfo" :chartInfo="chartInfo" @echartsInit="echartsInit"/>
        </div>
      </el-col>
    </el-row> -->

    <el-row :gutter="20" style="padding: 12px">
      <el-col :span="24">
        <el-select v-model="chartInfo2.type" placeholder="请选择" v-if="chartInfo2&&chartInfo2.type" size="mini">
          <el-option
            v-for="item in chartTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div style="height: 350px">
          <echarts v-if="chartInfo2" :chartInfo="chartInfo2" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import compile2 from "@/utils/compile2/index.js";
import compile from "@/utils/compile/index.js";
import echarts from "@/components/echarts/index.vue";
export default {
  components: {
    echarts,
  },
  data() {
    return {
      list: [],
      chartInfo: null,
      chartInfo2: null,
      chartTypes: [
        { value: "linebar", label: "柱状图" },
        { value: "crossbar", label: "横向柱状图" },
        { value: "stackLinebar", label: "柱状堆叠图" },
        { value: "stackCrossbar", label: "横向柱状堆叠图" },
      ],
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
          top: 20,
        },
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
          color: "#00cc66",
        },
        {
          name: "平均面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: "#006eff",
        },
      ],
      list: this.list,
    };

    this.chartInfo = chartInfo;
    this.chartInfo2 = chartInfo2;
  },

  methods: {
    echartsInit(instance) {
      console.log("instance", instance);
    },
  },
};
</script>

<style lang="scss" scoped>
.test_title {
  @include text_color(color_2);
}
</style>