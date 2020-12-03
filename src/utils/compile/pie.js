
import { EchartsHelper } from './base.js';

export class PieHelper extends EchartsHelper {
  // 默认饼图
  constructor(chartInfo) {
    super(chartInfo);
  }

  getSeries() {
    let { chart = {} } = this.setting;
    let seriesSetting = _.merge({}, chart);
    let stat = this.stat[0]; // 饼图只有一个指标


    let data =  _.map(this.list, (item) => {
      return {
        value: item[stat.name],
        unit: stat.unit,
        name: item[this.gname],
      }
    });

    this.series.push({
      ...stat,
      ...seriesSetting,
      data,
    });
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    return this.baseCompile();
  }
}