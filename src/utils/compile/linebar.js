import { EchartsHelper } from './base.js';

export class LineBarHelper extends EchartsHelper {
  constructor() {
    super();
  }

  run(chartInfo) {
    this.setInfo(chartInfo);
    console.log('LineBarHelper2', this.list);
  }
}