import { LineBarHelper } from './linebar.js';


class Compile {
  constructor() {
    this.chartInfo = {};
    // this.lineBar = new
    // this.lineBar = new LineBarHelper(chartInfo);


  }
  init(chartInfo) {
    this.chartInfo = chartInfo;
    this.run();
  }

  run() {
    let { type } = this.chartInfo;
    this[type]();
  }

  linebar() {
    new LineBarHelper(this.chartInfo).run(this.chartInfo);
  }
}

let compile = new Compile();
export default compile;