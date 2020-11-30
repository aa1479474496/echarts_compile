class EchartsHelper {
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

class LineBarHelper extends EchartsHelper {
  constructor() {
    super();
  }

  run() {
    console.log('LineBarHelper');
  }
}

class CrossBarHelper extends EchartsHelper {
  constructor() {
    super();
  }

  run() {
    console.log('CrossBarHelper');
  }
}

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
    new LineBarHelper(this.chartInfo).run();
  }
}


let compile = new Compile();
export default compile;