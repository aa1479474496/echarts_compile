export class EchartsHelper {
  constructor() {
    this.type = '';
    this.group = [];
    this.stat = [];
    this.list = [];
    this.gvals = []; // 维度名
    this.series = [];
  }

  setInfo(chartInfo) {
    let { type = 'linebar', group = [], stat = [], list = [] } = chartInfo;
    this.type = type;
    this.group = group;
    this.stat = stat;
    this.list = list;
    if (this.group[0] && this.group[0].name) {
      // debugger
      this.gvals =  _.uniq(_.map(this.list, this.group[0].name));
      // console.log('this.gvals', this.gvals);
    }

    this.stat.forEach((stat) => {
      let data = _.map(this.list, stat.name);
      this.series.push({
        ...stat,
        data,
        showBackground: true,
      });
    });
    console.log('dddd', this.series);
  }

  run() {
    console.log('base run');

  }
} 