import { EchartsHelper } from './base.js';

export class LinebarHelper extends EchartsHelper {
  // 默认柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  getSeries() {
    this.stat.forEach((stat) => {
      // let _data = _.map(this.list, stat.name);
      let data = _.map(this.list, (item) => {
        return {
          value: item[stat.name],
          unit: stat.unit
        }
      });
      // // 面积图特殊处理
      if (stat.type == 'area') {
        stat.type = "line";
        stat.areaStyle = {};
      }
      this.series.push({
        ...stat,
        data,
        showBackground: true,
      });
    });
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    return this.baseCompile();
  }
} 

export class StackLinebarHelper  extends LinebarHelper {
  // 堆叠柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    this.baseSetStack();
    return this.baseCompile();
  }
}

export class StackPercentLinebarHelper extends LinebarHelper {
  // 百分比堆叠柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    this.baseSetPercent();
    return this.baseCompile();
  }
}



