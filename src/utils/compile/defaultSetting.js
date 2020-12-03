let title = {
  show: false,
  text: "我是标题",
  left: "center",
  top: "10"
};
let legend = {
  show: true,
  left: "center",
  top: 0,
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
  top: 40,
  right: 40,
  bottom: 20,
  containLabel: true
};
let tooltip = {
  trigger: "axis",
  padding: 0,
  borderRadius: 0,
  backgroundColor: 'transparent',
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
    show: false
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
    show: false,
    lineStyle: {
      type: "solid"
    }
  },
  nameTextStyle: {
    show: false,
  },
  axisTick: {
    show: false
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

let linebar = {
  title: "柱状图",
  setting: {
    title,
    legend,
    grid,
    tooltip,
    toolbox,
    xAxis,
    yAxis: [yLeftAxis, yRightAxis]
  }
}

let crossbar = {
  title: "横向柱状图",
  setting: {
    title,
    legend,
    grid,
    tooltip,
    toolbox,
    xAxis: yLeftAxis,
    yAxis: xAxis
  }
}

let stackPercentLinebar = _.merge({}, linebar, {
  setting: {
    yAxis: [
      {
        ...yLeftAxis,
        name: '单位: %',
        nameTextStyle: {
          show: true,
        },
      },
      yRightAxis
    ]
  }
});

let pie = {
  setting: {
    title,
    grid,
    legend: {
      right: 10,
      top: 20,
      bottom: 20,
      type: 'scroll',
      orient: 'vertical',
    },
    tooltip: _.merge({}, tooltip, {trigger: 'item'}),
    chart: {
      radius: 100,
      type: 'pie',
      color: ["#00cc66","#006eff","#ff3355","#6ede5f","#f9de4c","#f9a84c","#f2677c","#f267bf","#9d57e8"]
    }
  }
}

export default {
  linebar,
  crossbar,
  stackLinebar: {
    ...linebar,
    title: "柱状堆叠图",
  },

  stackCrossbar: {
    ...crossbar,
    title: "横向柱状图",
  },

  stackPercentLinebar: {
    ...stackPercentLinebar,
    title: "百分比堆叠柱状图",
  },
  pie: {
    title: '饼图',
    ...pie
  }
}
