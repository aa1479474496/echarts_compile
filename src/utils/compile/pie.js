import Tools from '@/utils/tools.js';
import { EchartsHelper } from './base.js';

export class PieHelper extends EchartsHelper {
  // 默认饼图
  constructor(chartInfo) {
    super(chartInfo);
    this.baseSetInfo(this.chartInfo);
  }

  getSeries() {
    let { chart = {} } = this.setting;
    let seriesSetting = _.merge({}, chart);
    let stat = this.stat[0]; // 饼图只有一个指标

    if (seriesSetting.label) {
      seriesSetting.label.formatter = this.labelFormatter.bind(this);
    }

    let data = _.map(this.list, (item) => {
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

  labelFormatter(params) {
    let { name, percent = '', data } = params;
    let { unit = '', value } = data;
    let _percent = percent ? `(${percent}%)` : '';
    return `${name}: ${Tools.thousandsFormat(value)}${unit} ${_percent}`;
  }

  run() {
    this.getSeries();
    return this.baseCompile();
  }
}