<template>
  <el-col :span="14" class="mac_chart_box">
    <Echarts v-if="chartInfo" :chartInfo="chartInfo" />
  </el-col>
</template>

<script>
import echarts from "echarts/lib/echarts";
import Echarts from "@/components/echarts/index.vue";
export default {
  name: "industrial",
  components: {
    Echarts,
  },
  data() {
    return {
      chartInfo: null,
    };
  },

  mounted() {
    let list = [
      { 月度: "2017-10", 当月同比: 6.2, 累计同比: 6.7 },
      { 月度: "2017-11", 当月同比: 6.1, 累计同比: 6.6 },
      { 月度: "2017-12", 当月同比: 6.2, 累计同比: 6.6 },
      { 月度: "2018-01", 当月同比: 15.43, 累计同比: 15.43 },
      { 月度: "2018-02", 当月同比: -2.12, 累计同比: 7.2 },
      { 月度: "2018-03", 当月同比: 6, 累计同比: 6.8 },
    ];

    this.chartInfo = {
      type: "linebar",
      group: [{ name: "月度" }],
      stat: [
        {
          name: "当月同比",
          type: "area",
          itemStyle: {
            color: "#0087FF",
          },
          smooth: true,
          symbol: "circle",
          symbolSize: 2,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(31, 142, 250, .5)",
                  },
                  {
                    offset: 1,
                    color: "rgba(31, 142, 250, .1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(31, 142, 250, .1)",
              shadowBlur: 20,
            },
          },
        },
        {
          name: "累计同比",
          type: "area",
          smooth: true,
          symbol: "circle",
          symbolSize: 2,
          itemStyle: {
            color: "#DDBC06",
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(221, 188, 6, .5)",
                  },
                  {
                    offset: 1,
                    color: "rgba(221, 188, 6, .1)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(221, 188, 6, .1)",
              shadowBlur: 20,
            },
          },
        },
      ],
      customSetting: {
        legend: {
          left: "1%",
          textStyle: {
            color: "rgba(255,255,255,0.7)",
            padding: [3, 0, 0, 0],
          },
          fontSize: 12,
          itemWidth: 14,
          itemHeight: 14,
          icon: "roundRect",
        },
      },
      list,
    };
  },
};
</script>