<template>
  <div>
    <el-row :gutter="20" style="padding: 12px">
      <el-col :span="6">
        <div class="change_item">
          <span>切换图表类型:</span>
          <el-select
            v-model="chartInfo.type"
            placeholder="请选择"
            v-if="chartInfo && chartInfo.type"
            size="mini"
          >
            <el-option
              v-for="item in chartTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

         <div class="change_item">
          <span>切换维度:</span>
          <el-select
            v-model="group"
            value-key="name"
            placeholder="请选择"
            size="mini"
            @change="handleChange"
          >
            <el-option
              v-for="item in grouplist"
              :key="item.name"
              :label="item.label"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="14">
        <div style="height: 350px">
          <echarts
            v-if="chartInfo"
            :chartInfo="chartInfo"
            @echartsInit="echartsInit"
          />
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="20" style="padding: 12px">
      <el-col :span="24">
        <div>
          <div class="line_item">
            <div class="icon_box">
              <div class="def_icon"></div>
            </div>
            <span>xxxxxxxx</span>
          </div>
          <div class="line_item">
            <div class="icon_box">
              <div class="line_icon">
                <div class="ball"></div>
              </div>
            </div>
            <span>xxxxxxxx</span>
          </div>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import styles from "@/config/styles.js";
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
      chartTypes: [
        { value: "linebar", label: "柱状图" },
        { value: "crossbar", label: "横向柱状图" },
        { value: "stackLinebar", label: "柱状堆叠图" },
        { value: "stackCrossbar", label: "横向柱状堆叠图" },
        { value: "stackPercentLinebar", label: "百分比堆叠柱状图" },
        { value: "pie", label: "饼图" },
      ],
      grouplist: [
        { name: "时间", label: "时间" },
        { name: "城市", label: "城市" },
      ],
      group: { name: "时间", label: "时间" },
    };
  },
  mounted() {
    this.list = [
      { 时间: "1月", 城市: "21", 成交面积: 5972.0, 平均面积: 1972.0 },
      { 时间: "2月", 城市: "22", 成交面积: 10000.0, 平均面积: 12000.0 },
      { 时间: "3月", 城市: "23", 成交面积: 1230.0, 平均面积: 3450.0 },
      { 时间: "4月", 城市: "24", 成交面积: 5000.34, 平均面积: 400.34 },
      { 时间: "5月", 城市: "上海", 成交面积: 7204.2, 平均面积: 80.09 },
      { 时间: "6月", 城市: "南京", 成交面积: 5814.65, 平均面积: 76.76 },
    ];

    this.chartInfo = {
      type: "pie",
      group: [this.group],
      stat: [
        {
          name: "成交面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: "#00cc66",
          showBackground: true,
        },
        {
          name: "平均面积",
          unit: "m²",
          yAxisIndex: 0,
          type: "bar",
          color: "#006eff",
          showBackground: true,
        },
      ],
      list: this.list,
      customSetting: {
        chart: {
          // 饼图的series中的配置可以放在这里， 也可以放在第一个stat中
          radius: 120,
          // radius: [50, 70],
          type: "pie",
          color: styles.diffColors[2],
          label: {
            color: "#1C2536",
          },
        },
      },
    };
  },

  methods: {
    echartsInit(instance) {
      // console.log("instance", instance);
    },
    handleChange() {
      this.chartInfo.group = [this.group];
    },
  },
};
</script>

<style lang="scss" scoped>
.change_item {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.test_title {
  @include text_color(color_2);
}
</style>