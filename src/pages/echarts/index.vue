<template>
  <div>
    <h3 class="test_title">vue-echarts compile 测试</h3>
    <el-row :gutter="20" style="padding: 24px">
      <el-col :span="12">
        <div style="height: 350px">
          <echarts />
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

    }
  },
  mounted() {
    
    this.list = [
      { 城市: "21", 成交面积: "12345972.00", 平均面积: "12345972.00" },
      { 城市: "22", 成交面积: "10000000.00", 平均面积: "10000000.00" },
      { 城市: "23", 成交面积: "0.00", 平均面积: "0.00" },
      { 城市: "24", 成交面积: "5000000.34", 平均面积: "5000000.34" },
      { 城市: "上海", 成交面积: "17457204.20", 平均面积: "80.09" },
      { 城市: "南京", 成交面积: "12435814.65", 平均面积: "76.76" },
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

    // compile.setInfo(chartInfo);

    compile.init(chartInfo);

    // console.log('=======', compile);
  },
};
</script>

<style lang="scss" scoped>
.test_title {
  @include text_color(color_2);
}
</style>