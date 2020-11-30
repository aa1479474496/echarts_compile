export class EchartsHelper {
  constructor() {
    this.type = '';
    this.group = [];
    this.stat = [];
    this.list = [];
  }

  setInfo(chartInfo) {
    let { type = 'linebar', group = [], stat = [], list = [] } = chartInfo;
    this.type = type;
    this.group = group;
    this.stat = stat;
    this.list = list;
  }

  run() {
    console.log('base run');
  }
} 