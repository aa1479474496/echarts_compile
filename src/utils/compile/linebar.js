import { EchartsHelper } from './base.js';

export class LineBarHelper extends EchartsHelper {
  constructor() {
    super();
  }

  getSeries() {
    this.stat.forEach((stat) => {
      let data = _.map(this.list, stat.name);
      this.series.push({
        ...stat,
        data,
        showBackground: true,
      });
    });
  }

  run(chartInfo) {
    this.setInfo(chartInfo);
    this.getSeries();
    return this.compile();
  }
}


