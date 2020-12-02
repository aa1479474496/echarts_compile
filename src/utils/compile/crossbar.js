import { LinebarHelper } from './linebar.js';

export class CrossbarHelper extends LinebarHelper {
  // 横向柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  setyAxis() {
    this.setting.yAxis.data = this.gvals; // 生成横轴
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    this.setyAxis();
    return this.baseCompile();
  }
}

export class StackCrossbarHelper extends CrossbarHelper {
  // 横向柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    this.setyAxis();
    this.baseSetStack();
    return this.baseCompile();
  }
}