import { LinebarHelper, StackLinebarHelper, StackPercentLinebarHelper } from './linebar.js';
import { CrossbarHelper, StackCrossbarHelper, StackPercentCrossbar } from './crossbar.js';
import { PieHelper } from './pie.js';

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
    return new LinebarHelper(this.chartInfo).run();
  }

  stackLinebar() {
    return new StackLinebarHelper(this.chartInfo).run();
  }

  stackPercentLinebar() {
    return new StackPercentLinebarHelper(this.chartInfo).run();
  }

  crossbar() {
    return new CrossbarHelper(this.chartInfo).run();
  }

  stackCrossbar() {
    return new StackCrossbarHelper(this.chartInfo).run();
  }

  stackPercentCrossbar() {
    return new StackPercentCrossbar(this.chartInfo).run();
  }

  pie() {
    return new PieHelper(this.chartInfo).run();
  }
 }

let compile = new Compile();
export default compile;