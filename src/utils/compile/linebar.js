import { EchartsHelper } from './base.js';

export class LinebarHelper extends EchartsHelper {
  // 默认柱状图
  constructor(chartInfo) {
    super(chartInfo);
    this.baseSetInfo(this.chartInfo);
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
        stat.areaStyle = stat.areaStyle || {};
      }
      this.series.push({
        ...stat,
        data,
      });
    });
  }

  run() {
    this.basexAxis();
    this.getSeries();
    return this.baseCompile();
  }
} 

export class StackLinebarHelper  extends LinebarHelper {
  // 堆叠柱状图
  constructor(chartInfo) {
    super(chartInfo);
    this.basexAxis();

  }

  run() {
    this.getSeries();
    this.baseSetStack();
    return this.baseCompile();
  }
}

export class StackPercentLinebarHelper extends LinebarHelper {
  // 百分比堆叠柱状图
  constructor(chartInfo) {
    super(chartInfo);
    this.basexAxis();
  }

  run() {
    this.getSeries();
    this.baseSetPercent();
    this.setting.yAxis[0].max = 100;
    return this.baseCompile();
  }
}

