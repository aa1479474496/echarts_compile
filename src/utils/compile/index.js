import { LineBarHelper } from './linebar.js';


class Compile {
  constructor() {
    this.chartInfo = {};
  }
  init(chartInfo) {
    this.chartInfo = chartInfo;
    let { type } = this.chartInfo;
    return this[type]();
  }

  linebar() {
    return new LineBarHelper(this.chartInfo).run(this.chartInfo);
  }
}

let compile = new Compile();
export default compile;