import { EchartsHelper } from './base.js';

export class LinebarHelper extends EchartsHelper {
  constructor(chartInfo) {
    super(chartInfo);
  }

  getSeries() {
    this.stat.forEach((stat) => {
      let data = _.map(this.list, stat.name);
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



