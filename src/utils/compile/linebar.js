import { EchartsHelper } from './base.js';

export class LineBarHelper extends EchartsHelper {
  constructor() {
    super();
  }

  run(chartInfo) {
    this.setInfo(chartInfo);
    let option = {
      tooltip: {
        show: true,
        trigger: "axis"
      },
      xAxis: {
        type: 'category',
        data: this.gvals
      },
      yAxis: {
        type: 'value'
      },
      series: this.series
    }
    console.log('LineBarHelper2', option);
    return option;
  }
}