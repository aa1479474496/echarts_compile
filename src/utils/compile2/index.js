import linebar from './linebar.js';
let compile = {
  type: '',
  group: [],
  stat: [],
  list: [],

  setInfo(chartInfo) {
    let { type = 'linebar', group = [], stat = [], list = [] } = chartInfo;
    this.type = type;
    this.group = group;
    this.stat = stat;
    this.list = list;
    this[this.type]();

    console.log('=====', chartInfo);
  },

  linebar() {
    linebar(this.chartInfo, this);
    console.log('222', this);
  }
}



export default compile;