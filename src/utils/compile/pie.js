
import { EchartsHelper } from './base.js';

export class PieHelper extends EchartsHelper {
  // 默认饼图
  constructor(chartInfo) {
    super(chartInfo);
  }

  getSeries() {
    let seriesSetting = _.merge({}, this.setting.chart);
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
      data,
      ...seriesSetting
    });

    // debugger


    // _stat.forEach((stat) => {
    //   // let _data = _.map(this.list, stat.name);
    //   let data = _.map(this.list, (item) => {
    //     return {
    //       value: item[stat.name],
    //       unit: stat.unit,
    //       name: stat.name,
    //       ...seriesSetting
    //     }
    //   });
   
    //   this.series.push({
    //     ...stat,
    //     data,
    //   });
    // });
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    return this.baseCompile();
  }
}