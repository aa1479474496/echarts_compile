<template>
  <div>
    <h3 class="test_title">vue-echarts compile 测试</h3>
    <el-row :gutter="20" style="padding: 12px">
      <el-col :span="24">
        <div style="height: 350px">
          <echarts v-if="chartInfo" :chartInfo="chartInfo"/>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="padding: 12px">
      <el-col :span="24">
        <div style="height: 350px">
          <echarts v-if="chartInfo2" :chartInfo="chartInfo2"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import compile2 from '@/utils/compile2/index.js';
import compile from '@/utils/compile/index.js';
import echarts from "@/components/echarts/index.vue";
export default {
  components: {
    echarts,
  },
  data() {
    return {
      list: [],
      chartInfo: null,
      chartInfo2: null

    }
  },
  mounted() {
    
    this.list = [
      // { 城市: "21", 成交面积: "12345972.00", 平均面积: "12345972.00" },
      {时间: '1月', 城市: "21", 成交面积: "5972.00", 平均面积: "1972.00" },
      {时间: '2月', 城市: "22", 成交面积: "10000.00", 平均面积: "12000.00" },
      {时间: '3月', 城市: "23", 成交面积: "1230.00", 平均面积: "3450.00" },
      {时间: '4月', 城市: "24", 成交面积: "5000.34", 平均面积: "400.34" },
      {时间: '5月', 城市: "上海", 成交面积: "7204.20", 平均面积: "80.09" },
      {时间: '6月', 城市: "南京", 成交面积: "5814.65", 平均面积: "76.76" },
    ];

    let chartInfo = {
      type: 'linebar',
      group: [
        { name: '城市' }
      ],
      stat: [
        { name: '成交面积', unit: 'm²', yAxisIndex: 0, type: 'bar' },
        { name: '平均面积', unit: 'm²', yAxisIndex: 0, type: 'bar' },
      ],
      list: this.list
    };

    let chartInfo2 = {
      type: 'linebar',
      group: [
        { name: '时间' }
      ],
      stat: [
        { name: '成交面积', unit: 'm²', yAxisIndex: 0, type: 'line' },
        { name: '平均面积', unit: 'm²', yAxisIndex: 0, type: 'bar' },
      ],
      list: this.list
    };

    this.chartInfo = chartInfo;
    this.chartInfo2 = chartInfo2;
  },
};
</script>

<style lang="scss" scoped>
.test_title {
  @include text_color(color_2);
}
</style>