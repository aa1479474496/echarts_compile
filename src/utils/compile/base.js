
import chartSettings from './defaultSetting.js';
export class EchartsHelper {
  constructor() {
    this.type = '';
    this.group = [];
    this.stat = [];
    this.list = [];
    this.gvals = []; // 维度名
    this.series = [];
    this.customSetting = {};
    this.setting = {};
  }

  setInfo(chartInfo) {
    let { type = 'linebar', group = [], stat = [], list = [], customSetting = {} } = chartInfo;
    this.type = type;
    this.group = group;
    this.stat = stat;
    this.list = list;
    this.customSetting = customSetting;
    if (this.group[0] && this.group[0].name) {
      this.gvals = _.uniq(_.map(this.list, this.group[0].name));
    }
   
    this.setting = _.cloneDeep(chartSettings[this.type].setting || {});
    this.setting = _.merge(this.setting, this.customSetting);
    this.setting.xAxis.data = this.gvals; // 生成横轴
  }

  compile(_options = {}) {
     // 保留特殊配置
    this.setting.series = this.series;
    return _.merge(this.setting, _options);
  }
} 