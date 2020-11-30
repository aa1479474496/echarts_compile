let title = {
  show: false,
  text: "我是标题",
  left: "center",
  top: "10"
};
let legend = {
  show: true,
  left: "center",
  top: "10",
  type: "scroll",
  pageTextStyle: {
    color: "#7B8BAB"
  },
  pageIconInactiveColor: "#D7DCE6",
  pageIconColor: "#7B8BAB",
  pageIconSize: 10,
  itemWidth: 16,
  itemHeight: 8,
  orient: "horizontal",
  position: 'top-center',
  offset: 10
};
let grid = {
  left: 20,
  top: 20,
  right: 20,
  bottom: 20,
  containLabel: true
};
let tooltip = {
  trigger: "axis",
  padding: 0,
  enterable: true,
  confine: true,
  extraCssText: "z-index:999"
};
let toolbox = {};
let colors = [];
let xAxis = {
  type: "category",
  splitNumber: 5,
  splitLine: {
    show: false,
    lineStyle: {
      type: "dotted",
      width: 1
    }
  },
  axisLabel: {
    show: true,
    updown: true,
    rotate: 0
  },
  axisLine: {
    show: true,
    lineStyle: {
      type: "solid"
    }
  },
  axisTick: {
    show: true
  }
};
let yLeftAxis = {
  type: "value",
  splitNumber: 5,
  splitLine: {
    show: false,
    lineStyle: {
      type: "dotted",
      width: 1
    }
  },
  axisLabel: {
    show: true,
    updown: true,
    rotate: 0
  },
  axisLine: {
    show: true,
    lineStyle: {
      type: "solid"
    }
  },
  nameTextStyle: {
    show: true,
    updown: true
  },
  axisTick: {
    show: true
  },
  name: "",
  nameRotate: '0.1'
};
let yRightAxis = {
  type: "value",
  splitNumber: 5,
  splitLine: {
    show: false,
    lineStyle: {
      type: "dotted",
      width: 1
    }
  },
  axisLine: {
    show: true,
    lineStyle: {
      type: "solid"
    }
  },
  nameTextStyle: {
    show: true,
    updown: true
  },
  axisTick: {
    show: true
  },
  name: "",
  nameRotate: '-0.1'
};
let series = {
  name: "",
  unit: "",
  utype: "",
  updown: true,
  colors: colors,
  lineStyle: {
    type: "solid"
  },
  symbol: 'emptyCircle',
  itemStyle: {
    color: ""
  }
};
let label = {
  // show: false,
  show: true,
  fontFamily: "Microsoft Yahei",
  fontSize: 10,
  color: "",
  distance: 5,
  position: "top",
  rotate: 0,
  padding: 2
};

export default {
  linebar: {
    title: "柱状图",
    setting: {
      title,
      legend,
      grid,
      tooltip,
      toolbox,
      xAxis,
      yAxis: [yLeftAxis, yRightAxis]
    },
    series: {
      ...series,
      label,
      yAxisIndex: 0,
      type: "bar"
    },
  }
}