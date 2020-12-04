import { LinebarHelper } from './linebar.js';

export class CrossbarHelper extends LinebarHelper {
  // 横向柱状图
  constructor(chartInfo) {
    super(chartInfo);
  }

  setyAxis() {
    this.setting.yAxis[0].data = this.gvals; // 生成横轴
  }

  run() {
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
    this.getSeries();
    this.setyAxis();
    this.baseSetStack();
    return this.baseCompile();
  }
}

export class StackPercentCrossbar extends CrossbarHelper {
  // 百分比横向柱状堆叠图
  constructor(chartInfo) {
    super(chartInfo);
  }

  run() {
    this.getSeries();
    this.setyAxis();
    this.baseSetPercent();
    this.setting.xAxis.max = 100;
    return this.baseCompile();
  }
}