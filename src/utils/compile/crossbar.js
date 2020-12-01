import { LinebarHelper } from './linebar.js';

export class CrossbarHelper extends LinebarHelper {
  // 横向柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  invertedXY() {
    let _tmp = _.cloneDeep(this.setting.xAxis);
    this.setting.xAxis = this.setting.yAxis;
    this.setting.yAxis = _tmp;
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    this.invertedXY();
    return this.baseCompile();
  }
}

export class StackCrossbarHelper extends LinebarHelper {
  // 横向柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  invertedXY() {
    let _tmp = _.cloneDeep(this.setting.xAxis);
    this.setting.xAxis = this.setting.yAxis;
    this.setting.yAxis = _tmp;
  }

  run() {
    this.baseSetInfo(this.chartInfo);
    this.getSeries();
    this.invertedXY();
    this.baseSetStack();
    return this.baseCompile();
  }
}